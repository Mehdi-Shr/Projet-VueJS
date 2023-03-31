<template>
  <FormKit v-model="data"
      type="text"
      label="Rechercher par marque"
      placeholder="Cristaline"
  />
</template>

<script>
export default {
  name: "searchBar",
  emits: ["search"],
  data() {
    return {
      data: this.$store.getters.search
    }
  },
  watch: {
    data() {
      this.$store.commit("search", this.data)
    }
  }
}
</script>

<style scoped>

</style>