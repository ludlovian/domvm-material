'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { LayoutGrid } from '../src'

test('Grid - simple', t => {
  const x = LayoutGrid(LayoutGrid.Cell('content'))
  snapshot(t, x)
})

test('Grid - complex', t => {
  const x = LayoutGrid(
    {
      class: 'myGrid',
      noInner: true
    },
    LayoutGrid.Inner(
      LayoutGrid.Cell('simple cell'),
      LayoutGrid.Cell(
        {
          cols: 1,
          desktopCols: 2,
          tabletCols: 3,
          phoneCols: 4,
          order: 5,
          align: 6,
          foo: 'bar'
        },
        'more content'
      )
    )
  )
  snapshot(t, x)
})
