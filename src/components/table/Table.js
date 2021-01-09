import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
    this.$doc = $(document.documentElement)
    this.different = 0
    this.movingEl = {}
  }

  toHTML() {
    return createTable(25)
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      // if (e.target.dataset.resize === 'col') {
      e.target.style.opacity = '1'
      //   this.onMousemove = this.onMousemove.bind(this)
      //   this.onMouseup = this.onMouseup.bind(this)
      //   this.$doc.on('mousemove', this.onMousemove)
      //   this.$doc.on('mouseup', this.onMouseup, {once: true})
      //   // this.$doc.on('mouseout', this.onMouseup, {once: true})
      // }
      // const $resizer = $(e.target)
      const $parent = $(e.target.closest('[data-type=resizable]'))
      // console.log($resizer)
      const coords = $parent.getCoords()

      document.onmousemove = (ev) => {
        $parent.$el.style.width =
          (coords.width + ev.pageX - coords.right) + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = null
        e.target.style.removeProperty('opacity')
      }
    }
  }

  onMousemove(e) {
    // console.log(e.target)
    this.different += -e.movementX
    this.movingEl.style.right = `${this.different}px`
  }

  onMouseup(e) {
    console.log(e.type)
    this.$doc.off('mousemove', this.onMousemove)
    this.movingEl.style.removeProperty('opacity')
    this.movingEl.style.removeProperty('right')
    this.movingEl.parentElement.style.width =
      this.movingEl.parentElement.clientWidth + (-this.different) + 'px'
    this.different = 0
  }
}
