// eslint-disable-next-line require-jsdoc
export class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  // eslint-disable-next-line require-jsdoc
  getRoot() {
    const $root = document.createElement('div')
    this.components.forEach((Component)=>{
      const component = new Component()
      // console.log(component.toHTML())
      $root.insertAdjacentHTML(
          'beforeend',
          component.toHTML()
      )
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
