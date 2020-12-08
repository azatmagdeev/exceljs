// eslint-disable-next-line require-jsdoc
export class DOMListener {
  // eslint-disable-next-line require-jsdoc
  constructor($root) {
    if (!$root) {
      throw new Error('No $root for DOMListener')
    }
    this.$root = $root
  }
}
