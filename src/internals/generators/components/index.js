const { componentExists } = require('./../utils');
const path = require('path');

const promptNames = Object.freeze({
  componentName: 'componentName',
});

exports.componentGenerator = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: promptNames.componentName,
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with the same name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    if (!data) {
      throw new Error('Data has not been defined');
    }

    const componentsDirPath = path.join(__dirname, '../../../components');
    const componentPath = `${componentsDirPath}/${data.componentName}`;

    const actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './components/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/index.test.tsx`,
        templateFile: './components/index.test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/index.styles.tsx`,
        templateFile: './components/index.styles.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
