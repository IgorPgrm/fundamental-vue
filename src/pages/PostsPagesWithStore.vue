<template>
  <div class="posts">
    <h1>Публикации</h1>
    <my-input
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    v-model="searchQuery"
    placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
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
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <my-page-wrapper
    :totalPages="this.totalPages"
    v-model="page"
    /> -->
  </div>
</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    PostForm, PostList
  },
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },
  
  mounted: function() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
    posts: state => state.post.posts,
    isPostLoading: state => state.post.isPostLoading,
    selectedSort: state => state.post.selectedSort,
    searchQuery: state => state.post.searchQuery,
    page: state => state.post.page,
    limit: state => state.post.limit,
    totalPages: state => state.post.totalPages,
    sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    // page(){
    //   this.fetchPosts()
    // }
  }
}
</script>
<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
}
</style>
