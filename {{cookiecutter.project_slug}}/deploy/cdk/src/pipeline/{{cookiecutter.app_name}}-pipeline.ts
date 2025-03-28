import { Stack, StackProps } from 'aws-cdk-lib';
import { ShellStep } from 'aws-cdk-lib/pipelines';
import { AwsCredentials, GitHubWorkflow } from 'cdk-pipelines-github';
import { Construct } from 'constructs';
import { {{cookiecutter.app_prefix}}Stage } from '../{{cookiecutter.app_name}}-stage';

export class {{cookiecutter.app_prefix}}Pipeline extends Stack {

  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const pipeline = new GitHubWorkflow(this, 'Pipeline', {
      workflowPath: '../../.github/workflows/deploy.yml',
      publishAssetsAuthRegion: 'eu-central-1',
      preBuildSteps: [{
        uses: 'pnpm/action-setup@v4',
        with: {
          version: '10',
        },
      },
      {
        uses: 'actions/setup-go@v5',
        with: {
          'go-version': '1.24.1',
        },
      }],
      synth: new ShellStep('Build', {
        commands: [
          'cd deploy/cdk',
          'pnpm install --frozen-lockfile',
          'pnpm cdk synth',
          'mv cdk.out ../../cdk.out/',
        ],
      }),
      awsCreds: AwsCredentials.fromOpenIdConnect({
        gitHubActionRoleArn: 'arn:aws:iam::xxxxxxxxxxxx:role/GitHubActionRole', //arn from sales-bootstrap
      }),
    });

    // --- development
    const devStage = new {{cookiecutter.app_prefix}}Stage(this, 'Dev', {
      env: {
        account: 'xxxxxxxxxxxx', //dev account
        region: 'eu-central-1',
      },
    });

    pipeline.addStage(devStage);

    pipeline.buildPipeline();
  }
}
