import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(1000)
  }

  // onClick(e) {
  //   console.log(e.type)
  // }

  onMousedown(e) {
    console.log(e.type)
  }

  // onMousemove(e) {
  //   console.log(e.type)
  // }
  //
  // onMouseup(e) {
  //   console.log(e.type)
  // }
}
