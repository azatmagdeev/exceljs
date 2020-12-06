import {ExcelComponent} from '@core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Header extends ExcelComponent {
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    // super.toHTML();
    return `<h1>header</h1>`
  }
}
