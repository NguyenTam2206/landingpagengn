<template>
  <div>
    <div class="text-center mx-auto pt-8" style="max-width : 750px;">
      <div class="header-block">{{$t('homepage').productPresent.title}}</div>
      <div class="description-block">{{$t('homepage').productPresent.description}}</div>
    </div>

    <v-carousel
      class="mt-8"
      v-model="model"
      cycle
      hide-delimiter-background
      height="auto"
      :show-arrows="false"
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" order="2" order-md="1">
              <div class="main-title">{{$t('homepage').productPresent[banner.name].title}}</div>
              <div class="mb-8">
                <ul>
                  <li
                    class="detail"
                    v-for="(item,i) in $t('homepage').productPresent[banner.name].detail"
                    :key="i"
                  >
                    <span>
                      <img :src="require('@/assets/media/images/checkicon.png')" alt />
                    </span>
                    {{item}}
                  </li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="6" order="1" order-md="2">
              <div class="text-center">
                <img
                  style="max-height : 550px; object-fit : contain; width : 100%"
                  :src="require(`@/assets/media/images/product${model}.png`)"
                  alt
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      banners: [
        {
          name: "product0",
          linkTo: "/1"
        },
        {
          name: "product1",
          linkTo: "/2"
        },
        {
          name: "product2",
          linkTo: "/3"
        },
        {
          name: "product3",
          linkTo: "/4"
        },
        {
          name: "product4",
          linkTo: "/5"
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-title {
  color: var(--primary);
  font-size: 30px;
}
.detail {
  font-size: 20px;
  color: grey;
  padding-left: 0;
  line-height: 70px;
}
ul {
  list-style: none;
  padding: 0;
}
@media (max-width: 959px) {
  .detail {
    font-size: 15px;
    line-height: 50px;
  }
}
</style>