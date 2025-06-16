<script setup>
const productStore = useProductStore();

definePageMeta({
  layout: "default",
});

const route = useRoute();
const router = useRouter();
const type = route.params.type;
const filteredResults = ref([]);

onMounted(() => {
  filteredResults.value = productStore.getProductByType(type);
});

const showFilterData = (searchValue) => {
  if (productStore.filteredProduct(searchValue, type).length) {
    filteredResults.value = productStore.filteredProduct(searchValue, type);
  }
};
</script>
<template>
  <v-container class="pa-4">
    <v-row>
      <v-col md="6" class="mx-auto pa-8 position-relative">
        <base-search @showFilterData="showFilterData" :type="type" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="product in filteredResults"
        :key="product.id"
        cols="12"
        sm="6"
        md="3"
      >
        <base-card
          @click="router.push(`/products/${type}/${product.title}`)"
          :title="product.title"
          :image="product.image"
          :price="product.price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
