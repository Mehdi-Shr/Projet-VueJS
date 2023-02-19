<template>
<div>
  <img :src=image :alt=marque>
  <h1>{{ marque }}</h1>
  <p>Description: {{ description }}</p>
  <p>Source: {{ source }}</p>
  <p>Type d'eau: {{ type }}</p>
  <p>Type de bouchon: {{ typeBouchon }}</p>
  <p>Volume: {{ volume }} Litres</p>
  <p>Prix: {{ prix }} euros</p>
</div>
</template>

<script>
export default {
  name: "ItemDetails",

  props : {
    image: String,
    logoMarque: String,
    marque: String,
    description : String,
    prix: Number,
    source: String,
    type: String,
    typeBouchon: String,
    volume: Number,
  }
}
</script>

<style scoped>
</style>