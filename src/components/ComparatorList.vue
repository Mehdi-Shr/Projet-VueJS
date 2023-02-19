<template>
<div class="container_comparator">
  <ProductListing />
  <ProductListing />
</div>
</template>

<script>
import ProductListing from "@/components/ProductListing.vue";

export default {
  name: "ComparatorList",
  components: {ProductListing}
}
</script>

<style scoped>
.container_comparator {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>