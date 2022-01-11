<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
    v-model="post.title"
    class="new-post-input" 
    type="text" placeholder="Название">

    <input
    v-model="post.body"
    class="new-post-input" 
    type="text" placeholder="Описание">

    <my-button type="submit" 
    class="btn btn-create-post btn-success" 
    @click="createPost">Создать</my-button>
  </form>
</template>
<script>
import MyButton from "@/components/UI/MyButton"
export default {
  components: { MyButton },
  data(){
    return {
      post: {
        title: '', body: ''
      }
    }
  },
  methods: {
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
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

.new-post-input {
  width: 100%;
  height: 30px;
  border: 1px solid teal;
  padding: 10px 15 px;
  margin-top: 15px;
}
</style>
