<template>
<div class="container_comparator">
  <ListItem />
  <ListItem />
</div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  name: "ComparatorList",
  components: {ListItem}
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