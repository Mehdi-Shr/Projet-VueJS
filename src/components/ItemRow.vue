<template>
  <div class="item" :style="itemStyles">
    <img :src=image :alt=marque>
    <div class="details">
      <p>marque: {{ marque }}</p>
      <p>Volume: {{ volume }} Litres</p>
      <p>prix: {{ prix }} Euros</p>
      <!-- This is the modal with the default close button -->
      <div id="modal-close-default" uk-modal v-if="inComparator">
        <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <ItemDetails
              class="modalItemDetails"
              :marque=marque
              :description=description
              :image=image
              :logoMarque=logoMarque
              :prix=prix
              :source=source
              :type=type
              :typeBouchon=typeBouchon
              :volume=volume
          />
        </div>
      </div>

      <p uk-margin v-if="inComparator">
        <button class="uk-button uk-button-default uk-margin-right" type="button" uk-toggle="target: #modal-close-default">Details</button>
        <button class="uk-button uk-button-default" type="button" @click="select">Selectionner</button>
      </p>

    </div>

  </div>
</template>

<script>
import ItemDetails from "@/components/ItemDetails.vue";

export default {
  name: "ItemRow",
  components: {ItemDetails},
  props: {
    image: String,
    logoMarque: String,
    marque: String,
    description : String,
    prix: Number,
    source: String,
    type: String,
    typeBouchon: String,
    volume: Number,
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
      return this.selected ? "background-color: red" : ""
    },
  },
  methods: {
    toggle () {
      this.modal = !this.modal
    },
    select (){
      this.selected = !this.selected
      if (this.selected && this.compare < 2) {
        this.compare++
      } else if (!this.selected && this.compare > 1) {
        this.compare--
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