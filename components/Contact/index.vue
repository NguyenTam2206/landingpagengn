<template>
  <div class="wraper">
    <div class="text-center mx-auto pt-8" style="max-width : 750px;">
      <div class="header-block">{{$t('homepage').contact.title}}</div>
    </div>
    <v-container>
      <div class="text-center my-4">
        <div class="contact-text">Ông: Nguyễn Bảo Huy</div>
        <div class="contact-text">
          Email:
          <a href="mailto:admin@ngn.com.vn">admin@ngn.com.vn</a>
        </div>
        <div class="contact-text">
          SĐT:
          <a href="tel:0901312601">0901312601</a>
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <img src="@/assets/media/images/contactimg.png" alt style="width: 100%; height : 100%" />
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
.contact-text {
  font-size: 20px;
}
</style>