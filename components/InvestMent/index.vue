<template>
  <div class="wraper">
    <div class="text-center mx-auto pt-8" style="max-width : 750px;">
      <div class="header-block">{{$t('homepage').investment.title}}</div>
      <div class="description-block">{{$t('homepage').investment.description}}</div>
    </div>
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" md="6">
          <img :src="require('@/assets/media/images/rightinvest.png')" style="width : 100%" alt />
        </v-col>
        <v-col cols="12" md="6">
          <img :src="require('@/assets/media/images/leftinvest.png')" style="width : 100%" alt />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.wraper {
  background-image: url("../../assets/media/images/investmentbackground.png");
}
</style>