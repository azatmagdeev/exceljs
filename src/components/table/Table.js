import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'
  rows = 5

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(this.rows)
  }

  onMousedown(e) {
    const $resizer = $(e.target)
    if ($resizer.data.resize) {
      $resizer.css({opacity: 1})
      // const $parent = $(e.target.closest('[data-type=resizable]'))
      const coords = $resizer.getCoords()

      if ($resizer.data.resize === 'col') {
        this.resizeCol(e, $resizer, coords)
      }
      if ($resizer.data.resize === 'row') {
        this.resizeRow(e, $resizer, coords)
      }
    }
  }

  resizeCol(e, $resizer, coords) {
    let delta = ''
    const $parent = $(e.target.closest('[data-type=resizable]'))

    document.onmousemove = (ev) => {
      delta = -(coords.width + ev.pageX - coords.right) + 'px'
      $resizer.css({right: delta})
      console.log({delta})
      console.log($resizer.$el.offsetLeft);
    }

    document.onmouseup = () => {
      document.onmousemove = null
      console.log($resizer.$el.offsetLeft);
      // e.target.style.removeProperty('opacity')
      this.$root.$el.querySelectorAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => {
            // console.dir(el)
            console.log($resizer.$el.offsetLeft);
            el.style.width = $resizer.$el.offsetLeft + 'px'

            console.log(el);
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
