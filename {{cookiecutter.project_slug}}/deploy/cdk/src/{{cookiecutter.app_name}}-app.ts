import { App, Tags } from 'aws-cdk-lib';
import { {{cookiecutter.app_prefix}}Pipeline } from './pipeline/{{cookiecutter.app_name}}-pipeline';

const app = new App();

Tags.of(app).add('owner', '{{cookiecutter.project_team}}');

new {{cookiecutter.app_prefix}}Pipeline(app, '{{cookiecutter.app_prefix}}Pipeline', {
  env: {
    account: 'xxxxxxxxxxxx', //dev account
    region: 'eu-central-1',
  },
});

app.synth();
