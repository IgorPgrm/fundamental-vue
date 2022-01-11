<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input :value="post.title"
    @input="post.title = $event.target.value"
    class="new-post-input" 
    type="text" placeholder="Название">

    <input :value="post.body"
    @input="post.body = $event.target.value"
    class="new-post-input" 
    type="text" placeholder="Описание">

    <button type="submit" 
    class="btn btn-create-post btn-success" 
    @click="createPost">Создать</button>
  </form>
</template>
<script>
export default {
  data(){
    return {
      post: {
        title: '', body: ''
      }
    }
  }
  
}
</script>
<style scoped>
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

.new-post-input {
  width: 100%;
  height: 30px;
  border: 1px solid teal;
  padding: 10px 15 px;
  margin-top: 15px;
}
</style>
