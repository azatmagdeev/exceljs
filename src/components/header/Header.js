import {ExcelComponent} from '@core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Header extends ExcelComponent {
  static className = 'excel__header'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    // super.toHTML();
    return `<label>
            <input type="text" class="input" value="Новая таблица">
        </label>
        <div>
            <div class="button">
                <span class="material-icons">delete</span>
            </div>
            <div class="button">
                <span class="material-icons">exit_to_app</span>
            </div>
        </div>`
  }
}
