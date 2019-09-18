import Plugin from '@swup/plugin';

export default class HtmlLangPlugin extends Plugin {
  name = 'HtmlLangPlugin';

  constructor(options) {
    super();

    const defaultOptions = {};

    this.options = { ...defaultOptions, ...options };
    this.parser = new DOMParser();
  }

  mount() {
    this.swup.on('contentReplaced', () => {
      const { originalContent } = this.swup.cache.getCurrentPage();
      const page = this.parser.parseFromString(originalContent, 'text/html');
      const lang = page.documentElement.getAttribute('lang');

      document.documentElement.setAttribute('lang', lang);
    });
  }

  unmount() {}
}
