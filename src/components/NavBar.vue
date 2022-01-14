<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Публикации</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
      <my-button
      @click="$router.push('/about')"
      style="margin-left: 15px;">О приложении</my-button>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.navbar {
  display:flex;
  padding: 15px 15px;
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  align-items: center;
}

.navbar__btns {
  margin-left: auto;
}
</style>
