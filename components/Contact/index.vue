<template>
  <div class="wraper">
    <div class="text-center mx-auto pt-8" style="max-width : 750px;">
      <div class="header-block">{{$t('homepage').contact.title}}</div>
      <div class="description-block">{{$t('homepage').contact.description}}</div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <img src="@/assets/media/images/contactimg.png" alt />
        </v-col>
        <v-col cols="12" md="6"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wraper {
  background-image: url("../../assets/media/images/Contact.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>