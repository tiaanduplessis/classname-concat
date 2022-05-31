# classname-concat

[![package version](https://img.shields.io/npm/v/classname-concat.svg?style=flat-square)](https://npmjs.org/package/classname-concat)
[![package downloads](https://img.shields.io/npm/dm/classname-concat.svg?style=flat-square)](https://npmjs.org/package/classname-concat)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/classname-concat.svg?style=flat-square)](https://npmjs.org/package/classname-concat)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Class name concatenation

## Table of Contents

- [classname-concat](#classname-concat)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
  - [Contributing](#contributing)
  - [License](#license)

## Install

Install the package locally within you project folder with your package manager:

With `npm`:

```sh
npm install classname-concat
```

With `yarn`:

```sh
yarn add classname-concat
```

With `pnpm`:

```sh
pnpm add classname-concat
```

## Usage

```js
import cc from "classname-concat";

console.log(cc("foo", "bar")); // foo bar
console.log(cc("foo", { bar: false })); // foo
console.log(cc("foo", { bar: false }, { baz: true })); // foo baz
console.log(cc("foo", { bar: false, nested: { ping: true } })); // foo ping
console.log(cc("foo", { bar: () => true, baz: { ping: true } })); // foo bar ping
console.log(cc(["foo", () => "hello"])); // foo hello
console.log(cc(null, "hello", undefined, "friend")); // hello friend
```

## API

For all configuration options, please see the [API docs](https://paka.dev/npm/classname-concat).

## Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please [open up an issue](https://github.com/tiaanduplessis/classname-concat/issues) or [make a pull request](https://makeapullrequest.com/).

## License

[MIT © Tiaan du Plessis](./LICENSE)
