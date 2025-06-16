<script setup>
const productStore = useProductStore();
const shopStore = useShopStore();
const route = useRoute();
const productName = route.params.productDetail;

const productDetail = computed(() =>
  productStore.getProductDetail(productName)
);
const getImageUrl = (name) => {
  return new URL(`../../../assets/images/${name}.jpg`, import.meta.url).href;
};

const addToCart = () => {
  if (productDetail.value) {
    shopStore.addProduct(productDetail.value);
    useToast().toastSuccess("محصول با موفقیت به سبد خرید اضافه شد!");
  }
};

</script>

<template>
  <v-container class="pa-16">
    <v-row class="d-flex ga-8">
      <v-col cols="4" class="border rounded">
        <v-img
          :width="700"
          :height="450"
          :src="getImageUrl(productDetail.image)"
        >
        </v-img>
      </v-col>
      <v-col
        cols="7"
        class="d-flex flex-column justify-space-between border rounded pa-8"
      >
        <div class="d-flex flex-column ga-5">
          <h1>{{ productDetail?.title }}</h1>
          <p class="text-h7 font-weight-bold">
            {{ productDetail?.description }}
          </p>
          <p class="text-h6 font-weight-bold text-blue">
            {{ productDetail?.price.toLocaleString("fa-IR") }} تومان
          </p>
        </div>

        <v-btn
          @click="addToCart"
          to="/products/cart"
          size="large"
          color="green"
          class="align-self-end"
          >افزودن به سبد خرید</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
