<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin"
export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>
<style scoped>
.dialog {
  display: flex;
  position: fixed;
  background: rgba(0,0,0, 0.5);
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
}

.dialog__content {
  padding: 20px;
  background: white;
  margin: auto;
  border-radius: 12px;
  min-height: 200px;
  min-width: 400px;
}
</style>
