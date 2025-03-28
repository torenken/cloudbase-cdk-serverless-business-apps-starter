import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class {{cookiecutter.app_prefix}}Stack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
  }
}
