<template>
<div>
  <img :src="img" :alt="title">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
</div>
</template>

<script>
export default {
  name: "ItemDetails",

  props : {
    title : String,
    description : String,
    img : String
  }
}
</script>

<style scoped>
</style>