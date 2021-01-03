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
  console.log(cols)

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

`<div class="row">
        <div class="row-info"></div>
        <div class="row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">C</div>
            <div class="column">C</div>
        </div>
    </div>
    <div class="row">
        <div class="row-info">1</div>
        <div class="row-data">
            <div class="cell selected" contenteditable >A1</div>
            <div class="cell" contenteditable >B1</div>
            <div class="cell" contenteditable >C1</div>
            <div class="cell selected" contenteditable >A1</div>
            <div class="cell" contenteditable >B1</div>
            <div class="cell" contenteditable >C1</div>
        </div>
    </div>
    <div class="row">
        <div class="row-info">2</div>
        <div class="row-data">
            <div class="cell" contenteditable >A2</div>
            <div class="cell" contenteditable >B2</div>
            <div class="cell selected" contenteditable >C2</div>
        </div>
    </div>`
