## {{cookiecutter.app_prefix}} 🌟

### Purpose
> What problem does the project solve and why does the project exist? Short description in a few sentences.

### Features ✨

## Project structure
The project contains of source code and files for a serverless application that can be deployed via AWS CDK.
See [**deploy/cdk/README.md**](deploy/cdk/README.md) for build of the AWS CDK project.

| Folder                                         | Description                                                     |
|------------------------------------------------|:----------------------------------------------------------------|
| {{cookiecutter.project_slug}}                  | Root folder for building, testing, etc.                         |
| {{cookiecutter.project_slug}}/**app/services** | Contains the handlers for the implemented serverless functions. |
| {{cookiecutter.project_slug}}/**deploy**       | Contains the AWS CDK stack and needed scripts for deployment.   |
| {{cookiecutter.project_slug}}/**doc**          | Contains the specification and documentation.                   |

### Getting Started 🏁

#### Prerequisites

- **Node.js LTS & pnpm**: Essential for managing and running JavaScript packages.
- **Golang 1.24**: Essential for managing and running Golang business logic.

#### Installing dependencies & building the target
The used build management tool is Make, all Make commands are executed in the root folder.

##### Installing build tools (initial)
Before build, some go tools must be installed.
```shell
$ make dev-gotooling
```

##### Building the target
Complete Build of Golang project via Makefile
```shell
$ make
```

### Test execution
#### Unit tests, vulnerabilities, fast linters runner
Execute the unit tests
```shell
$ make test-all
```