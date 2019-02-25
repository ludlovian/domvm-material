'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { TextField } from '../src'

test('minimal', t => {
  const x = TextField({ id: 'foo' })
  snapshot(t, x)
})

test('maximal', t => {
  const x = TextField({
    id: 'foo',
    class: 'myTextField',
    label: 'bar',
    disabled: true,
    value: 'foobar',
    helperText: true,
    persistent: true,
    validationMsg: true,
    baz: 'zab',
    type: 'textarea'
  })
  snapshot(t, x)
})
