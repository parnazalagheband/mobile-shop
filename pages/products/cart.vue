<script setup>
const shopStore = useShopStore();

const headers = [
  { title: "نام محصول", key: "title" },
  { title: "تعداد", key: "quantity" },
  { title: "قیمت (تومان)", key: "price" },
  { title: "مجموع قیمت (تومان)", key: "total" },
  { title: "حذف", key: "actions", sortable: false },
];

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}.jpg`, import.meta.url).href;
};
const removeProduct = (id) => {
  shopStore.removeProduct(id);
  useToast().toastSuccess("محصول از سبدخرید حذف شد!");
};
const clearCart = () => {
  shopStore.clearCart();
  useToast().toastSuccess("سبد خرید شما حذف شد!");
};
</script>

<template>
  <v-container class="pa-10">
    <template v-if="shopStore.boughtProducts.length">
      <v-row class="d-flex align-center ga-4">
        <h1>سبد خرید</h1>
        <v-btn color="red" @click="clearCart">حذف سبد خرید</v-btn>
      </v-row>
      <v-table class="elevation-1 mt-10">
        <thead>
          <tr>
            <th v-for="item in headers" :key="item.key">
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in shopStore.boughtProducts" :key="item.id">
            <td class="d-flex align-center ga-2">
              <v-img
                class="flex-grow-0"
                :width="40"
                :height="30"
                :src="getImageUrl(item.image)"
              >
              </v-img>
              <span> {{ item.title }}</span>
            </td>
            <td>
              <v-btn
                size="2x-small"
                icon
                color="green"
                @click="shopStore.changeQuantity(item.id, 'increase')"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              {{ item.quantity }}
              <v-btn
                size="2x-small"
                icon
                color="red"
                :disabled="item.quantity === 1"
                @click="shopStore.changeQuantity(item.id, 'decrease')"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </td>
            <td>
              {{ item.price.toLocaleString("fa-IR") }}
            </td>

            <td>
              {{ item.total.toLocaleString("fa-IR") }}
            </td>
            <td>
              <v-btn
                size="small"
                icon
                color="red"
                @click="removeProduct(item.id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td class="text-end font-weight-bold">جمع کل:</td>
            <td class="font-weight-bold">
              {{ shopStore.cartTotal.toLocaleString("fa-IR") }} تومان
            </td>
          </tr>
        </tfoot>
      </v-table>
    </template>
    <view-empty-cart v-else />
  </v-container>
</template>
