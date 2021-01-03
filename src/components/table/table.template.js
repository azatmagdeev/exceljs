const CODES = {
  A: 65,
  Z: 90,
}

function createCol(content) {
  return `
    <div class="column">${content}</div>
  `
}

function createCell(content) {
  return `
    <div class="cell" contenteditable >${content}</div>
  `
}

function createRow(content, rowNumber) {
  return `
    <div class="row">
      <div class="row-info">${rowNumber}</div>
      <div class="row-data">${content}</div>
    </div>
  `
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
      .map(createCell)
      .join('')

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}