<template>
  <the-header title='Remember Me'></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheResources from '@/components/learning-resources/TheResources';
import TheHeader from '@/components/layouts/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader, TheResources
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Ronoto', sans-serif;
}

body {
  margin: 0;
}
</style>