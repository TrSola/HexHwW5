export default {
  // 對應html的id line:212
  template: `#userProductModal`,
  props: ["product"],
  data() {
    return {
      modalInModalComponent: "",
      qty: 1,
    };
  },
  methods: {},
  mounted() {
    this.modalInModalComponent = new bootstrap.Modal(
      this.$refs.productModalRef,
      {
        backdrop: "static",
      }
    );
  },
};
