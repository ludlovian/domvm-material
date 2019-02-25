'use strict'

import { getArgs, el } from './util'
import classnames from 'classnames'

export default function LayoutGrid (...args) {
  const [{ noInner, ...rest }, children] = getArgs(args)
  return el(
    '.mdc-layout-grid',
    rest,
    noInner ? children : [LayoutGrid.Inner(children)]
  )
}

LayoutGrid.Inner = (...args) => {
  const [attrs, children] = getArgs(args)
  return el('div.mdc-layout-grid__inner', attrs, children)
}

LayoutGrid.Cell = (...args) => {
  const [
    { cols, desktopCols, tabletCols, phoneCols, order, align, ...rest },
    children
  ] = getArgs(args)
  return el(
    'div.layout-grid__cell',
    {
      ...rest,
      class: classnames(
        rest.class,
        cols && `mdc-layout-grid__cell--span-${cols}`,
        desktopCols && `mdc-layout-grid__cell--span-${desktopCols}-desktop`,
        tabletCols && `mdc-layout-grid__cell--span-${tabletCols}-tablet`,
        phoneCols && `mdc-layout-grid__cell--span-${phoneCols}-phone`,
        order && `mdc-layout-grid__cell--order-${order}`,
        align && `mdc-layout-grid__cell--align-${align}`
      )
    },
    children
  )
}
