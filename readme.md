# @catdad/to-ico

[![Build Status][travis.svg]][travis.link] [![NPM Downloads][npm-downloads.svg]][npm.link] [![NPM Version][npm-version.svg]][npm.link]

[travis.svg]: https://travis-ci.com/catdad-experiments/to-ico.svg?branch=master
[travis.link]: https://travis-ci.com/catdad-experiments/to-ico
[npm-downloads.svg]: https://img.shields.io/npm/dm/@catdad/to-ico.svg
[npm.link]: https://www.npmjs.com/package/@catdad/to-ico
[npm-version.svg]: https://img.shields.io/npm/v/@catdad/to-ico.svg

> Convert PNG images to ICO

This module is a fork of [`kevva/to-ico`](https://github.com/kevva/to-ico), removing the resize code. This code was quite old and had problematic dependencies, and my use case did not require it.

## Install

```bash
npm install --save @catdad/to-ico
```

## Usage

```js
const fs = require('fs');
const toIco = require('@catdad/to-ico');

const files = [
  fs.readFileSync('unicorn-16x16.png'),
  fs.readFileSync('unicorn-24x24.png'),
  fs.readFileSync('unicorn-32x32.png'),
  fs.readFileSync('unicorn-48x48.png'),
  fs.readFileSync('unicorn-64x64.png'),
  fs.readFileSync('unicorn-128x128.png'),
  fs.readFileSync('unicorn-256x256.png')
];

toIco(files).then(buf => {
  fs.writeFileSync('favicon.ico', buf);
});
```

## API

### toIco(images)

#### input

Type: `Array`

Array of PNG image buffers.

The images must have a size of `16x16`, `24x24`, `32x32`, `48x48`, `64x64`, `128x128` or `256x256` and they must have an 8 bit per sample (channel) bit-depth (on Unix you can check this with the `file` command: RGB(A) is supported, while [colormap](https://en.wikipedia.org/wiki/Indexed_color) is not, because it's 8 bits per pixel instead of 8 bits per channel, which is 24 or 32 bits per pixel depending on the presence of the alpha channel). These are limitations in the underlying [`pngjs`](https://github.com/lukeapage/pngjs#pngjs) library. If you have a colormap PNG you can convert it to an RGB/RGBA PNG with commonly used image editing tools.

## Related

* [svg-app-icon](https://github.com/catdad/svg-app-icon) - create high-quality desktop app icons for Windows, MacOS, and Linux using an SVG source
* [to-ico](https://github.com/kevva/to-ico) - the original module that this is a fork of
* [to-ico-cli](https://github.com/kevva/to-ico-cli) - CLI for this module

## License

[MIT](license)
