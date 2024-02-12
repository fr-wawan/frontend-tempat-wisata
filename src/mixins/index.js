const mixins = {
  methods: {
    getImage(image) {
      return `${import.meta.env.VITE_STORAGE_URL}/${image}`;
    },
    truncateDescription(value) {
      let result = value.slice(0, 300) + (value.length > 100 ? "..." : "");

      return result;
    },
  },
};

export default mixins;
