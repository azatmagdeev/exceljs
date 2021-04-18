import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(2000)
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      e.target.style.opacity = '1'
      const $parent = $(e.target.closest('[data-type=resizable]'))
      const coords = $parent.getCoords()

      if (e.target.dataset.resize === 'col') {
        this.resizeCol(e, $parent, coords)
      }
      if (e.target.dataset.resize === 'row') {
        this.resizeRow(e, $parent, coords)
      }
    }
  }

  resizeCol(e, $parent, coords) {
    let width = ''

    document.onmousemove = (ev) => {
      width = (coords.width + ev.pageX - coords.right) + 'px'
      $parent.css({width: width})
    }

    document.onmouseup = () => {
      document.onmousemove = null
      e.target.style.removeProperty('opacity')
      this.$root.$el.querySelectorAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => {
            el.style.width = width
          })
    }
  }

  resizeRow(e, $parent, coords) {
    let height = ''

    document.onmousemove = (ev) => {
      height = (coords.height + ev.pageY - coords.bottom) + 'px'
      $parent.css({height: height})
    }

    document.onmouseup = () => {
      document.onmousemove = null
      e.target.style.removeProperty('opacity')
    }
  }
}
