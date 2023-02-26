<template>
  <div>
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
