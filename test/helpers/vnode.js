'use strict'

export function snapshot (t, vn) {
  t.snapshot(simplifyVNode(vn))
}

function simplifyVNode (v) {
  if (Array.isArray(v)) return v.map(simplifyVNode)
  if (!v || typeof v !== 'object' || v.constructor.name !== 'VNode') return v
  return {
    '1. tag': v.tag,
    '2. attrs': v.attrs,
    '3. body': simplifyVNode(v.body)
  }
}
