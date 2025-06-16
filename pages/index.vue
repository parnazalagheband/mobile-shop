<script setup>
const router = useRouter();
const categoryStore = useCategoryStore();
definePageMeta({
  layout: "default",
});

const showAllCards = ref(false);
</script>
<template>
  <v-container>
    <h1>دسته بندی محصولات</h1>
    <v-row class="mt-6">
      <v-col
        v-for="category in showAllCards
          ? categoryStore.categories
          : categoryStore.categories.slice(0, 6)"
        :key="category.id"
        cols="12"
        sm="6"
        md="3"
      >
        <base-card
          @click="router.push(`/products/${category.type}`)"
          :title="category.title"
          :image="category.image"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="categoryStore.categories.length > 6"
      class="d-flex justify-end mt-5"
    >
      <v-btn
        @click="showAllCards = !showAllCards"
        size="small"
        color="indigo-lighten-3"
      >
        <span v-if="!showAllCards">نمایش همه فعالیت‌ها</span>
        <span v-else>نمایش کمتر</span>
      </v-btn>
    </v-row>
  </v-container>
</template>
