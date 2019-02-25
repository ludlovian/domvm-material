'use strict'

import { getArgs, memoize, el } from './util'
import { MDCTabBar } from '@material/tab-bar'
import classnames from 'classnames'

const getHooks = memoize(onchange => ({
  // istanbul ignore next
  didInsert (node) {
    const data = (node.data = node.data || {})
    const mdcTabBar = (data.mdcTabBar = new MDCTabBar(node.el))
    if (onchange) mdcTabBar.listen('MDCTabBar:activated', onchange)
  },

  // istanbul ignore next
  willRecycle (prev, node) {
    node.data = prev.data
  },

  // istanbul ignore next
  willRemove (node) {
    const { data } = node
    const { mdcTabBar } = data
    if (onchange) mdcTabBar.unlisten('MDCTabBar:activated', onchange)
    mdcTabBar.destroy()
  }
}))

export default function TabBar (...args) {
  const [{ onchange, id, ...rest }, children] = getArgs(args)
  return el(
    '.mdc-tab-bar',
    {
      ...rest,
      _hooks: getHooks(onchange),
      _key: id + '-mdc-tab-bar',
      role: 'tablist'
    },
    [
      el('.mdc-tab-scroller', [
        el('.mdc-tab-scroller__scroll-area', [
          el('.mdc-tab-scroller__scroll-content', children)
        ])
      ])
    ]
  )
}

TabBar.Tab = (...args) => {
  const [{ active, ...rest }, children] = getArgs(args)
  return el(
    'button.mdc-tab',
    {
      ...rest,
      class: classnames(rest.class, active && 'mdc-tab--active'),
      role: 'tab',
      'aria-selected': active,
      tabindex: active ? '0' : '-1'
    },
    [
      el('span.mdc-tab__content', children),
      el(
        'span.mdc-tab-indicator',
        {
          class: classnames(active && 'mdc-tab-indicator--active')
        },
        [
          el(
            'span.mdc-tab-indicator__content.mdc-tab-indicator__content--underline'
          )
        ]
      ),
      el('span.mdc-tab__ripple')
    ]
  )
}

TabBar.TabIcon = (...args) => {
  const [attrs, children] = getArgs(args)
  return el('span.material-icons.mdc-tab__icon', attrs, children)
}

TabBar.TabText = (...args) => {
  const [attrs, children] = getArgs(args)
  return el('span.mdc-tab__text-label', attrs, children)
}
