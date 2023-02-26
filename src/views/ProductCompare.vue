<template>
  <div class="product-compared">
    <div v-if="!selectedItems.length" class="no-product">
      <p>Aucun produit n'a été séléctionné</p>
      <router-link to="/comparator" class="button-go-back">Retour</router-link>
    </div>
    <div v-for="item in selectedItems" :key="item.id">
      <div class="product-item">
        <img :src=item.image :alt=item.marque>
        <h1>{{ item.marque }}</h1>
        <p><span class="infos-product">Description :</span> {{ item.description }}</p>
        <p><span class="infos-product">Source :</span> {{ item.source }}</p>
        <p><span class="infos-product">Type d'eau :</span> {{ item.type }}</p>
        <p><span class="infos-product">Type de bouchon :</span> {{ item.typeBouchon }}</p>
        <p><span class="infos-product">Volume :</span> {{ item.volume }} Litres</p>
        <p><span class="infos-product">Qualité :</span> {{ item.qualite }}</p>
        <p><span class="infos-product">Prix :</span> {{ item.prix }} euros</p>
        <p><span class="infos-product">Rapport qualité/prix :</span> {{ rapportQP }} %</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCompare",
  computed: {
    selectedItems() {
      return this.$store.state.product.selectedItems
    }
  }
}
</script>

<style scoped>
.product-compared {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  text-align: center;
}
.no-product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  margin-top: 100px;
}
</style>