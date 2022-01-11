<template>
  <div class="app">
    <post-form/>
    <post-list :posts="posts"/>
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
      title: '', 
      body: ''
    }
  },
  methods: {
    createPost(){
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost);
      this.title=this.body='';
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
