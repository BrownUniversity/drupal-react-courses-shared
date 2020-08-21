module.exports = {
  rollup(config, options) {
    return Object.assign(config, {
      external: [
        "brown-university-styles",
        "react",
        "styled-components"
      ]
    });
  }
};

