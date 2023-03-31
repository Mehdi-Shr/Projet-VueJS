<template>
  <div class="product">
      <img :src=details.image>
    <div>
      <h1>{{ details.marque }}</h1>
      <p><span class="infos-product">Description :</span> {{ details.description }}</p>
      <p><span class="infos-product">Source :</span> {{ details.source }}</p>
      <p><span class="infos-product">Type d'eau :</span> {{ details.type }}</p>
      <p><span class="infos-product">Type de bouchon :</span> {{ details.typeBouchon }}</p>
      <p><span class="infos-product">Volume :</span> {{ details.volume }} Litres</p>
      <p><span class="infos-product">Qualité :</span> {{ details.qualite }}</p>
      <p><span class="infos-product">Prix :</span> {{ details.prix }} euros</p>
      <p><span class="infos-product">Rapport qualité/prix :</span> {{ rapportQP }} %</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductInfo",
  props: ["details"],
  computed : {
    rapportQP() {
      return this.details.qualite/this.details.prix
    }
  },
  data() {
    return {
      details: this.$props["details"]
    }
  }
}
</script>

<style scoped>
.product {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
}

.product img {
  width: 300px;
}

.product > div {
  flex: 1;
}


</style>