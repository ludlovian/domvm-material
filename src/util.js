'use strict'

let _domvm
let VNode

export function use (domvm) {
  _domvm = domvm
  VNode = _domvm.defineElement('div').constructor
}

export function el (...args) {
  return _domvm.defineElement(...args)
}

const isPojo = o =>
  o && typeof o === 'object' && !Array.isArray(o) && !(o instanceof VNode)

export function getArgs (args) {
  const attrs = isPojo(args[0]) ? args.shift() : {}
  let children
  if (args.length !== 0) {
    children = [].concat(...args)
  }
  return [attrs, children]
}

function shallowSame (a, b) {
  return a && b && a.length === b.length && a.every((x, i) => b[i] === x)
}

export function memoize (fn) {
  let prev = {}
  return (...args) => {
    if (shallowSame(args, prev.args)) return prev.result
    prev.args = args
    prev.result = fn(...args)
    return prev.result
  }
}
