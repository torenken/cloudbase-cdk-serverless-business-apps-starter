## Cloudbase CDK Serverless Business Apps Starter 🌟

[![Cookiecutter Project CI](https://github.com/torenken/cloudbase-cdk-serverless-business-apps-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/torenken/cloudbase-cdk-serverless-business-apps-starter/actions/workflows/ci.yml)
[![Built with Cookiecutter](https://img.shields.io/badge/built%20with-Cookiecutter-ff69b4.svg?logo=cookiecutter)](https://github.com/torenken/cloudbase-cdk-serverless-business-apps-starter/)
![GitHub](https://img.shields.io/badge/license-MIT-blue)

Welcome to **Cloudbase CDK Serverless Business Apps Starter**! Your one-stop solution to... 🚀

### Features ✨

### Getting Started 🏁

#### Prerequisites

- **cookiecutter**: A cross-platform command-line utility that creates projects from cookiecutters (project templates).
- **NodeJS & pnpm**: Essential for managing and running JavaScript packages.

#### Installation Guide 🛠️

**cookiecutter**

Use [pipx](https://github.com/pypa/pipx) or your package management tool to install the latest version of [cookiecutter](https://github.com/cookiecutter/cookiecutter).

```shell
pip install pipx
```

**NodeJS & pnpm**

Use [nvm](https://github.com/nvm-sh/nvm) to install the latest LTS version of Node and enable [pnpm](https://pnpm.io/installation) via Corepack.

```shell
nvm install --lts
nvm use --lts
corepack enable pnpm
```

#### Generate Your Serverless Business Apps Project 🎉

The following command downloads the cookiecutter template and creates a new CDK Bootstrap project from it. The input
options are described below under [Project Generation Options](#project-generation-options).

```shell
cookiecutter git+ssh://git@github.com/torenken/cloudbase-cdk-serverless-business-apps-starter.git
```

*Console Output*

```console
[1/8] project_slug (customer-support-pin): 
[2/8] project_team (customer-support-team): 
[3/8] app_name (pin-service): 
[4/8] app_prefix (PinService): 
[5/8] service_account (01234560123456): 
[6/8] productive_account (01234560123456): 
[7/8] cdk_version (2.186.0): 
[8/8] go_module_name (github.com/torenken/pin-service): 
```

##### Using Custom Config File

In case you do not want to make your values in the Linux shell. Is it possible to create a Yaml configuration 
(`custom-config.yaml`) and then use the following command.

*custom-config.yaml*

```yaml
default_context:
  project_slug: "customer-support-pin"
  project_team: "customer-support-team"
  app_name: "pin-service"
  service_account: "01234560123456"
  productive_account: "01234560123456"
  cdk_version: "2.186.0" 
```

```shell
cookiecutter --config-file ./custom-config.yaml git+ssh://git@github.com/torenken/cloudbase-cdk-serverless-business-apps-starter.git
```

##### Generate CDK Bootstrap Structure

Use the following command from the new project directory to generate the new CDK Directory structure.

```shell
pnpx projen new awscdk-app-ts --no-post --no-git
```

#### Initial Build

```shell
pnpm install
pnpm build
```

#### Initial GitHub Push

```shell
git init
git add -A
git commit -m "inital setup"
git branch -M main
```

```shell
git remote add origin git@github.com:torenken/<project_slug>.git
```

```shell
git push -u origin main
```

### Project Generation Options

Every project is unique, and we provide a variety of options to ensure that your bootstrap project aligns with your specific needs. Here are the options you can customize during the generation process:

| Option               | Description                                                                                                                   | Example                             |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `project_slug`       | Your project's slug without spaces. Used to name your project directory and repository. Use the bind as separate.             | **customer-support-pin**            |
| `project_team`       | The project team you want to identify yourself in the project. The name goes into places like LICENSE, package.json and such. | **customer-support-team**           |
| `app_name`           | Your application name without spaces. Used to name your application project configuration. Use the bind as separate.          | **pin-service**                     |
| `app_prefix`         | Prefix generated from the application name for the CDK classes.                                                               | **PinService**                      |
| `service_account`    | Number of the Service/Development AWS Account.                                                                                | **01234560123456**                  |
| `productive_account` | Number of the Productive AWS Account.                                                                                         | **01234560123456**                  |
| `cdk_version`        | Version number of the latest CDK version. The latest version can be determined via https://github.com/aws/aws-cdk/releases.   | **2.186.0**                         |
| `go_module_name`     | Path of an of Go module identified. see https://go.dev/ref/mod                                                                | **github.com/torenken/pin-service** |
