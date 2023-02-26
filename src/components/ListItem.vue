<template>
  <div class="itemList">
    <div v-if="loading" class="loader"></div>
    <ItemRow v-for="item in this.items"
             :id=item._id
             :marque=item.marque
             :description=item.description
             :image=item.image
             :logoMarque=item.logoMarque
             :prix=item.prix
             :source=item.source
             :type=item.type
             :typeBouchon=item.typeBouchon
             :volume=item.volume
             :qualite=item.qualite
             :in-comparator = inComparator
    />
  </div>
</template>

<script>
import ItemRow from "@/components/ItemRow.vue";

export default {
  components: {
    ItemRow
  },
  name: "ListItem",
  props: {
    inComparator : Boolean
  },
  data() {
    return {
      items : [],
      loading: true
    }
  },
  methods : {
    async getData() {
      const res = await fetch("http://localhost:3333/products");
      this.items = await res.json();
      this.loading = false;
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped >
.itemList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>