<template>
  <main class="container_home">
    <h1>Notre comparateur d'eaux</h1>
      <div v-if="$store.getters.getProducts.product1">
        <h2>Produit 1</h2>
        <ProductInfo :details="$store.getters.getProducts.product1"/>
      </div>
      <div v-if="$store.getters.getProducts.product2">
        <h2>Produit 2</h2>
        <ProductInfo :details="$store.getters.getProducts.product2"/>
      </div>
      <p v-else>Veuillez sélectionner 2 produits à comparer</p>
  </main>
</template>

<script lang="ts">
import ListItem from "@/components/ListItem.vue";
import ProductInfo from "@/components/icons/ProductInfo.vue";

export default {
  components: {
    ProductInfo,
    ListItem,
  }
}

</script>

<style>
.container_home {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-products-comparator{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.button_comparator{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #02C39A;
  width: 300px;
  color: #fff;
  border:  0px;
  border-radius: 2%;
  margin: 50px auto auto;
}

.button_comparator:hover {
  background-color: #F0F3BD;
  color: black;
}
</style>