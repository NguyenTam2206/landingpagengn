<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  created() {
    if (process.client) {
      let lang = localStorage.getItem("lang");
      if (!lang) {
        localStorage.setItem("lang", "vi");
      }
      this.$store.dispatch("setLang", lang);
    }
  }
};
</script>
