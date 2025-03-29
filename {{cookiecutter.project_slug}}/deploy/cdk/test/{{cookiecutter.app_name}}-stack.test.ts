import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { {{cookiecutter.app_prefix}}Stack } from '../src/{{cookiecutter.app_name}}-stack';

test('{{cookiecutter.app_prefix}}StackSnapshot', () => {
  const app = new App({
    context: {
      'aws:cdk:bundling-stacks': ['NoStack'], //disable bundling lambda (asset), by using dummy stack-name (=> reduce the unit-test-time. jest-booster)
      '@aws-cdk/core:newStyleStackSynthesis': 'true',
    },
  });

  const stack = new {{cookiecutter.app_prefix}}Stack(app, '{{cookiecutter.app_prefix}}Stack');

  const template = Template.fromStack(stack);

  //snapshot
  expect(template.toJSON()).toMatchSnapshot();
});
