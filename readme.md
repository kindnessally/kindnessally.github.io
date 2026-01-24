# kindnessally.org

## What is it

This repo is a static Angular website that backs http://www.kindnessally.org, which is
the official website of Kindness Alliance.

Kindness Alliance is a 501(c)(3) non-profit public organization dedicated to improve
youth mental health by offering support services, community workshops, technologies
and educational programs that promote well-being and reduce stigma.

## Checkout and run

This section explains how to run the website locally on your computer.

### Prerequisites

Before start, these following tools are required to checkout code and run an Angular
application. Please follow the links to find out how to get and install them on your
operating system.

* [VSCode](https://code.visualstudio.com/) or other IDE with Python and TypeScript
  support.
* [NodeJS](https://nodejs.org/en/download)
* [Angular](https://angular.dev/installation)
* [Git](https://git-scm.com/downloads)

The installation can be verified with following commands

```
$ git --version
git version 2.43.0
$ node --version
v24.7.0
$ npm --version
11.5.1
$ ng --version
20.2.1
```

### Checkout code

Checkout the source code using `git` command.

```
$ git clone git@github.com:kindnessally/kindnessally.github.io.git
$ cd kindnessallyl.github.io
$ ls
angular.json      node_modules       public     tsconfig.app.json
...
```

### Build and run

The application can be built, tested and run with `ng` command.

```
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-NNOJGUDN.js    | main          | 329.20 kB |                82.51 kB
...
```
With `ng serve` command, the web application runs at port `4200`.

```
$ ng serve
main.js             | main          | 24.51 kB | 
...
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
```

## Make changes

As soon as a change is committed to `main` branch, it's pushed to the public website
immediately by [a Github workflow](https://github.com/kindnessally/kindnessally.github.io/blob/main/.github/workflows/deploy_to_page.yml).

Make sure to run the application locally and verify every change before merging it
to `main`.
