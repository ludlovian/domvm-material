'use strict'

import { getArgs, memoize, el } from './util'
import { MDCSelect } from '@material/select'
import NotchedOutline from './NotchedOutline'
import classnames from 'classnames'

const getHooks = memoize(onchange => ({
  // istanbul ignore next
  didInsert (node) {
    node.data = node.data || {}
    node.data.mdcSelect = new MDCSelect(node.el)
    if (onchange) node.data.mdcSelect.listen('MDCSelect:change', onchange)
  },

  // istanbul ignore next
  willRecycle (prev, node) {
    node.data = prev.data
  },

  // istanbul ignore next
  willRemove (node) {
    if (onchange) node.data.mdcSelect.unlisten('MDCSelect:change', onchange)
    node.data.mdcSelect.destroy()
  }
}))

export default function Select (...args) {
  const [
    {
      class: cl,
      id,
      label,
      disabled,
      helperText,
      persistent,
      validationMsg,
      onchange,
      ...rest
    },
    children
  ] = getArgs(args)

  const selected =
    children && children.find(node => node.attrs && node.attrs.selected)
  const hasValue = selected && selected.attrs && selected.attrs.value

  return el('div', { class: cl }, [
    el(
      '.mdc-select',
      {
        class: classnames(
          label && 'mdc-select--outlined',
          disabled && 'mdc-select--disabled'
        ),
        _hooks: getHooks(onchange),
        _key: `${id}-mdc-select`
      },
      [
        el('i.mdc-select__dropdown-icon'),
        el(
          'select.mdc-select__native-control',
          {
            ...rest,
            id,
            'aria-controls': helperText !== undefined && `${id}-helper-text`,
            disabled
          },
          children
        ),
        label &&
          NotchedOutline(
            el(
              'label.mdc-floating-label',
              {
                class: classnames(
                  hasValue && 'mdc-floating-label--float-above'
                ),
                for: id
              },
              label
            )
          )
      ]
    ),

    helperText !== undefined &&
      el(
        'p.mdc-select-helper-text',
        {
          class: classnames(
            persistent && 'mdc-select-helper-text--persistent',
            validationMsg && 'mdc-select-helper-text--validation-msg'
          ),
          'aria-hidden': 'true',
          id: `${id}-helper-text`
        },
        helperText
      )
  ])
}
