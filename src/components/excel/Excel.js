// eslint-disable-next-line require-jsdoc
import {$} from '@core/dom';

// eslint-disable-next-line require-jsdoc
export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components.forEach((Component)=>{
      const $el = $.create('div', Component.className)
      const component = new Component($el)

      $el.html(component.toHTML())
      // eslint-disable-next-line no-debugger
      // debugger
      $root.append($el)
    })
    console.log($root.styles)
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
