import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'
  rows = 100

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
      const coords = $resizer.getCoords()
      if ($resizer.data.resize === 'col') {
        this.resizeCol($resizer, coords)
      }
      if ($resizer.data.resize === 'row') {
        this.resizeRow($resizer, coords)
      }
    }
  }

  resizeCol($resizer, coords) {
    let delta
    document.onmousemove = (ev) => {
      delta = ev.pageX - coords.right
      $resizer.css({right: (-delta)+'px'})
    }

    document.onmouseup = () => {
      document.onmousemove = null
      $resizer.css({right: 0, remove: 'opacity'})
      const $parent = $resizer.parent('[data-type=resizable]')
      const width = $parent.getCoords().width
          + 1 // +1 px чтобы мышка оставалась на ресайзере
      this.$root.children(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => {
            $(el).css({width: (width + delta) + 'px'})
          })
    }
  }

  resizeRow($resizer, coords) {
    let delta

    document.onmousemove = (ev) => {
      delta = ev.pageY - coords.bottom
      $resizer.css({bottom: (-delta)+'px'})
    }

    document.onmouseup = () => {
      document.onmousemove = null
      $resizer.css({bottom: 0, remove: 'opacity'})
      const $parent = $resizer.parent('[data-type=resizable]')
      $parent.css({
        height: ($parent.getCoords().height + delta
            + 1) + 'px', // +1 px чтобы мышка оставалась на ресайзере
      })
    }
  }
}
