<template>
  <main class="products">
    <h1>Nos eaux</h1>
    <ListItem
        :in-comparator=false
    />
  </main>
</template>

<style>
.products {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

</style>
<script setup lang="ts">
import ListItem from "@/components/ListItem.vue";
</script>