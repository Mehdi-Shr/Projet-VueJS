<template>
  <main class="container_home">
    <ComparatorList />
    <ComparatorButton />
  </main>
</template>

<script lang="ts">
import ComparatorList from "@/components/ComparatorList.vue";
import ComparatorButton from "@/components/ComparatorButton.vue";

export default {
  components: {
    ComparatorList,
    ComparatorButton,
  },
}

</script>

<style>
.container_home {
  padding: 50px;
}
</style>