<template>
<div v-if="posts.length > 0">
  <h3>Список постов</h3>
  <transition-group name="post-list">
    <post-item 
    v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove="$emit('remove', post)" />
  </transition-group>
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

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-form,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.4s ease;
}

</style>
