'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { NotchedOutline } from '../src'

test('NotchedOutline minimal', t => {
  const x = NotchedOutline()
  snapshot(t, x)
})

test('NotchedOutline maximal', t => {
  const x = NotchedOutline(
    {
      class: 'myNo',
      _key: '123'
    },
    'Notch contents'
  )
  snapshot(t, x)
})
