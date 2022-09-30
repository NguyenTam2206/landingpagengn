<template>
  <div>
    <MainBanner />
    <InvestMent class="mt-8" id="event" />
    <Contact class="mt-8" id="contact" />
    <!-- <ProductPresent class="mt-8" /> -->
    <img
      id="partner"
      v-if="$device.isDesktop"
      class="mt-8"
      style="width:100%; height: 200px;"
      :src="require(`@/assets/media/ngn/certi.png`)"
      alt
    />
    <Partner v-if="$device.isDesktop" class="mt-8" />

    <!-- <Brands class="mt-8" /> -->
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner";
import Brands from "@/components/Brands";
import InvestMent from "@/components/InvestMent";
import ProductPresent from "@/components/ProductPresent";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";

export default {
  components: {
    MainBanner,
    Brands,
    InvestMent,
    ProductPresent,
    Partner,
    Contact
  }
};
</script>
