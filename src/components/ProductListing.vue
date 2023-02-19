<template>
  <div class="container">
    <ListItem />
  </div>
</template>

<script setup lang="ts">
import ListItem from "@/components/ListItem.vue";
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #d5e3ec;
}
h1{
  margin: auto auto 50px;
}
</style>