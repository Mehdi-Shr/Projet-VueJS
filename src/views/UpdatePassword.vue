<template>
  <h1>Changer de mot de passe</h1>
  <FormKit type="form" v-model="data" @submit="handleSubmit">

    <FormKit
        type="password"
        name="password"
        prefix-icon="password"
        label="Mot de passe actuel"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner un mot de passe',
              }"
    />
    <FormKit
        type="password"
        name="newPassword"
        prefix-icon="password"
        label="Nouveau mot de passe"
        validation="required"
        :validation-messages="{
                required: 'Veillez renseigner un mot de passe',
              }"
    />
    <FormKit
        type="password"
        name="newPassword_confirm"
        prefix-icon="password"
        label="Confirmation du mot de passe"
        validation="required|confirm"
        :validation-messages="{
                required: 'Veillez renseigner un mot de passe',
                confirm: 'Les mots de passes ne correspondent pas'
              }"
    />
    <p v-if="error" id="message-error">{{ error }}</p>
  </FormKit>
</template>

<script>
import router from "../router";
import {updatePassword} from "@/api/user";

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
        const response = await updatePassword(this.data, this.$store.getters.token)

        if(response.status === 200){
          alert("Votre mot de passe vient d'être modifié")
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
  mounted() {
    if(!this.$store.getters.isConnected) {
      router.push("/connexion")
    }
  }
}
</script>

<style scoped>

</style>