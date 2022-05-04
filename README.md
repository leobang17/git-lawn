# Git-Lawn

> Visualized react component of git contribution

<img width="549" alt="GitLawn" src="https://user-images.githubusercontent.com/77837101/166610890-d2ec8d45-3021-4092-8693-453718d442ba.png">

- Able to fetch 3 month of contributions maximum.
- This contribution is based on github "PUSH" events.
  - If you made 3 commit at `7 July` and 4 commits at `8 July` and pushed all commits at `8 July`.
  - Git-Lawn recognizes that there's no commit on `7 July` and 7 commits on `8 July`.
- I will be working on these two issues, so please keep your eyes on 👀.

<br>

## TL;DR

- Install by executing `npm install git-lawn` or `yarn add git-lawn`.
- Import by adding `import { GitLawn } from 'git-lawn'`.
- Use by adding `<GitLawn />`. Use `username` prop for fetch git contribution history

<br>

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.1.4
v17.2.0
```

<br>

If you have used CRA creating your application, you might have `react-scripts` depenency.
This component requires `react-scripts` **^4.0.3** or under because of webpack issues.
Please downgrade `react-script` if your current App is over **^5.0.0**.

<br>
<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

<br>

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install git-lawn
```

Or if you prefer using Yarn:

```sh
$ yarn add git-lawn
```

<br>

## Usage

Here's an example of basic usage:

```typescript
import React from "react";
import { GitLawn } from "git-lawn";

function MyApp() {
  const GITHUB_USERNAME = "username of Github whom you want to fetch";
  return (
    <div>
      <GitLawn username={GITHUB_USERNAME} />
    </div>
  );
}
```

<br>
<br>

## User Guide

**GitLawn**
Displays git contributions of specific user.

<br>

**Props**

| Prop name  | Description                                                                                   | Required   | Default Value | Type         |
| ---------- | --------------------------------------------------------------------------------------------- | ---------- | ------------- | ------------ |
| username   | Github username you want to fetch contributions                                               | _Required_ | `-`           | `string`     |
| grassSpan  | Pixel of each components of days. You can adjust the whole component size with this property. | _Optional_ | `30`          | `number`     |
| color      | Color theme of this component.                                                                | _Optional_ | `"GREEN"`     | `ColorType`  |
| month      | How much monthes you want to display. (For now, it is possible under 3 months)                | _Optional_ | `3`           | `MonthType`  |
| darkmode   | If you want to use dark theme.                                                                | _Optional_ | `false`       | `boolean`    |
| grassShape | Shapes of each contribution of days.                                                          | _Optional_ | `"Rectangle"` | `GrassShape` |

<br>

**Props Type Specification**

```typescript
type ColorType = "GREEN" | "BLUE";

type MonthType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GrassShape = "Rectangle" | "Circle";
```
