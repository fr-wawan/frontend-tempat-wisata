const mixins = {
  methods: {
    getImage(image) {
      return `${import.meta.env.VITE_STORAGE_URL}/${image}`;
    },
    truncate(value, number) {
      let result =
        value.slice(0, number) + (value.length > number ? "..." : "");

      return result;
    },
  },
};

export default mixins;
