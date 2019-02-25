'use strict'

import { getArgs, el } from './util'
import classnames from 'classnames'

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

export default function Typography (...args) {
  const [attrs, children] = getArgs(args)
  return el(
    'span',
    {
      class: classnames(
        styles.map(name => {
          if (attrs[name]) {
            delete attrs[name]
            return `mdc-typography--${name}`
          }
          return false
        })
      )
    },
    children
  )
}

styles.forEach(n => {
  const name = n.replace(n[0], n[0].toUpperCase())
  Typography[name] = (...args) => {
    const [attrs, children] = getArgs(args)
    return el('span.mdc-typography--' + n, attrs, children)
  }
})
