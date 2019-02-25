'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { Card } from '../src'

test('minimal Card', t => {
  const c = Card()
  snapshot(t, c)
})

test('full card', t => {
  const c = Card(
    { outlined: true, ripple: true },
    'card text',
    Card.Actions(
      { class: 'myactions' },
      Card.ActionButton(
        { raised: true, ripple: true, id: 'btn2' },
        // istanbul ignore next
        'buttonText'
      ),
      Card.ActionIcons({ class: 'iconStrip' }, Card.ActionIcon('sync'))
    )
  )
  snapshot(t, c)
})
