module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'confirm',
        name: 'hasHooks',
        message: 'Does component use hooks?'
      }
    ],
    actions: data => {
      let actions = baseActions;
      if (data.hasHooks) {
        actions = [...baseActions, hooksAction];
      }

      return actions;
    }
  });
};

const hooksAction = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.hooks.js',
  templateFile: 'plop-templates/Component/Component.hooks.js.hbs'
};

const baseActions = [
  {
    type: 'add',
    // Plop will create directories for us if they do not exist
    // so it's okay to add files in nested locations.
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
    templateFile: 'plop-templates/Component/Component.js.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
    templateFile: 'plop-templates/Component/Component.test.js.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.style.js',
    templateFile: 'plop-templates/Component/Component.style.js.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/index.js',
    templateFile: 'plop-templates/Component/index.js.hbs'
  }
];
