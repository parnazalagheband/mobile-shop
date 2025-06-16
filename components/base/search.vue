<script setup>
const productStore = useProductStore();
const emit = defineEmits(["showFilterData"]);

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const search = ref("");
const menu = ref(false);

const selectItem = (searchedValue) => {
  emit("showFilterData", searchedValue);
  search.value = searchedValue;
  menu.value = false;
};

const filterData = computed(() =>
  productStore.filteredProduct(search.value, props.type)
);
</script>

<template>
  <v-row>
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :open-on-click="false"
      offset-y
      transition="slide-y-transition"
    >
      <template #activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="search"
          append-inner-icon="mdi-magnify"
          density="default"
          label="جست و جو کنید..."
          variant="solo"
          hide-details
          single-line
          aria-autocomplete="false"
          @input="menu = true"
          @focus="menu = true"
          @click:append-inner="selectItem(search)"
          @keyup.enter="selectItem(search)"
        ></v-text-field>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in filterData"
          :key="index"
          @click="selectItem(item.title)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="filterData.length === 0">
          <v-list-item-title>موردی یافت نشد!</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>
