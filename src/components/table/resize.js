import {$} from '@core/dom';

/**
 * Проверяет нужно ли ресайзить по дата атрибуту
 * @param {Event} event
 * @return {boolean}
 */
export function shouldResize(event) {
  return !!event.target.dataset.resize
}

export function resizeInit(event, $root) {
  const $resizer = $(event.target)
  $resizer.css({opacity: 1})
  const coords = $resizer.getCoords()
  if ($resizer.data.resize === 'col') {
    resizeCol($resizer, coords, $root)
  }
  if ($resizer.data.resize === 'row') {
    resizeRow($resizer, coords)
  }
}

function resizeCol($resizer, coords, $root) {
  let delta
  document.onmousemove = (ev) => {
    delta = ev.pageX - coords.right
    $resizer.css({right: (-delta)+'px'})
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    $resizer.css({right: 0, remove: 'opacity'})
    const $parent = $resizer.parent('[data-type=resizable]')
    const width = $parent.getCoords().width
        + 1 // +1 px чтобы мышка оставалась на ресайзере
    $root.children(`[data-col="${$parent.data.col}"]`)
        .forEach((el) => {
          $(el).css({width: (width + delta) + 'px'})
        })
  }
}

function resizeRow($resizer, coords) {
  let delta

  document.onmousemove = (ev) => {
    delta = ev.pageY - coords.bottom
    $resizer.css({bottom: (-delta)+'px'})
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    $resizer.css({bottom: 0, remove: 'opacity'})
    const $parent = $resizer.parent('[data-type=resizable]')
    $parent.css({
      height: ($parent.getCoords().height + delta
          + 1) + 'px', // +1 px чтобы мышка оставалась на ресайзере
    })
  }
}
