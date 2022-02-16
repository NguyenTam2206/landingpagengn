<template>
  <div>
    <MainBanner />
    <Brands class="mt-8" />
    <InvestMent class="mt-8" />
    <ProductPresent class="mt-8" />
    <Partner class="mt-8" />
    <Contact class="mt-8" />
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
