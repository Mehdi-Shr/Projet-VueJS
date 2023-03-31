<template>
  <main>
    <div class="product-list">
      <h1>Nos eaux</h1>
      <SearchBar/>
      <div v-if="loading" class="loader"></div>
      <div v-else class="products">
        <ProductCard v-for="product in productsToDisplay"
                     :key="product._id"
                     :marque="product.marque"
                     :image="product.image"
                     :id="product._id"
                     :toCompare="false"
                     @showDetails="showDetails"
                     @compare="addToComparator"
        />
      </div>
      <p v-if="error">{{error}}</p>
    </div>
    <div class="comparator">
      <h2>Produits à comparer</h2>
      <div class="productToCompare">

        <ProductCard v-if="$store.getters.getProducts.product1"
                     :marque="$store.getters.getProducts.product1.marque"
                     :image="$store.getters.getProducts.product1.image"
                     :id="$store.getters.getProducts.product1._id"
                     :toCompare="true"
                     @remove="removeFromComparator"/>
        <div class="card" v-else></div>

        <ProductCard v-if="$store.getters.getProducts.product2"
                     :marque="$store.getters.getProducts.product2.marque"
                     :image="$store.getters.getProducts.product2.image"
                     :id="$store.getters.getProducts.product2._id"
                     :toCompare="true"
                     @remove="removeFromComparator"/>
        <div class="card" v-else>

        </div>
      </div>

      <div class="buttons">
        <button @click="compare">Comparer</button>
        <button @click="reset">Vider</button>
      </div>
    </div>
  </main>
</template>

<script>
import {getAll} from "@/api/product";
import ProductCard from "@/components/ProductCard.vue";
import router from "@/router";
import product from "@/store/productStore";
import SearchBar from "@/components/searchBar.vue";

export default {
  name: "NewProduct",
  components: {ProductCard, SearchBar},
  data: () => ({
    products: [],
    loading: true,
    error: null
  }),
  computed: {
    productsToDisplay() {
      return this.products.filter(product => product.marque.includes(this.$store.getters.search))
    }
  },
  methods: {
    showDetails(id) {
      router.push(`/product/${id}`)
    },
    addToComparator(id) {
      this.$store.commit("addProduct", this.products.find(product => product._id == id));
    },
    removeFromComparator(id) {
      this.$store.commit("removeProduct", this.products.find(product => product._id == id));
    },
    compare() {
      if (!this.$store.getters.getProducts.product1 || !this.$store.getters.getProducts.product2) {
        alert("Veuillez selectionner 2 produits à comparer")
      } else {
        router.push(`/comparator?p1=${this.$store.getters.getProducts.product1._id}&p2=${this.$store.getters.getProducts.product2._id}`)
      }
    },
    reset() {
      this.$store.commit("reset");
    }

  },
  async mounted() {
    const response = await getAll();
    if (response.status == 200) {
      this.products = response.body
    } else {
      this.error = response.body.message
    }
    this.loading = false;
  }
}
</script>

<style>
main {
  width: 100%;
}

.product-list {
  width: 60%;
  padding: 50px;
}

.products {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.comparator {
  width: 30%;
  height: calc(100vh - 80px);
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
  border-left: 4px solid #f8f8f8;
}

.loader {
  margin: 0 auto;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.buttons button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #00A896;
  width: 300px;
  color: #fff;
  border: 0px;
  border-radius: 2%;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #02C39A;
}

.card {
  background-color: #f8f8f8;
  width: 200px;
  height: 300px;
  border-radius: 5px;
}

.productToCompare {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
}
</style>