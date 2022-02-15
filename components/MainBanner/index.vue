<template>
  <div class="wraper">
    <Navigation class="navi" />

    <div class="banner-content">
      <v-container>
        <div :style="$device.isDesktop ? 'max-width : 45%' : 'max-width : 100%'">
          <div class="text-carousel">
            <span>{{$t('homepage').carousel[`text${model + 1}`]}}</span>
            <span class="font-weight-bold">{{$t('homepage').carousel[`text${model + 1}Bold`]}}</span>
          </div>
        </div>
        <v-btn
          @click="$router.push(banners[model].linkTo)"
          class="mt-8"
          color="primary"
        >{{$t('homepage').carousel[`button${model + 1}`]}}</v-btn>
        <div class="d-flex mt-8">
          <div
            v-for="(banner,i) in banners"
            :key="i"
            class="icon-delimiter"
            @click="model = i"
            :style="model === i ? 'background: var(--primary);' : 'background : #a7a7a77a'"
          ></div>
        </div>
      </v-container>
    </div>

    <v-carousel
      v-model="model"
      hide-delimiters
      cycle
      height="100vh"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <div class="carousel-item-wrapped">
          <img
            :src="require(`@/assets/media/images/homepage${i + 1}.png`)"
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

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      model: 0,
      banners: [
        {
          linkTo: "/1"
        },
        {
          linkTo: "/2"
        },
        {
          linkTo: "/3"
        }
      ]
    };
  }
};
</script>

<style scoped>
.wraper {
  position: relative;
}
.navi {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.banner-content {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  width: 100%;
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
.text-carousel {
  color: white;
  font-size: 45px;
}
.icon-delimiter {
  height: 5px;
  width: 30px;
  border-radius: 2px;
  margin-right: 5px;
}
.icon-delimiter:hover {
  cursor: pointer;
}
</style>