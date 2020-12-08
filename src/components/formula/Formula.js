import {ExcelComponent} from '@core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `<div class="info">fx</div>
        <div class="input"
             contenteditable="true"
             spellcheck="false"></div>`
  }
}
