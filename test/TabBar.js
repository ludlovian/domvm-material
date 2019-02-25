'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { TabBar } from '../src'

test('minimal', t => {
  const x = TabBar({ id: 'foo' })
  snapshot(t, x)
})

test('maximal', t => {
  const x = TabBar(
    {
      class: 'myTabBar',
      onchange: function onChange () {},
      id: 'foo',
      baz: 'bar'
    },
    TabBar.Tab({ active: true }, TabBar.TabIcon('icon_name')),
    TabBar.Tab(TabBar.TabText('foobarbaz'))
  )
  snapshot(t, x)
})
