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

```shell
cookiecutter git+ssh://git@github.com/torenken/cloudbase-cdk-serverless-business-apps-starter.git
```

*Console Output*

```console
[1/6] project_slug (customer-support-pin):  
```

##### Using Custom Config File

In case you do not want to make your values in the Linux shell. Is it possible to create a Yaml configuration 
(`custom-config.yaml`) and then use the following command.

*custom-config.yaml*

```yaml
default_context:
  project_slug: "customer-support-pin"
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