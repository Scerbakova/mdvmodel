const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    publicPath:
      process.env.NODE_ENV === "production" ? "/v-model_vue_practice/" : "/",
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/reset.scss";',
      },
    },
  },
  transpileDependencies: true,
});
