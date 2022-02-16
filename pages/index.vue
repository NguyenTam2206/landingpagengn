<template>
  <div>
    <MainBanner />
    <Brands class="mt-8" />
    <InvestMent class="mt-8" />
    <ProductPresent class="mt-8" />
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner";
import Brands from "@/components/Brands";
import InvestMent from "@/components/InvestMent";
import ProductPresent from "@/components/ProductPresent";

export default {
  components: {
    MainBanner,
    Brands
  }
};
</script>
