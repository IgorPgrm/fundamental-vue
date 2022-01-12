<template>
<div v-if="posts.length > 0">
  <h3>Список постов</h3>
  <post-item 
  v-for="post in posts" 
  :post="post"
  :key="post.id"
  @remove="$emit('remove', post)" />
</div>
<h2 class="nothing-read" v-else>Для чтения ничего не осталось ;) Но вы можете написать свой пост!</h2>
</template>

<script>
import PostItem from "@/components/PostItem"
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.nothing-read {
  color: rgb(102, 101, 101);
}

</style>
