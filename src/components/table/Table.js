import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeInit, shouldResize} from '@/components/table/resize';

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
    shouldResize(e) && resizeInit(e, this.$root)
  }
}
