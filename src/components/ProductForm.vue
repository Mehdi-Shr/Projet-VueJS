<template>
  <FormKit type="form" v-model="productData" @submit="handleSubmit">
    <FormKit
        type="text"
        label="Marque de la bouteille"
        name="marque"
        placeholder="Cristaline"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner la marque de la bouteille',
              }"
    />

    <FormKit
        type="textarea"
        label="Description du produit"
        rows="10"
        name="description"
        placeholder="Dans 20 - 30 ans il n'y en aura plus"
    />

    <FormKit
        type="number"
        label="Volume en L de la bouteille"
        name="volume"
        validation="required"
        placeholder="0.5"
        :validation-messages="{
                required: 'Veillez renseigner le volume de la bouteille',
              }"
    />

    <FormKit
        type="select"
        label="Type d'eau"
        name="type"
        :options="[
            'Eau minérale',
            'Eau plate',
            'Eau pétillante / gazeuse',
            'Eau au sirop',
          ]"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner le type d\'eau',
              }"
    />

    <FormKit
        type="number"
        label="Prix de la bouteille en €"
        name="prix"
        validation="required"
        placeholder="0.25"
        :validation-messages="{
                required: 'Veillez renseigner le prix de la bouteille',
              }"
    />

    <FormKit
        type="number"
        label="qualite"
        name="qualite"
        validation="required"
        placeholder="3"
        :validation-messages="{
                required: 'Veillez renseigner la qualité de la bouteille',
              }"
    />

    <FormKit
        type="text"
        label="Nom de la source d'extraction"
        name="source"
        placeholder="Sainte Cécile"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner la source d\'extraction',
              }"
    />

    <FormKit
        type="select"
        label="Type du bouchon"
        name="typeBouchon"
        :options="[
            'Bouchon vissable',
            'Bouchon clipssable',
            'Bouchon à bec',
          ]"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner le type de bouchon utilisé',
              }"
    />

    <FormKit
        type="text"
        label="URL de l'image représenant le produit"
        name="image"
        placeholder="http://image.fr/..."
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner une url d\'image représentant la bouteille',
              }"
    />

    <FormKit
        type="text"
        label="URL de l'image représenant le logo de la marque du produit"
        name="logoMarque"
        placeholder="http://image.fr/..."
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner une url d\'image représentant la marque du produit',
              }"
    />
    <p id="message-error" v-if="error">{{ error }}</p>
  </FormKit>
</template>

<script>
export default {
  name: "ProductForm",
  props: ['productData'],
  emits: ['submit'],
  data(){
    return {
      productData: this.$props["productData"]
    }},
  methods: {
    async handleSubmit() {
      this.$emit("submit", this.productData)
    }
  }
}
</script>

<style scoped>
#message-error {
  background-color: #e78989;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid indianred;
  color: #fff;
  font-weight: bold;
}
</style>