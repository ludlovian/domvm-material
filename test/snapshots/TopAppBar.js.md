# Snapshot report for `test/TopAppBar.js`

The actual snapshot is saved in `TopAppBar.js.snap`.

Generated by [AVA](https://ava.li).

## maximal

> Snapshot 1

    {
      '1. tag': 'header',
      '2. attrs': {
        _hooks: {
          didInsert: Function didInsert {},
          willRecycle: Function willRecycle {},
          willRemove: Function willRemove {},
        },
        _key: 'mdcTopAppBar',
        class: 'mdc-top-app-bar mdc-top-app-bar--fixed',
      },
      '3. body': [
        {
          '1. tag': 'div',
          '2. attrs': {
            class: 'mdc-top-app-bar__row',
          },
          '3. body': [
            {
              '1. tag': 'section',
              '2. attrs': {
                class: 'mdc-top-app-bar__section mdc-top-app-bar__section--align-start',
              },
              '3. body': [
                {
                  '1. tag': 'a',
                  '2. attrs': {
                    class: 'material-icons mdc-top-app-bar__navigation-icon',
                  },
                  '3. body': [
                    'icon_name',
                  ],
                },
                'AppBarText',
              ],
            },
            {
              '1. tag': 'section',
              '2. attrs': {
                class: 'mdc-top-app-bar__section mdc-top-app-bar__section--align-end',
              },
              '3. body': [
                'MoreText',
              ],
            },
          ],
        },
      ],
    }

## minimal

> Snapshot 1

    {
      '1. tag': 'header',
      '2. attrs': {
        _hooks: {
          didInsert: Function didInsert {},
          willRecycle: Function willRecycle {},
          willRemove: Function willRemove {},
        },
        _key: 'mdcTopAppBar',
        class: 'mdc-top-app-bar ',
      },
      '3. body': null,
    }
