<script setup>
const route = useRoute();

const titleMap = {
  products: "محصولات",
  accessories: "لوازم جانبی",
  consoles: "کنسول",
  laptops: "لپتاپ",
  phones: "تلفن همراه",
  cart: "سبدخرید",
};

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter(Boolean);

  let fullPath = "";
  return pathArray.map((part, index) => {
    fullPath += "/" + part;
    return {
      title: titleMap[part] || decodeURIComponent(part),
      to: part == "products" ? "/" : fullPath,
      disabled: index === pathArray.length - 1,
    };
  });
});
</script>

<template>
  <v-breadcrumbs :items="breadcrumbs" class="pa-4">
    <template #title="{ item }">
      {{ item.title }}
    </template>
    <template v-slot:divider>
      <v-icon color="primary" icon="mdi-chevron-left"></v-icon>
    </template>
  </v-breadcrumbs>
</template>
