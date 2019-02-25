'use strict'

import test from 'ava'
import { snapshot } from './helpers/vnode'
import { Typography } from '../src'

const styles = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
]

function testAttributeStyle (t, style) {
  const x = Typography({ [style]: true }, 'foo')
  snapshot(t, x)
}

function testBoundStyle (t, style) {
  const x = Typography[style]({ class: 'quux' }, 'bar')
  snapshot(t, x)
}

styles.forEach(s => {
  test(`attribute style ${s}`, testAttributeStyle, s)
  s = s.replace(s[0], s[0].toUpperCase())
  test(`bound style ${s}`, testBoundStyle, s)
})
