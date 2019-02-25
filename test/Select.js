'use strict'

import test from 'ava'
import { defineElement as el } from 'domvm'
import { snapshot } from './helpers/vnode'
import { Select } from '../src'

test('Select minimal', t => {
  const x = Select({ id: 'foo' })
  snapshot(t, x)
})

test('Select maximal', t => {
  const x = Select(
    {
      class: 'mySelect',
      id: 'foo',
      label: 'bar',
      disabled: true,
      helperText: 'foobar',
      persistent: true,
      validationMsg: true,
      onchange: () => {},
      baz: 'zab'
    },
    el('option', { value: 'foo', selected: true }, 'Foo'),
    el('option', { value: 'bar' }, 'Bar')
  )
  snapshot(t, x)
})

test('Select with nothing selected', t => {
  const x = Select({ id: 'foo' }, el('option', { selected: true }, ''))
  snapshot(t, x)
})
