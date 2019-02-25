'use strict'

import { getArgs, el } from './util'

export default function Icon (...args) {
  const [attrs, children] = getArgs(args)
  return el('i.material-icons', attrs, children)
}
