<template>
  <div class="app">
    <post-form
    @create="createPost"
    />
    <post-list
    :posts="posts"
    @remove="removePost"
    />
  </div>
</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"

export default {
  components: {
    PostForm, PostList
  },
  data(){
    return {
      posts: [
        { id: 1, title: 'Frist-title', body: 'First description'},
        { id: 2, title: 'Second-title', body:  'description text'},
        { id: 3, title: 'Thrid', body: 'Lorem ipsum'},
      ],
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id != post.id)
    }
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
</style>
