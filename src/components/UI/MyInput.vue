<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style>
.input {
  width: 100%;
  height: 30px;
  border: 1px solid teal;
  padding: 10px 15 px;
  margin-top: 15px;
}
</style>
