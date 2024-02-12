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

    getYoutube(value) {
      return `https://www.youtube.com/embed/${value}`;
    },

    getYoutubeThumbnail(value) {
      let queryStringPattern = /\?si=[^&]+/;

      let modifiedUrl = value.replace(queryStringPattern, "");

      return `https://i1.ytimg.com/vi/${modifiedUrl}/maxresdefault.jpg `;
    },
  },
};

export default mixins;
