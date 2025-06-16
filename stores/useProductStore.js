import { defineStore } from "pinia";
export const useProductStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "iPhone 13",
        description:
          "گوشی اپل با صفحه نمایش Super Retina XDR و دوربین دوگانه 12 مگاپیکسلی.",
        price: 48900000,
        type: "phones",
        image: "iphone-13",
      },
      {
        id: 2,
        title: "Samsung Galaxy S23",
        description:
          "پرچم‌دار سامسونگ با پردازنده Snapdragon 8 Gen 2 و صفحه نمایش AMOLED.",
        price: 41500000,
        type: "phones",
        image: "samsung-galaxy-S23",
      },
      {
        id: 3,
        title: "Xiaomi 13 Pro",
        description:
          "گوشی پرقدرت شیائومی با دوربین لایکا و شارژ سریع 120 واتی.",
        price: 31900000,
        type: "phones",
        image: "xiaomi-13-pro",
      },
      {
        id: 4,
        title: "MacBook Air M2",
        description:
          "لپتاپ سبک اپل با پردازنده M2، طراحی بدون فن و نمایشگر Liquid Retina.",
        price: 58900000,
        type: "laptops",
        image: "macbook-air-M2",
      },
      {
        id: 5,
        title: "ASUS ROG Zephyrus G14",
        description:
          "لپتاپ گیمینگ سبک با پردازنده Ryzen 9 و کارت گرافیک RTX 4060.",
        price: 67900000,
        type: "laptops",
        image: "asus-rog-zephyrus-G14",
      },
      {
        id: 6,
        title: "PlayStation 5",
        description:
          "کنسول نسل نهم سونی با پشتیبانی از بازی‌های 4K و دسته DualSense.",
        price: 36800000,
        type: "consoles",
        image: "playstation-5",
      },
      {
        id: 7,
        title: "Xbox Series X",
        description:
          "قوی‌ترین کنسول مایکروسافت با حافظه SSD و اجرای بازی تا 120 فریم.",
        price: 35500000,
        type: "consoles",
        image: "xbox-series-x",
      },
      {
        id: 8,
        title: "هدفون بی‌سیم Galaxy Buds 2",
        description: "هدفون سبک با حذف نویز فعال و شارژدهی طولانی.",
        price: 4400000,
        type: "accessories",
        image: "galaxy-buds-2",
      },
      {
        id: 9,
        title: "کیبورد مکانیکی Razer BlackWidow",
        description: "کیبورد گیمینگ با سوییچ‌های مکانیکی و نور RGB.",
        price: 6700000,
        type: "accessories",
        image: "razer-keyboard",
      },
    ],
  }),
  getters: {
    getProductByType: (state) => (type) => {
      return state.products.filter((product) => product.type == type);
    },
    getProductDetail: (state) => (name) => {
      return state.products.find((product) => product.title == name);
    },

    filteredProduct: (state) => (input, type) => {
      return state.products.filter(
        (product) =>
          product.title.toLowerCase().startsWith(input.toLowerCase()) &&
          product.type === type
      );
    },
  },
});
