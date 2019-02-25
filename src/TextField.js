'use strict'

import { getArgs, el } from './util'
import { MDCTextField } from '@material/textfield'
import NotchedOutline from './NotchedOutline'
import classnames from 'classnames'

const hooks = {
  // istanbul ignore next
  willRecycle (prev, node) {
    node.data = prev.data
  },
  // istanbul ignore next
  didInsert (node) {
    node.data = node.data || {}
    node.data.mdcTextField = new MDCTextField(node.el)
  },
  // istanbul ignore next
  willRemove (node) {
    node.data.mdcTextField.destroy()
  }
}

export default function TextField (...args) {
  const [
    {
      id,
      type,
      label,
      disabled,
      value,
      helperText,
      persistent,
      validationMsg,
      class: cl,
      ...rest
    }
  ] = getArgs(args)

  return el('div', { class: cl }, [
    el(
      '.mdc-text-field',
      {
        class: classnames(
          label && 'mdc-text-field--outlined',
          type === 'textarea' && 'mdc-text-field--textarea',
          disabled && 'mdc-text-field--disabled'
        ),
        _hooks: hooks,
        _key: id + '-mdc-text-field'
      },
      [
        el(type === 'textarea' ? 'textarea' : 'input', {
          ...rest,
          class: 'mdc-text-field__input',
          ...(type === 'textarea' ? {} : { type }),
          value,
          disabled,
          id
        }),
        label &&
          NotchedOutline(
            el(
              'label.mdc-floating-label',
              {
                class: classnames(value && 'mdc-floating-label--float-above'),
                for: id
              },
              label
            )
          )
      ]
    ),
    helperText !== undefined &&
      el(
        'p.mdc-text-field-helper-text',
        {
          class: classnames(
            persistent && 'mdc-text-field-helper-text--persistent',
            validationMsg && 'mdc-text-field-helper-text--validation-msg'
          ),
          'aria-hidden': 'true',
          id: `${id}-helper-text`
        },
        helperText
      )
  ])
}
