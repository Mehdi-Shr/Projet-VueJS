<template>
  <div class="product">
    <div class="image">
      <img :src="image" alt="Image non disponible">
    </div>
    <p>{{marque}}</p>
    <div class="buttons">
      <template v-if="!$props.toCompare">
        <button @click="$emit('showDetails',id)" >Détail</button>
        <button @click="$emit('compare',id)">Comparer</button>
      </template>
      <button v-else @click="$emit('remove',id)">Enlever</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["marque", "image", "id", "toCompare"],
  emits: ["showDetails", "compare", "remove"],
  data() {
    return {
      marque: this.$props["marque"],
      image: this.$props["image"],
      id: this.$props["id"],
    }
  }
}
</script>

<style scoped>
.product {
  width: 200px;
  height: 300px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  transition: 0.25s;
}

.product:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image img {
  height: 100%;
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

</style>