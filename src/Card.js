'use strict'

import { MDCRipple } from '@material/ripple'
import classnames from 'classnames'
import Button from './Button'
import { getArgs, memoize, el } from './util'

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

export default function Card (...args) {
  const [{ outlined, ripple, ...rest }, children] = getArgs(args)
  const cl = classnames(
    rest.class,
    'mdc-card',
    outlined && 'mdc-card--outlined'
  )
  return el(
    'div',
    {
      ...rest,
      class: cl,
      _key: rest._key || rest.id || 'mdcCard',
      _hooks: getHooks(ripple)
    },
    children
  )
}

Card.Actions = (...args) => {
  const [attrs, children] = getArgs(args)
  return el('div.mdc-card__actions', attrs, children)
}

Card.ActionButton = (...args) => {
  const [attrs, children] = getArgs(args)
  return Button(
    {
      ...attrs,
      class: classnames(attrs.class, 'mdc-card', 'mdc-card__action--button')
    },
    children
  )
}

Card.ActionIcons = (...args) => {
  const [attrs, children] = getArgs(args)
  return el('div.mdc-card__action-icons', attrs, children)
}

Card.ActionIcon = (...args) => {
  const [attrs, children] = getArgs(args)
  return el(
    'a.material-icons.mdc-icon-button.mdc-card__action.mdc-card__action--icon',
    attrs,
    children
  )
}
