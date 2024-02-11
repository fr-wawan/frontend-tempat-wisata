const mixins = {
  methods: {
    getImage(image) {
      return `${import.meta.env.VITE_STORAGE_URL}/${image}`;
    },
  },
};

export default mixins;
