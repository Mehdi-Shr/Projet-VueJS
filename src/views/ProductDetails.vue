<template>
<div class="product-details">
  <div v-if="loading" class="loader"></div>
  <div v-if="!loading">
    <img :src=details.image :alt=details.marque>
    <h1>{{ details.marque }}</h1>
    <p><span class="infos-product">Description :</span> {{ details.description }}</p>
    <p><span class="infos-product">Source :</span> {{ details.source }}</p>
    <p><span class="infos-product">Type d'eau :</span> {{ details.type }}</p>
    <p><span class="infos-product">Type de bouchon :</span> {{ details.typeBouchon }}</p>
    <p><span class="infos-product">Volume :</span> {{ details.volume }} Litres</p>
    <p><span class="infos-product">Qualité :</span> {{ details.qualite }}</p>
    <p><span class="infos-product">Prix :</span> {{ details.prix }} euros</p>
    <p><span class="infos-product">Rapport qualité/prix :</span> {{ rapportQP }} %</p>

    <router-link to="/comparator" class="button-go-back">Retour</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductDetails",

  data() {
    return {
      details : [],
      loading: true
    }
  },
  computed : {
    rapportQP() {
      return this.details.prix/this.details.prix
    }
  },
  methods : {
    async getData() {
      const res = await fetch("http://localhost:3333/products/" + this.$route.params.id);
      this.details = await res.json();
      this.loading = false;
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.product-details{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>