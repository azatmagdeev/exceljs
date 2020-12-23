import {capitalize} from '@core/util';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root for DOMListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`Метод события ${listener} 
        не реализован у компонента ${this.name}`
        )
      }
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {

  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
