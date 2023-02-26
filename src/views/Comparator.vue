<template>
  <main class="container_home">
    <h1>Notre comparateur d'eaux</h1>
    <div class="container-products-comparator">
      <ListItem
          :in-comparator=true
      />
    </div>

    <a href="#" class="button_comparator">Comparer</a>
  </main>
</template>

<script lang="ts">
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
}

</script>

<style>
.container_home {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-products-comparator{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.button_comparator{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #02C39A;
  width: 300px;
  color: #fff;
  border:  0px;
  border-radius: 2%;
  margin: 50px auto auto;
}

.button_comparator:hover {
  background-color: #F0F3BD;
  color: black;
}
</style>