<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  description: {
    type: String,
    default: "",
  },
});

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}.jpg`, import.meta.url).href;
};
</script>
<template>
  <v-container>
    <v-card>
      <v-img :width="400" :height="300" :src="getImageUrl(props.image)"> </v-img>
      <v-card-title class="font-weight-bold">
        {{ props.title }}
      </v-card-title>
      <v-card-text v-if="props.price" class="text-h7"> {{ props.price.toLocaleString("fa-IR") }} تومان </v-card-text>
    </v-card>
  </v-container>
</template>
