module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 5 versions", "ie >= 8", "Android >= 4.4"]
    }),
    require("cssnano")({
      preset: ["default"]
    })
  ],
  map: false
};
