export const useShopStore = defineStore("boughtProducts", {
  state: () => ({
    boughtProducts: [],
  }),
  getters: {
    cartTotal: (state) =>
      state.boughtProducts.reduce((sum, item) => sum + item.total, 0),
    totalQuantity: (state) =>
      state.boughtProducts.reduce((sum, item) => sum + item.quantity, 0),
  },

  actions: {
    addProduct(product) {
      const existingProduct = this.boughtProducts.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.total =
          existingProduct.price * existingProduct.quantity;
      } else {
        this.boughtProducts.push({
          ...product,
          quantity: 1,
          total: product.price,
        });
        console.log(this.boughtProducts);
      }
    },

    removeProduct(id) {
      this.boughtProducts = this.boughtProducts.filter(
        (item) => item.id !== id
      );
    },

    clearCart() {
      this.boughtProducts.length = 0;
    },

    changeQuantity(id, changetype) {
      const product = this.boughtProducts.find((item) => item.id === id);
      if (changetype === "increase") {
        product.quantity++;
      } else {
        product.quantity--;
      }
      product.total = product.price * product.quantity;
    },
  },
});
