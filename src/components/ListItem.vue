<template>
  <div class="itemList">
    <ItemRow v-for="item in items"
             :img = item.img
             :title = item.title
             :description = item.description
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
      items : [
        {
          img : 'src/assets/img/bottle.jpg',
          title : "Cristaline",
          description : "Cristaline c'est mon eau",
        },
        {
          img : 'src/assets/img/bottle.jpg',
          title : "Cristaline",
          description : "Cristaline c'est mon eau",
        },
        {
          img : 'src/assets/img/bottle.jpg',
          title : "Cristaline",
          description : "Cristaline c'est mon eau",
        },        {
          img : 'src/assets/img/bottle.jpg',
          title : "Cristaline",
          description : "Cristaline c'est mon eau",
        },
      ]
    }
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