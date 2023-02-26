<template>
  <header>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#" aria-label="Back to Home"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /></a>


      <template v-if="!$store.getters.isConnected">
        <div class="uk-navbar-item">
          <RouterLink to="/connexion">Connexion</RouterLink>
        </div>

        <div class="uk-navbar-item">
          <RouterLink to="/inscription">Inscription</RouterLink>
         </div>
       </template>
       <button @click="deconnexion" v-else>
          Déconnexion
       </button>
        <div class="uk-navbar-item">
          <RouterLink to="/">Produits</RouterLink>
        </div>

        <div class="uk-navbar-item">
          <RouterLink to="/comparator">Comparateur</RouterLink>
        </div>
      
    

        <div class="uk-navbar-item">
          <form action="javascript:void(0)">
            <input class="uk-input uk-form-width-small" type="text" placeholder="Input" aria-label="Input">
            <button class="uk-button uk-button-default">Button</button>
          </form>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    deconnexion() {
      this.$store.dispatch("deconnexion")
    }
  }
}
</script>

<style scoped>

</style>