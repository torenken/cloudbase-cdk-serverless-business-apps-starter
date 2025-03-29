import { App, Tags } from 'aws-cdk-lib';
import { PipelineCfg, validatePipelineCfg, StageCfg, StageName } from './{{cookiecutter.app_name}}-cfg';
import { {{cookiecutter.app_prefix}}Pipeline } from './pipeline/{{cookiecutter.app_name}}-pipeline';

const app = new App();

Tags.of(app).add('owner', '{{cookiecutter.project_team}}');

const stageCfg = app.node.tryGetContext('stageConfig') as { [key in StageName]: StageCfg };
const pipelineCfg = app.node.tryGetContext('pipelineCfg') as PipelineCfg;

new {{cookiecutter.app_prefix}}Pipeline(app, '{{cookiecutter.app_prefix}}Pipeline', {
  pipelineCfg,
  stageCfg,
  env: {
    account: pipelineCfg.account,
    region: 'eu-central-1',
  },
});

app.synth();

app.node.addValidation(validatePipelineCfg(pipelineCfg));
