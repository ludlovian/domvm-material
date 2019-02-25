# domvm-material
Wrapping Material Design [web components](https://github.com/material-components/material-components-web) for [domvm](https://github.com/domvm/domvm)

## Purpose

This library was developed to help me understand domvm, as well as for my own use. It is neither complete, nor suitable for production.

## Usage

This only contains the DOM and JS elements. You must import the relevant CSS/SCSS files in your application.

Before use, this library *must* be initialised by calling `use(domvm)` to provide it with the specific domvm uild you are using.

## API

Components
- [Button](#button)
- [Card](#card)
- [Drawer](#drawer)
- [Icon](#icon)
- [LayoutGrid](#layoutgrid)
- [Select](#select)
- [TabBar](#tabbar)
- [TextField](#textfield)
- [TopAppBar](#topappbar)
- [Typography](#typography)

The components follow the normal hyperscript convention of `([attributes], [children,...])`.
Typically, any additional attributes are passed straight down. This doucmentation only
describes ones which are specifically handled.


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

### Drawer

`Drawer([options], [contents,...])`

options:
- `onOpen` called when the drawer opens
- `onClose` called when then drawer closes
- `open` a stream of boolean open/close values

`Drawer.Header([options], [contents,...])`

options:
- `title`
- `subtitle`

`Drawer.Item([options], [contents,...])`

options:
- `selected`

**Note:** the Material component requires that there is at
least one `Item` which has `selected=true`. It crashes annoyingly if not.

`Drawer.ItemIcon(<icon_name>)`

`Drawer.ItemText(<text elements>)`

### Icon

`Icon(<icon_name>)`

### LayoutGrid

`LayoutGrid([options], [contents,...])`

options:
- `noInner` an `Inner` is automatically included unless this is set

`LayoutGrid.Inner(<contents>)`

`LayoutGrid.Cell([options], [contents,...])`

options:
- `cols`
- `desktopCols`
- `tabletCols`
- `phoneCols`
- `order`
- `align`

### Select

This is the outlined style of select, using the native select element

`Select([options], [optionElement, ...])`

options:
- `id` mandatory
- `label`
- `disabled`
- `helperText` appears underneath
- `persistent`
- `validationMsg`
- `onchange` called when the selection changes

The children should be `option` DOM elements, with `value` and `selected` set
as appropriate

### TabBar

`TabBar([options], [contents,...])`

options:
- `onchange` called when the tab changes
- `id` mandatory

`TabBar.Tab([options], [contents,...])`

options:
- `active`

`TabBar.TabIcon(<icon_name>)`

`TabBar.TabText(<textElements>)`

### TextField

This is the outlined version of this component

`TextField([options])`

options:
- `id` mandatory
- `type` set to `textarea` for a textarea, else passed through
- `label`
- `disabled`
- `value`
- `helperText`
- `persistent`
- `validationMsg`

### TopAppBar

`TopAppBar([options], [contents,...])`

options:
- `onNav` called when the nav icon is clicked
- `fixed`

`TopAppBar.Row(<contents>)`

`TopAppBar.Section([options], [contents,...])`

options:
- `alignStart`
- `alignEnd`

`TopAppBar.Icon([options], icon_name)`

options:
- `navigation` set as nav icon

### Typography

`Typography([options], [textElements,...])`

options:
- `headline1-6`
- `subtitle1-2`
- `body1-2`
- `caption`
- `button`
- `overline`

Pre-set functions are also available as `Typography.[Style]` where `Style` is
the proper case version of the style name. E.g `Typography.Body1(<text>)`
