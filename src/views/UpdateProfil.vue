<template>
  <h1>Mettre à jour le profil</h1>
  <FormKit type="form" v-model="data" @submit="handleSubmit" v-if="data">
    <FormKit
        type="text"
        name="firstname"
        label="Prénom"
        placeholder="Votre prénom"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner votre prénom',
            }"
    />

    <FormKit
        type="text"
        name="lastname"
        label="Nom"
        placeholder="Votre nom"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner votre nom',
            }"
    />
    <p v-if="error" id="message-error">{{ error }}</p>
  </FormKit>
  <div v-else class="loader"></div>
</template>

<script>
import router from "../router";
import {getUser, updateUser} from "@/api/user";

export default {
  name: "UpdatePassword",
  data() {
    return {
      data: null,
      error: null
    }
  },
  methods: {
    async handleSubmit() {
      if(this.$store.getters.isConnected){
        const response = await updateUser(this.data, this.$store.getters.token)
        if(response.status === 200){
          alert("Votre profil a été mis à jour")
          await router.push("/user")
        }
        else {
          this.error = response.body.message
        }
      } else {
        await router.push("/connexion")
      }
    }
  },
  async mounted() {
    if(!this.$store.getters.isConnected) {
      router.push("/connexion")
    } else {
      const response = await getUser(this.$store.getters.token);
      if(response.status === 200){
        this.data = response.body
      }
    }
  }
}
</script>

<style scoped>

</style>