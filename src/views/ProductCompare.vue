<template>
  <div>
    <h2>Selected items:</h2>
    <div v-for="item in selectedItems" :key="item.id">
      <p>Marque: {{ item.marque }}</p>
      <p>Volume: {{ item.volume }}</p>
      <p>Prix: {{ item.prix }}</p>
    </div>
  </div>
</template>

<script>
import eventBus from '@/event-bus.js';

export default {
  name: "ProductCompare",

  data() {
    return {
      selectedItems: []
    };
  },
  created() {
    eventBus.$on('item-selected', (item) => {
      this.selectedItems.push(item);
    });
    eventBus.$on('item-deselected', (id) => {
      const index = this.selectedItems.findIndex((item) => item.id === id);
      if (index >= 0) {
        this.selectedItems.splice(index, 1);
      }
    });
  }
}
</script>

<style scoped>
.product-compared {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
}
</style>