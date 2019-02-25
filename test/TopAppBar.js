'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { TopAppBar } from '../src'

test('minimal', t => {
  const x = TopAppBar()
  snapshot(t, x)
})

test('maximal', t => {
  const x = TopAppBar(
    { fixed: true },
    TopAppBar.Row(
      TopAppBar.Section(
        { alignStart: true },
        TopAppBar.Icon({ navigation: true }, 'icon_name'),
        'AppBarText'
      ),
      TopAppBar.Section({ alignEnd: true }, 'MoreText')
    )
  )
  snapshot(t, x)
})
