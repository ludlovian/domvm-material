'use strict'

import { getArgs, el } from './util'
import { MDCNotchedOutline } from '@material/notched-outline'

const hooks = {
  // istanbul ignore next
  didInsert (node) {
    node.data = node.data || {}
    node.data.mdcNotchedOutline = new MDCNotchedOutline(node.el)
  },

  // istanbul ignore next
  willRecycle (prev, node) {
    node.data = prev.data
  },

  // istanbul ignore next
  willRemove (node) {
    node.data.mdcNotchedOutline.destroy()
  }
}

export default function NotchedOutline (...args) {
  const [attrs, children] = getArgs(args)
  return el(
    '.mdc-notched-outline',
    {
      ...attrs,
      _key: attrs._key || attrs._id || 'mdcNotchedOutline',
      _hooks: hooks
    },
    [
      el('.mdc-notched-outline__leading'),
      el('.mdc-notched-outline__notch', children),
      el('.mdc-notched-outline__trailing')
    ]
  )
}
