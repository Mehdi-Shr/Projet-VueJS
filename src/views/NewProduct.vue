<template>
  <div class="page">
    <h1>Ajouter une nouvelle Bouteille</h1>
    <ProductForm :productData="productData" @submit="handleSubmit" v-if="!loader"/>
  </div>

</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import {createProduct} from "@/api/product";
import router from "@/router";

export default {
  name: "NewProduct",
  components: {ProductForm},
  data: () => ({
    productData: {},
    loader: false,
  }),
  methods: {
    async handleSubmit(productData) {
      this.loader = true
      const response = await createProduct(productData, this.$store.getters.token);
      if(response.status === 200){
        this.loader = true;
        await router.push(`/product/${response.body._id}`)
      } else {
        this.loader = false;
      }
    }
  },
  mounted() {
    if(!this.$store.getters.isConnected){
      router.push("/connexion")
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>