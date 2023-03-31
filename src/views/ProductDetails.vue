<template>
<div class="product-details">
  <div v-if="loading" class="loader"></div>
  <div v-else>
    <ProductInfo :details="details"/>

    <div class="buttons">
      <a class="button-go-back" @click="deleteP" v-if="$store.getters.isConnected">Supprimer</a>
      <router-link :to="`/product/${details._id}/update`"  v-if="$store.getters.isConnected" class="button-go-back">Modifier</router-link>
      <router-link to="/" class="button-go-back">Retour</router-link>
    </div>

  </div>
</div>
</template>

<script>
import {getProduct, deleteProduct} from "@/api/product";
import router from "@/router";
import ProductInfo from "@/components/icons/ProductInfo.vue";

export default {
  name: "ProductDetails",
  components: {ProductInfo},
  data() {
    return {
      details : [],
      loading: true
    }
  },
  methods : {
    async deleteP() {
      this.loading = true;
      const response = await deleteProduct(this.details._id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjVjNmI5OGU0ODQ0MTYwMDAwMThkNSIsImlhdCI6MTY4MDE5NzMxM30.9CPedMQh0Yx23olwX38_zf5Npn_6H8diRR-prtPQSJg");
      if(response.status === 200){
       await router.push("/");
      } else {
        this.loading = false;
      }
    }
  },
  async mounted() {
    const response = await getProduct(this.$route.params.id);
    if(response.status === 200){
      this.details = response.body;
      this.loading = false;
    }
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

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
</style>