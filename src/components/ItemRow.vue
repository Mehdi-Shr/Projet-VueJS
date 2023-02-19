<template>
  <div class="item" :style="itemStyles">
    <img :src=img :alt=title>
    <div class="details">
      <p>{{ title }}</p>
      <!-- This is the modal with the default close button -->
      <div id="modal-close-default" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <ItemDetails
              class="modalItemDetails"
              :title=title
              :description=description
              :img=img
          />
        </div>
      </div>

      <p uk-margin>
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
    img: String,
    title: String,
    description : String,
    compare: Number
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
      console.log(this.compare)
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