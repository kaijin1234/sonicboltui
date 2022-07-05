// // const path = require("path")
// // const pathToInlineSvg = path.resolve(__dirname, "../src/assets/icons/")
const Path = require("path")
// const pathToInlineSvg = Path.resolve(__dirname, '../resources/icons');
const AppSourceDir = Path.join(__dirname, "..", "src")
module.exports = ({ config }) => {
   const rules = config.module.rules

   // modify storybook's file-loader rule to avoid conflicts with svgr
   const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"))
   fileLoaderRule.exclude = AppSourceDir

   rules.push({
      test: /\.svg$/,
      include: AppSourceDir,
      use: [
         {
            loader: "@svgr/webpack",
            options: {
               icon: true,
            },
         },
      ],
   })

   return config
}

// const Path = require("path")

// const AppSourceDir = Path.join(__dirname, "..", "src")
// module.exports = ({ config }) => {
//    const svgRule = config.module.rules.find((rule) =>
//       "test.svg".match(rule.test)
//    )
//    svgRule.exclude = [AppSourceDir]

//    config.module.rules.push({
//       test: /\.svg$/i,
//       include: [AppSourceDir],
//       use: ["@svgr/webpack", "url-loader"],
//    })

//    return config
// }
