import { awscdk, javascript } from 'projen';

const appName = '{{cookiecutter.app_name}}';

const project = new awscdk.AwsCdkTypeScriptApp({
  name: appName,
  authorName: '{{cookiecutter.project_team}}',

  repository: 'github.com/ewe/{{cookiecutter.project_slug}}',
  defaultReleaseBranch: 'main',

  cdkVersion: '{{cookiecutter.cdk_version}}',

  projenrcTs: true,

  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '10',

  deps: [
    '@aws-cdk/aws-lambda-go-alpha',
    'zod',
  ],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */

  appEntrypoint: `${appName}-app.ts`,

  //no-github-workflow
  github: false,

  //no-licensed
  licensed: false,
});

project.setScript('audit:check', 'pnpm audit:level-high && pnpm audit:level-critical');
project.setScript('audit:level-high', 'pnpm audit --audit-level high');
project.setScript('audit:level-critical', 'pnpm audit --dev --audit-level critical');

project.synth();
