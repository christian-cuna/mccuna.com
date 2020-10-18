const { readdirSync } = require('fs');
const { join } = require('path');

exports.componentExists = component => {
  const components = readdirSync(join(__dirname, '../../components'));
  return components.indexOf(component) >= 0;
};

exports.templateExists = template => {
  const templates = readdirSync(join(__dirname, '../../templates'));
  return templates.indexOf(template) >= 0;
};
