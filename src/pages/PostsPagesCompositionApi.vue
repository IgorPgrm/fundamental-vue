<template>
  <div class="posts">
    <h1>Публикации</h1>
    <h1> {{ likes }}</h1>
    <!-- <my-input
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
    <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import fetchPosts from "@/hooks/fetchPosts"
import axios from 'axios'
import {ref} from 'vue'

export default {
  components: {
    PostForm, PostList
  },
  data(){
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию'},
        { value: 'body', name: 'По содержимому'}
      ]
    }
  },
  setup(props){
    const {posts, totalPages, isPostsLoading} = fetchPosts(10);

    return { posts, totalPages, isPostsLoading }
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
