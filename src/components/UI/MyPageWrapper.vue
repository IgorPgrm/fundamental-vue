<template>
  <div class="page__wrapper">
    <div
    class="page"
    :class="{'current-page': pageNumber === currentPage }"
    @click="changePage(pageNumber)"
    v-for="pageNumber in totalPages"
    :key="pageNumber">
      {{ pageNumber }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-page-wrapper',
  data(){
    return {
      currentPage: 1
    }
  },
  props: {
    totalPages: {
      type: Number,
      required: true
    },
  },
  methods: {
    changePage(pageNumber){
      this.currentPage = pageNumber
      this.$emit('update:modelValue', pageNumber);
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.page__wrapper{
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 5px;
}

.current-page{
  border: 3px solid teal;
  background-color: rgba(145, 165, 250, 0.76);
  color: white;
}
</style>
