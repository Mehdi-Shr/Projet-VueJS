<template>
  <div class="page">
    <h1>Modifier le produit</h1>
    <ProductForm v-if="productData" :productData="productData" @submit="handleSubmit"/>
    <div v-else class="loader"></div>
  </div>

</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import router from "@/router";
import {getProduct, updateProduct} from "../api/product";

export default {
  name: "UpdateProduct",
  components: {ProductForm},
  data: () => ({
    productData: null
  }),
  methods: {
    async handleSubmit(productData) {
      const response = await updateProduct(this.$route.params.id,productData,this.$store.getters.token);
      if(response.status === 200){
        await router.push(`/product/${response.body._id}`)
      }
    }
  },
  async mounted (){
    if(this.$store.getters.isConnected){
      const response = await getProduct(this.$route.params.id);
      if(response.status === 200){
        this.productData = response.body;
      }
    } else {
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