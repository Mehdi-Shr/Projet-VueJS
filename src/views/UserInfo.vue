<template>

  <template v-if="user">
    <div class="infos">
      <div><p>Nom: </p><p>{{user.lastname}}</p></div>
      <div><p>Prénom: </p><p>{{user.firstname}}</p></div>
      <div><p>Adresse email: </p><p>{{user.email}}</p></div>
    </div>

    <div class="butttons">
      <router-link :to="`/user/password`" class="button-go-back">Changer de mot de passe</router-link>
      <router-link :to="`/user/update`" class="button-go-back">Changer les informations du compte</router-link>
    </div>
  </template>
  <div v-else class="loader"></div>
</template>

<script>
import {getUser} from "../api/user";
import router from "@/router";

export default {
  name: "UserInfo",
  data() {
    return {
      user: null,
    }
  },
  async mounted() {
    if(this.$store.getters.isConnected){
      const response = await getUser(this.$store.getters.token);
      if(response.status === 200){
        this.user = response.body
      }
    } else {
      await router.push("/connexion")
    }
  }
}
</script>

<style scoped>

</style>