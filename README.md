# domvm-material
Wrapping Material Design [web components](https://github.com/material-components/material-components-web) for [domvm](https://github.com/domvm/domvm)

## Purpose

This library was developed to help me understand domvm, as well as for my own use. It is neither complete, nor suitable for production.

## Usage

This only contains the DOM and JS elements. You must import the relevant CSS/SCSS files in your application.

Before use, this library *must* be initialised by calling `use(domvm)` to provide it with the specific domvm uild you are using.

## API

- [Button](#button)
- [Card](#card)

### `use`

```
import { use } from 'domvm-material'
import * as domvm from 'domvm'
use(domvm)
```

Used to set the domvm library to be used. The only API currently used is `defineElement`, but who knows...

### Button

`Button([options], [contents,...])`

options:
- `ripple` if set adds a ripple effect
- `dense`
- `raised`
- `unelevated`
- `outlined`
- `primary`
- `secondary`

### Card

`Card([options], [contents,...])`

options:
- `ripple`
- `outlined`

`Card.Actions(<contents>)`

`Card.ActionButton(<as per button>)`

`Card.ActionIcons(<icons>)`

`Card.ActionIcon(<icon_name>)`
