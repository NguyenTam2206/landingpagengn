<template>
  <v-app light>
   <v-container>
     <nuxt />
   </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  created() {
    console.log(this.$i18n)
    this.$i18n.setLocale('vi');
      this.$vuetify.lang.current = 'vi';
  }
}
</script>
