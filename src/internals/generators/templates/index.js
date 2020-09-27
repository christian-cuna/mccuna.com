const { templateExists } = require("./../utils")
const path = require("path")

const promptNames = Object.freeze({
  templateName: "templateName",
})

exports.templateGenerator = {
  description: "Add a template",
  prompts: [
    {
      type: "input",
      name: promptNames.templateName,
      message: "What should it be called?",
      default: "BlogPage",
      validate: value => {
        if (/.+/.test(value)) {
          return templateExists(value)
            ? "A template with the same name already exists"
            : true
        }

        return "The name is required"
      },
    },
  ],
  actions: data => {
    if (!data) {
      throw new Error("Data has not been defined")
    }

    const templatesDirPath = path.join(__dirname, "../../../templates")
    const templatePath = `${templatesDirPath}/${data.templateName}`

    const actions = [
      {
        type: "add",
        path: `${templatePath}/index.tsx`,
        templateFile: "./templates/index.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${templatePath}/index.test.tsx`,
        templateFile: "./templates/index.test.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${templatePath}/index.styles.tsx`,
        templateFile: "./templates/index.styles.tsx.hbs",
        abortOnFail: true,
      },
    ]

    return actions
  },
}
