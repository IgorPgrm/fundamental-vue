<template>
  <div>
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
      ]
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
  
</style>
