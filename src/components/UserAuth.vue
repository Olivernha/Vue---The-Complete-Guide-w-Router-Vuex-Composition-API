<template>
  <button @click='login' v-if='!isAuth'>Log In</button>
  <button @click='logout' v-if='isAuth'>Logout</button>
</template>

<script>
export default {
  name: 'UserAuth',
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.usersIsAuthenticated;
    }
  }
};
</script>

<style scoped>

</style>