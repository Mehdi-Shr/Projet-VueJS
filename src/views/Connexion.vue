<template>
  <div class="page">
    <h1>Connectez-vous</h1>
    <FormKit type="form" v-model="userData" @submit="handleSubmit">
      <FormKit
          type="text"
          label="Adresse email"
          name="email"
          prefix-icon="email"
          placeholder="exemple@gmail.com"
          validation="required|email"
          :validation-messages="{
                required: 'Veillez renseigner une adresse email',
                email:'L\'adresse email n\'est pas valide'
              }"
      />
      <FormKit
          type="password"
          name="password"
          prefix-icon="password"
          label="Mot de passe"
          validation="required"
          :validation-messages="{
                required: 'Veillez renseigner un mot de passe',
              }"
      />
      <p id="message-error" v-if="error">{{ error }}</p>

    </FormKit>
  </div>
</template>

<script>

export default {
  name: "Connexion.vue",
  emits: ['connexion'],
  beforeCreate() {
    if(this.$store.getters.isConnected) this.$router.push("/")
  },
  data: () => {
    return {
      error: null,
      userData: {}
    }
  },
  methods: {
    redirectToRegisterPage() {
      this.$router.push('/inscription')
    },
    async handleSubmit () {
      const {message} = await this.$store.dispatch("connexion",this.userData)
      if(message !== "success") this.error = message
      else this.$router.push("/")
    }
  },
}
</script>

<style scoped>
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#message-error {
  background-color: #e78989;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid indianred;
  color: #fff;
  font-weight: bold;
}
</style>