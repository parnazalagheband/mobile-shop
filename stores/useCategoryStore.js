export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [
      {
        id: 1,
        title: "تلفن همراه",
        type: "phones",
        image: "phone-category",
      },
       {
        id: 2,
        title: "لپتاپ",
        type: "laptops",
        image: "laptop-category",
      },
      {
        id: 3,
        title: "کنسول",
        type: "consoles",
        image: "console-category",
      },
      {
        id: 4,
        title: "لوازم جانبی",
        type: "accessories",
        image: "accessories-category",
      },

    ],
  }),
});
