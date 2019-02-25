'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { Icon } from '../src'

test('minimal icon', t => {
  const i = Icon()
  snapshot(t, i)
})

test('maximal icon', t => {
  const i = Icon({ class: 'myIcon', id: 'icon1' }, 'icon_text')
  snapshot(t, i)
})
