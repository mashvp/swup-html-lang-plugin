# Swup HTML lang Plugin

This is a plugin for [swup](https://swup.js.org/) - complete, flexible, extensible and easy to use page transition library for your web.

This plugin will update the `lang` attribute of the HTML node after navigation, which is useful for multilingual sites.

## Instalation

This plugin can be installed with npm

```bash
npm install @mashvp/swup-html-lang-plugin
```

and included with import

```javascript
import SwupHtmlLangPlugin from '@mashvp/swup-html-lang-plugin';
```

or included from the dist folder

```html
<script src="./dist/SwupHtmlLangPlugin.js"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new SwupHtmlLangPlugin()]
});
```
