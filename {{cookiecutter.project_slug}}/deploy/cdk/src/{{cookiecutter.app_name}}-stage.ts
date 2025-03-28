import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { {{cookiecutter.app_prefix}}Stack } from './{{cookiecutter.app_name}}-stack';

export interface {{cookiecutter.app_prefix}}StageProps extends StageProps {}

export class {{cookiecutter.app_prefix}}Stage extends Stage {

  constructor(scope: Construct, id: string, props: {{cookiecutter.app_prefix}}StageProps) {
    super(scope, id, props);

    new {{cookiecutter.app_prefix}}Stack(this, '{{cookiecutter.app_prefix}}');
  }
}
