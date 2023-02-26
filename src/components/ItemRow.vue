<template>
  <div class="item" :style="itemStyles">
    <img :src=image :alt=marque>
    <div class="details">
      <p><span class="infos-product">marque :</span> {{ marque }}</p>
      <p><span class="infos-product">Volume :</span> {{ volume }} Litres</p>
      <p><span class="infos-product">prix :</span> {{ prix }} Euros</p>
      <p><span class="infos-product">Qualité :</span> {{ qualite }}</p>
      <p><span class="infos-product">Rapport qualité/prix :</span> {{ rapportQP }} %</p>

      <p uk-margin v-if="inComparator">
        <router-link class="uk-button uk-button-default uk-margin-right button"
                    :to="{ name: 'ProductDetails',params: {id: id}}">Details
        </router-link>

        <button class="uk-button uk-button-default button" type="button" @click="select">Selectionner</button>
      </p>

    </div>
  </div>
  <hr class="rounded">
</template>

<script>
import ProductDetails from "@/views/ProductDetails.vue"
import eventBus from '@/event-bus.js';

export default {
  name: "ItemRow",
  components: {ProductDetails},
  props: {
    id: Number,
    image: String,
    logoMarque: String,
    marque: String,
    description : String,
    prix: Number,
    source: String,
    type: String,
    typeBouchon: String,
    volume: Number,
    qualite: String,
    compare: Number,
    inComparator : Boolean
  },
  data() {
    return {
      modal: false,
      selected : false,
      compare: 0
    }
  },
  computed : {
    itemStyles(){
      return this.selected ? "background-color: #F0F3BD" : ""
    },
    rapportQP() {
      return this.qualite/this.prix
    }
  },
  methods: {
    toggle () {
      this.modal = !this.modal
    },
    select() {
      this.selected = !this.selected;
      if (this.selected) {
        this.compare++;
        if (this.compare <= 2) {
          eventBus.$emit('item-selected', {
            id: this.id,
            image: this.image,
            marque: this.marque,
            volume: this.volume,
            prix: this.prix
          });
        }
      } else {
        this.compare--;
        eventBus.$emit('item-deselected', this.id);
      }
    }
  },
}
</script>

<style scoped >
.item  {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  padding: 20px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
}
</style>