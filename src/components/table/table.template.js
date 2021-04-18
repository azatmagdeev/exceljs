const CODES = {
  A: 65,
  Z: 90,
}

function createCol(content) {
  return `<div class="column ${content}" 
               data-type="resizable" 
               data-col="${content}">
            ${content}
            <div class="col-resize" data-resize="col"></div>
          </div>`
}

function createCell(dataCol) {
  return `<div class="cell" data-col="${dataCol}" contenteditable></div>`
}

function createRow(content, rowNumber = '') {
  const resizeEl = rowNumber ?
    '<div class="row-resize" data-resize="row"></div>' : ''
  return `<div class="row" data-type="resizable">
            <div class="row-info">
              ${rowNumber}
              ${resizeEl}
            </div>
            <div class="row-data">${content}</div>
          </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15,) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')

  rows.push(createRow(cols, ''))

  const cells = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCell)
      .join('')

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
