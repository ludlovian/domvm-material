'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { Drawer } from '../src'

test('basic Drawer', t => {
  const d = Drawer()
  t.snapshot(d)
})

test('Drawer with attrs', t => {
  const d = Drawer({
    id: 'd1',
    open: () => null,
    onOpen: () => {},
    onClose: () => {},
    class: 'myDrawer'
  })
  snapshot(t, d)
})

test('Drawer.Header minimal', t => {
  const d = Drawer.Header()
  snapshot(t, d)
})

test('Drawer.Header maxmimal', t => {
  const d = Drawer.Header(
    {
      title: 'foo',
      subtitle: 'bar',
      onsomething: 'baz'
    },
    'quux'
  )
  snapshot(t, d)
})

test('Full drawer', t => {
  const d = Drawer(
    Drawer.Header({ title: 'foo' }),
    Drawer.Content(
      Drawer.Item(
        { selected: true },
        Drawer.ItemIcon('person'),
        Drawer.ItemText('Item 1')
      ),
      Drawer.Item(Drawer.ItemIcon('person'), Drawer.ItemText('Item 2'))
    )
  )
  snapshot(t, d)
})
