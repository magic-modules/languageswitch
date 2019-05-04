## @magic-modules/languageswitch
this is the [@magic-modules](https://github.com/magic-modules/)
LanguageSwitch component. It provides a dynamic language switch menu

it redirects your current page to any of the other language versions that exist,
but **assumes that there are alternatives for every language.**

it also handles hashes # in urls correctly.

[html docs](https://magic-modules.github.io/languageswitch/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/languageswitch.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/languageswitch
[travis-image]: https://api.travis-ci.org/magic-modules/languageswitch.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/languageswitch
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/language-switch/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/language-switch/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/languageswitch/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/languageswitch
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/languageswitch.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/languageswitch.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/languageswitch/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/languageswitch

#### install:
```bash
npm install --save-exact @magic-modules/languageswitch
```

#### usage:

##### import:
```javascript
// assets/index.js:


module.exports = {
  //... other entries
  LanguageSwitch = require('@magic-modules/languageswitch'),
}
```

##### use tag
```javascript
// in any component view
const component = {
  View: () => div([LanguageSwitch]),
}
```

##### language pages
create your languages in the pages directory, for example:

```bash
/pages/
  index.js // english page
  /de/
    index.js // german page
```

##### required app state'),
LanguageSwitch needs to know about the languages in your app.
```javascript
// /assets/app.js
module.exports = {
  state: {
    // ... other app state
    languages: [
      // the first language is the default fallback
      { code: 'en', to: '/', text: 'english' },
      { code: 'de', to: '/de/', text: 'deutsch' },
    ],
  },
}
```

thats it, your magic app now knows about your languages
