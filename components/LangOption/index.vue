<template>
  <div>
    <client-only>
      <div class="d-flex justify-center align-center" v-if="readyToRender" @click="changeLang">
        <div
          style="font-size : 12px;"
          class="mr-2 white--text font-weight-bold"
        >{{langList[lang].text}}</div>
        <v-img :src="langList[lang].img" width="16"></v-img>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readyToRender: false,
      lang: "vi",
      langList: {
        vi: {
          text: "VI",
          img: require("@/assets/media/images/vi.png")
        },
        en: {
          text: "EN",
          img: require("@/assets/media/images/en.svg")
        }
      }
    };
  },
  created() {
    if (process.client) {
      this.lang = localStorage.getItem("lang") || "vi";
      this.$vuetify.lang.current = this.lang;
      this.$store.dispatch("setLang", this.lang);
      this.readyToRender = true;
    }
  },
  methods: {
    changeLang() {
      this.lang = this.lang === "vi" ? "en" : "vi";
      this.$i18n.setLocale(this.lang);
      this.$vuetify.lang.current = this.lang;
      localStorage.setItem("lang", this.lang);
      this.$router.go(0);
    }
  }
};
</script>