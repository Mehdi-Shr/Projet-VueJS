<template>
  <div class="itemList">
    <ItemRow v-for="item in this.items"
             :marque=item.marque
             :description=item.description
             :image=item.image
             :logoMarque=item.logoMarque
             :prix=item.prix
             :source=item.source
             :type=item.type
             :typeBouchon=item.typeBouchon
             :volume=item.volume
             :in-comparator = true
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
  data() {
    return {
      items : [],
    }
  },
  methods : {
    async getData() {
      const res = await fetch("http://localhost:3333/products");
      this.items = await res.json();
      console.log(this.items)
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
  margin-left:  50px;
}
</style>