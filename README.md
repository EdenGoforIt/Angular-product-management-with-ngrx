# Introduction

Base on experiences at companies providing Logistic services, I am trying to make neat, tidy, user friendly app following the mental mapping

# Developer Guide

## how to run a test file separately 
```ng test --include='**/dealer.service.spec.ts'```

or 

```ng test --main src/app/products/product-shell/product-shell.component.spec.ts```

# Order Management

![image](https://user-images.githubusercontent.com/79078528/168452727-965951be-e075-4b54-95c0-9564143ed08d.png)


x
Starter files with no NgRx added.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Snippets

Here are some [VSCode](https://code.visualstudio.com) snippets I'm using whilst recording this application, these help speed up boilerplate creation for things such as components, modules and services.

> Here's how to [install the snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets) in VSCode. Add them to `typescript.json` when prompted for which language the snippets are for.

```json
{
  "@Component": {
    "prefix": "@Component",
    "description": "Creates a component definition",
    "body": [
      "import { Component } from '@angular/core';",
      "",
      "@Component({",
      "\tselector: '${1:selector-name}',",
      "\tstyleUrls: ['${1:selector-name}.component.scss'],",
      "\ttemplate: `",
      "\t\t<div>",
      "\t\t\t",
      "\t\t</div>",
      "\t`",
      "})",
      "export class ${3:Name}Component {",
      "\tconstructor() {}",
      "}"
    ]
  },
  "@Injectable": {
    "prefix": "@Injectable",
    "description": "Creates an @Injectable service",
    "body": [
      "import { Injectable } from '@angular/core';",
      "",
      "@Injectable()",
      "export class ${1:Name}Service {",
      "\tconstructor() {}",
      "}"
    ]
  },
  "@NgModule": {
    "prefix": "@NgModule",
    "description": "Creates an @NgModule",
    "body": [
      "import { NgModule } from '@angular/core';",
      "",
      "@NgModule({",
      "\timports: [],",
      "\tdeclarations: [],",
      "\tproviders: []",
      "})",
      "export class ${1:Name}Module {}"
    ]
  },
  "@Pipe": {
    "prefix": "@Pipe",
    "description": "Creates an @Pipe",
    "body": [
      "import { Pipe, PipeTransform } from '@angular/core';",
      "",
      "@Pipe({",
      "\tname: '${1:selector-name}'",
      "})",
      "export class ${2:Name}Pipe implements PipeTransform {",
      "\ttransform(value: any) {",
      "\t\t$0",
      "\t}",
      "}"
    ]
  }
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
