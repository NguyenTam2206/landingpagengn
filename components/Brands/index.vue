<template>
  <div style="width : 100%">
    <div class="text-center mx-auto" style="max-width : 750px;">
      <div class="header-block">{{$t('homepage').brands.title}}</div>
      <div class="description-block">{{$t('homepage').brands.description}}</div>
    </div>
    <v-container class="mt-8">
      <div class="d-flex align-center justify-space-between hide-scroll">
        <div
          v-for="n in 5"
          :key="n"
          class="frame d-flex justify-center align-center"
          :style="n - 1=== activeLogo ? 'background : var(--primary); border-color : var(--primary)' : ''"
          @click="activeLogo = n - 1"
        >
          <img
            class="logo"
            :src="require(`@/assets/media/images/logo${n}${activeLogo === n - 1 ? 'active' : ''}.png`)"
            alt
          />
        </div>
      </div>
    </v-container>
    <div>
      <v-container>
        <v-carousel
          hide-delimiter-background
          hide-delimiters
          v-model="activeLogo"
          cycle
          :show-arrows="false"
          height="auto"
        >
          <v-carousel-item v-for="(item, i) in items" :key="i + 1">
            <v-row class="wraper-carousel">
              <v-col cols="12" md="6" class="pa-0">
                <div class="image-left">
                  <img :src="item.src" alt style="width : 100%" />
                </div>
              </v-col>
              <v-col class="pa-0" cols="12" md="6">
                <div class="content-right">
                  {{item.text}}
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat iste adipisci iure, ut et ex aut! Qui voluptate corrupti laboriosam, quod quia, nihil consectetur temporibus similique, natus ratione pariatur.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam autem architecto quo, exercitationem modi, facilis velit harum quos voluptatibus commodi laboriosam at aliquam necessitatibus iusto amet provident adipisci cumque magnam!
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <div class="d-flex justify-center align-center">
          <div v-for="(item,i) in items" :key="i">
            <img
              v-if="activeLogo !== i"
              :src="require('@/assets/media/images/dot.png')"
              class="my-4 mx-2"
              style="cursor : pointer"
              alt
              @click="activeLogo = i"
            />
            <img
              v-if="activeLogo === i"
              :src="require('@/assets/media/images/dotactive.png')"
              style="cursor : pointer"
              class="my-4 mx-2"
              @click="activeLogo = i"
              alt
            />
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLogo: 0,
      items: [
        {
          src: require("@/assets/media/images/brandimg1.png"),
          text: "text1"
        },
        {
          src: require("@/assets/media/images/brandimg2.png"),
          text: "text2"
        },
        {
          src: require("@/assets/media/images/brandimg3.png"),
          text: "text3"
        },
        {
          src: require("@/assets/media/images/brandimg4.png"),
          text: "text4"
        },
        {
          src: require("@/assets/media/images/brandimg5.png"),
          text: "text5"
        }
      ]
    };
  }
};
</script>
<style>
.v-carousel__controls__item {
  color: red !important;
}
</style>

<style scoped>
.frame {
  width: 200px;
  height: 120px;
  border: solid 2px #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.logo {
  width: 120px;
}
.wraper-carousel {
  border-radius: 10px;
  border: solid 2px #ccc;
  padding: 0;
  margin: 0;
}
.image-left {
  border-radius: 10px;
  width: 100%;
  line-height: 0px;
}
.content-right {
  border-radius: 10px;
  width: 100%;
}
@media (max-width: 959px) {
  .frame {
    margin-right: 20px;
    min-width: 150px;
    height: 80px;
  }
  .logo {
    width: 80px;
  }
}
</style>

