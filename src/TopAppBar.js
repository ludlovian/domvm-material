'use strict'

import { getArgs, memoize, el } from './util'
import { MDCTopAppBar } from '@material/top-app-bar'
import classnames from 'classnames'

const getHooks = memoize(onNav => ({
  // istanbul ignore next
  didInsert (node) {
    node.data = node.data || {}
    node.data.mdcTopAppBar = new MDCTopAppBar(node.el)
    if (onNav) node.data.mdcTopAppBar.listen('MDCTopAppBar:nav', onNav)
  },
  // istanbul ignore next
  willRecycle (prev, node) {
    node.data = prev.data
  },
  // istanbul ignore next
  willRemove (node) {
    if (onNav) node.data.mdcTopAppBar.unlisten('MDCTopAppBar:nav', onNav)
    node.data.mdcTopAppBar.destroy()
  }
}))

export default function TopAppBar (...args) {
  const [{ fixed, onNav, ...rest }, children] = getArgs(args)
  return el(
    'header.mdc-top-app-bar',
    {
      ...rest,
      class: classnames(rest.class, fixed && 'mdc-top-app-bar--fixed'),
      _key: rest._key || rest.id || 'mdcTopAppBar',
      _hooks: getHooks(onNav)
    },
    children
  )
}

TopAppBar.Row = (...args) => {
  const [attrs, children] = getArgs(args)
  return el('div.mdc-top-app-bar__row', attrs, children)
}

TopAppBar.Section = (...args) => {
  const [{ alignStart, alignEnd, ...rest }, children] = getArgs(args)
  return el(
    'section.mdc-top-app-bar__section',
    {
      ...rest,
      class: classnames(
        rest.class,
        alignStart && 'mdc-top-app-bar__section--align-start',
        alignEnd && 'mdc-top-app-bar__section--align-end'
      )
    },
    children
  )
}

TopAppBar.Icon = (...args) => {
  const [{ navigation, ...rest }, children] = getArgs(args)
  return el(
    'a.material-icons',
    {
      ...rest,
      class: classnames(
        rest.class,
        navigation && 'mdc-top-app-bar__navigation-icon'
      )
    },
    children
  )
}
