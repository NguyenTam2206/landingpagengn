<template>
  <div class="wraper">
    <v-container v-if="$device.isDesktop">
      <div class="d-flex justify-space-between">
        <Logo style="width : 120px;" />
        <div class="d-flex align-center">
          <div v-for="(item,i) in navigation" :key="i">
            <a :href="item.linkTo" class="navi-item">{{item.text}}</a>
          </div>
          <LangOption />
        </div>
      </div>
    </v-container>
    <v-container v-if="!$device.isDesktop">
      <div class="d-flex justify-space-between align-center">
        <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <Logo style="width : 80px;" />
        <LangOption />
      </div>
    </v-container>
    <v-navigation-drawer v-model="drawer" fixed temporary bottom>
      <div class="d-flex align-center" style="height : 100%">
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="(item,i) in navigation" :key="i">
              <v-list-item-title>
                <a :href="item.linkTo" class="navi-item" style="color : black">{{item.text}}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import LangOption from "@/components/LangOption";

export default {
  components: {
    Logo,
    LangOption
  },
  data() {
    let home = this.$t("homepage").navigation.home;
    let brand = this.$t("homepage").navigation.brand;
    let product = this.$t("homepage").navigation.product;
    let partner = this.$t("homepage").navigation.partner;
    let event = this.$t("homepage").navigation.event;
    let recruitment = this.$t("homepage").navigation.recruitment;
    let contact = this.$t("homepage").navigation.contact;

    return {
      navigation: [
        {
          text: home,
          linkTo: "/"
        },
        {
          text: brand,
          linkTo: "/"
        },
        {
          text: product,
          linkTo: "/"
        },
        {
          text: partner,
          linkTo: "/"
        },
        {
          text: event,
          linkTo: "/"
        },
        {
          text: recruitment,
          linkTo: "/"
        },
        {
          text: contact,
          linkTo: "/"
        }
      ],
      drawer: false,
      group: null
    };
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.wraper {
  width: 100%;
}
.navi-item {
  margin-right: 20px;
  text-decoration: none;
  color: white;
}
.navi-item:hover {
  color: var(--primary);
}
</style>