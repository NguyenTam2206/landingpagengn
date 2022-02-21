<template>
  <div class="wraper">
    <div class="text-center mx-auto pt-8 header" style="max-width : 750px;">
      <div class="header-block">{{$t('homepage').partner.title}}</div>
      <div class="description-block">{{$t('homepage').partner.description}}</div>
    </div>
    <v-carousel hide-delimiters cycle height="100vh" hide-delimiter-background :show-arrows="false">
      <v-carousel-item>
        <div class="carousel-item-wrapped">
          <img
            :src="require(`@/assets/media/images/Partner.png`)"
            class="img"
            width="100"
            height="100"
            alt
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped>
.wraper {
  position: relative;
}
.header {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
.carousel-item-wrapped {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  object-fit: cover;
  object-position: 50% 0;
  width: 100vw;
  height: 100vh;
}
</style>