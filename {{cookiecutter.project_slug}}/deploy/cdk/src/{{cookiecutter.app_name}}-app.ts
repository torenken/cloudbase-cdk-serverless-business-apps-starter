import { App, Tags } from 'aws-cdk-lib';
import { {{cookiecutter.app_prefix}}Stack } from './{{cookiecutter.app_name}}-stack';

const app = new App();

Tags.of(app).add('owner', '{{cookiecutter.project_team}}');

new {{cookiecutter.app_prefix}}Stack(app, '{{cookiecutter.app_prefix}}Stack');

app.synth();
