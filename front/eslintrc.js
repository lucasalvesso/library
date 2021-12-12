module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  plugins: ["vue"],
  extends: [
    // add more generic rulesets here, such as:
    // 'plugin:vue/base',
    "plugin:vue/essential", // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // 'vue/no-unused-vars': 'error'
  },
};
