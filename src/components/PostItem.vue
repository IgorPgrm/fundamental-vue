<template>
  <div class="post">
    <div>
      <div class="post__id">id: {{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__buttons">
       <my-button 
      class="btn"
      @click="$router.push(`/posts/${post.id}`)"
      >Открыть</my-button>
      <my-button 
      class="btn"
      @click="$emit('remove', post)"
      >Удалить</my-button>
    </div>
  </div>
</template>
<script>


export default {
  props: {
    post:  {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.post {
  height: 65px;
  padding: 15 px;
  margin-top: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__buttons {
  display: flex;
}

.btn {
  margin-right: 5px;
}
</style>
