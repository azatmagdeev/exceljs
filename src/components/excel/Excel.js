// eslint-disable-next-line require-jsdoc
import {$} from '@core/dom';

// eslint-disable-next-line require-jsdoc
export class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  // eslint-disable-next-line require-jsdoc
  getRoot() {
    const $root = $.create('div', 'excel')
    this.components.forEach((Component)=>{
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
    })
    return $root
  }
  /**
   *
   */
  render() {
    this.$el.append(this.getRoot())
  }
}
