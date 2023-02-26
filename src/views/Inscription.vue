<template>
  <div class="page">
    <h1>Inscrivez vous</h1>
    <FormKit type="form" v-model="userData" @submit="handleSubmit">
      <div class="row">
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
      </div>
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
      <FormKit
          type="password"
          name="password_confirm"
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

  </div>
</template>

<script>
export default {
  name: "Inscription",
  data: () => ({
    userData: {},
    error: null
  }),
  methods: {
    async handleSubmit() {
      const res = await fetch("http://localhost:3333/users/register", {
        method: "POST",
        body: JSON.stringify(this.userData),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const json = await res.json()
      console.log(json)

      if (res.status === 201) {
        alert("Le compte a été créé")
        this.$router.push("/connexion")
      } else {
        this.error = json.error
      }
    }
  }
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

.row {
  display: flex;
  flex-direction: row;
  gap: 20px;
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