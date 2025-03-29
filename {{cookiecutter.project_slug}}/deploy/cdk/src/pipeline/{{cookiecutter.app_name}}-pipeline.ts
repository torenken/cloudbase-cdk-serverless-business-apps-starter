import { Stack, StackProps } from 'aws-cdk-lib';
import { ShellStep } from 'aws-cdk-lib/pipelines';
import { AwsCredentials, GitHubWorkflow } from 'cdk-pipelines-github';
import { Construct } from 'constructs';
import { PipelineCfg, Stage, StageCfg, StageName } from '../{{cookiecutter.app_name}}-cfg';
import { {{cookiecutter.app_prefix}}Stage } from '../{{cookiecutter.app_name}}-stage';

export interface {{cookiecutter.app_prefix}}PipelineProps extends StackProps {
  readonly pipelineCfg: PipelineCfg;
  readonly stageCfg: { [key in StageName]: StageCfg };
}

export class {{cookiecutter.app_prefix}}Pipeline extends Stack {

  constructor(scope: Construct, id: string, props: {{cookiecutter.app_prefix}}PipelineProps) {
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
        gitHubActionRoleArn: props.pipelineCfg.gitHubActionRoleArn,
      }),
    });

    // --- development
    const devStageCfg = props.stageCfg[Stage.Dev];
    const devStage = new {{cookiecutter.app_prefix}}Stage(this, 'Dev', {
      env: {
        account: devStageCfg.account,
        region: 'eu-central-1',
      },
    });

    pipeline.addStage(devStage);

    pipeline.buildPipeline();
  }
}
