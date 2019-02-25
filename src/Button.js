'use strict'

import { getArgs, memoize, el } from './util'
import { MDCRipple } from '@material/ripple'
import classnames from 'classnames'

const getHooks = memoize(ripple => {
  if (!ripple) return {}
  return {
    // istanbul ignore next
    didInsert (node) {
      node.data = node.data || {}
      node.data.mdcRipple = new MDCRipple(node.el)
    },

    // istanbul ignore next
    willRecycle (prev, node) {
      node.data = prev.data
    },

    // istanbul ignore next
    willRemove (node) {
      node.data.mdcRipple.destroy()
    }
  }
})

export default function Button (...args) {
  const [
    {
      ripple,
      dense,
      raised,
      unelevated,
      outlined,
      primary,
      secondary,
      ...rest
    },
    children
  ] = getArgs(args)
  const cl = classnames(
    rest.class,
    'mdc-button',
    dense && 'mdc-button--dense',
    raised && 'mdc-button--raised',
    unelevated && 'mdc-button--unelevated',
    outlined && 'mdc-button--outlined',
    primary && 'mdc-theme--primary-bg',
    secondary && 'mdc-theme--secondary-bg'
  )

  return el(
    rest.href ? 'a' : 'button',
    {
      ...rest,
      class: cl,
      _key: rest._key || rest.id || 'mdcButton',
      _hooks: getHooks(ripple)
    },
    children
  )
}
