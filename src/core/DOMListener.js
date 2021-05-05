import {capitalize} from '@core/util';

/**
 * Класс навешивания слушателей событий на DOM элементы
 */
export class DOMListener {
  /**
   * Конструктор
   * @param {Dom} $root
   * @param {string[]} listeners
   */
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
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.map((listener) => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

/**
 * Создает имя метода из имени события
 * @param {string} eventName имя события
 * @return {string} имя метода
 */
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
