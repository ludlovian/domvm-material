'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { Button } from '../src'
import { defineElement as el } from 'domvm'

test('simple button', t => {
  const b = Button('text')
  snapshot(t, b)
})

test('simple button which memoizes hooks', t => {
  const b1 = Button({ ripple: true }, 'text1')
  const b2 = Button({ ripple: true }, 'text2')
  t.is(b1.attrs._hooks, b2.attrs._hooks)
})

test('complex button', t => {
  const b = Button(
    {
      href: 'foo',
      class: 'cl1',
      dense: true,
      raised: true,
      unelevated: true,
      ripple: true,
      outlined: true,
      primary: true,
      secondary: true,
      id: 'button1'
    },
    el('span', 'text')
  )
  snapshot(t, b)
})
