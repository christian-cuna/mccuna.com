const { componentGenerator } = require("./components")
const { templateGenerator } = require("./templates")

module.exports = function (plop) {
  plop.setGenerator("component", componentGenerator)
  plop.setGenerator("template", templateGenerator)
}
