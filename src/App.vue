<template>
  <div class="app">
    <h1>Публикации</h1>
    <my-input
    v-model="searchQuery"
    placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select
      v-model="selectedSort"
      :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isPostLoading"
    />
    <div v-else class="loading-bar">
      Загрузка...
    </div>
    <div ref="observer" class="observer">

    </div>
    <!-- <my-page-wrapper
    :totalPages="this.totalPages"
    v-model="page"
    /> -->
  </div>
</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import axios from 'axios'

export default {
  components: {
    PostForm, PostList
  },
  data(){
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'По названию'},
        { value: 'body', name: 'По содержимому'}
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id != post.id)
    },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchPosts(){
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.posts = response.data;
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
      } catch(e) {
        alert("Ошибка:");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts(){
      this.page += 1;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.posts = [...this.posts, ...response.data];
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
      } catch(e) {
        alert("Ошибка:");
      }
    }
  },
  
  mounted: function() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
    /* Content excerpted, show below */
    if (entries[0].isIntersecting && this.page < this.totalPages){
      this.loadMorePosts();
    }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
    // page(){
    //   this.fetchPosts()
    // }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background: green;
}
</style>
