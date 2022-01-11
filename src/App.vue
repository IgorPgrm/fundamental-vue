<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input v-bind:value="title"
      @input="title = $event.target.value"
      class="new-post-input" 
      type="text" placeholder="Название">

      <input v-bind:value="body"
      @input="body = $event.target.value"
      class="new-post-input" 
      type="text" placeholder="Описание">

      <button type="submit" 
      class="btn btn-create-post btn-success" 
      @click="createPost">Создать</button>
    </form>
    <div class="post"  v-for="post in posts" :key="post.id">
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>
<script>
export default {
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

.post {
  padding: 15 px;
  margin-top: 15px;
  border: 2px solid teal;
}

.new-post-input {
  width: 100%;
  height: 30px;
  border: 1px solid teal;
  padding: 10px 15 px;
  margin-top: 15px;
}

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;

}
.btn-create-post {
  margin-top: 15px;
  align-self: flex-end;
  padding: 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
  
</style>
