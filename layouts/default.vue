<script setup>
const router = useRouter();
const shopStore = useShopStore();
const { show, message, color } = useToast();

const items = [
  {
    title: "تلفن همراه",
    value: "phones",
    icon: "mdi-cellphone",
  },
  {
    title: "لپتاپ",
    value: "laptops",
    icon: "mdi-laptop",
  },
  {
    title: "کنسول",
    value: "consoles",
    icon: "mdi-controller",
  },
  {
    title: "لوازم جانبی",
    value: "accessories",
    icon: "mdi-cable-data",
  },
];

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const navigateTo = (path) => {
  router.push(`/products/${path}`);
  drawer.value = false;
};
</script>

<template>
  <v-layout>
    <v-app-bar color="indigo-lighten-1">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>فروشگاه موبایل</v-toolbar-title>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
        <v-btn to="/products/cart" icon variant="text">
          <v-badge color="success" :content="shopStore.totalQuantity">
            <v-icon>mdi-shopping-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          class="d-flex"
          :key="item"
          @click="navigateTo(item.value)"
        >
          <v-row>
            <v-col>
              <v-icon color="deep-purple-lighten-4">
                {{ item.icon }}
              </v-icon>
            </v-col>
            <v-col>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-snackbar
        v-model="show"
        :color="color"
        timeout="1000"
        location="top left"
      >
        {{ message }}
      </v-snackbar>
      <base-navigation-bar/>
      <slot />
    </v-main>
  </v-layout>
</template>
