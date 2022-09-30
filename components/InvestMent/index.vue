<template>
  <div>
    <div class="text-center mx-auto pt-8" style="max-width : 750px;">
      <div class="header-block">Chương trình khuyến mãi</div>
      <div
        class="description-block"
      >Nhằm mục đích hỗ trợ, khuyến khích các doanh nghiệp, tổ chức sử dụng sản phẩm dịch vụ số trong lĩnh vực an toàn thông tin mạng trong quá trình chuyển đổi số với chi phí hợp lý, Công ty NGN đề xuất chương trình khuyến mãi như sau:</div>
    </div>
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" md="6" style="cursor: pointer" @click="handleEventClick">
          <img :src="require(`@/assets/media/ngn/anninh2.png`)" alt style="width : 100%" />
          <div class="text-event">1. Dịch vụ kiểm tra đánh giá ATTT mạng</div>
          <div>Giảm giá 15% trong năm 2022 với các tổ chức đăng ký sử dụng dịch vụ trong 30 ngày kể từ ngày 01/10/2022.</div>
        </v-col>
        <v-col cols="12" md="6" style="cursor: pointer" @click="handleEventClick">
          <img :src="require(`@/assets/media/ngn/anning.png`)" alt style="width : 100%" />
          <div
            class="text-event"
          >2. Dịch vụ diễn tập ATTT (Thực chiến, thao trường ứng cứu xử lý sự cố cho hệ thống CNTT)</div>
          <div>Giảm giá 15% trong năm 2022 với các tổ chức đăng ký sử dụng dịch vụ trong 30 ngày kể từ ngày 01/10/2022.</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleEventClick() {
      window.open("https://ngn.vn");
    }
  }
};
</script>

<style scoped>
.text-event {
  margin-top: 10px;
}
</style>