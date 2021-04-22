class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType, callback, options = {}) {
    this.$el.addEventListener(eventType, callback, options)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  /**
   * Применяет inline стили к DOM-элементу или удаляет стиль
   * @param {styles} styles стили в формате ключ: значение
   * @return {Dom} возвращает сам себя для чейна
   */
  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      if (key === 'remove') this.$el.style.removeProperty(styles[key])
      else this.$el.style[key] = styles[key]
    })
    return this
  }

  /**
   * Находит предка по селектору
   * @param {String} selector
   * @return {Dom} новый объект
   */
  parent( selector ) {
    return $(this.$el.closest(selector))
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
    classes ? el.classList.add(classes) : null
    return $(el)
}
