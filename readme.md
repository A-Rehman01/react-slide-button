# react-slide-button

Custom react slide button for both desktop and mobile.
This button uses [react-swipeable](https://github.com/FormidableLabs/react-swipeable) to detect the swipe action.

<center>
<img src="https://github.com/A-Rehman01/react-slide-button/blob/main/demo.gif" alt="demo.gif" height="200px" />
</center>

## Installation

```bash
npm install --save react-slide-button
```

or

```bash
yarn add react-slide-button
```

## Demo / Example

[Click here](https://react-slide-button-v2.surge.sh/)

## Options

| Key              | Type                     | Default | Description                                                                                                                                                                                                                        |
| ---------------- | ------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mainText         | `string` \| `react node` |         | Element that appears on button                                                                                                                                                                                                     |
| overlayText      | `string` \| `react node` |         | Element that appears on slide overlay                                                                                                                                                                                              |
| onSlideDone      | `function`               |         | Callback that gets called when the button is slide complete                                                                                                                                                                        |
| reset            | `integer`                |         | If this value changes, the button is reset to initial state, i.e., non-slide state.                                                                                                                                                |
| caret            | `string` \| `react node` |         | Element to serve as new caret, default is an image of arrow.                                                                                                                                                                       |
| customCaretWidth | `integer`                | 40      | Caret Width.                                                                                                                                                                                                                       |
| classList        | `string`                 | ''      | Class names that gets appended to main button element                                                                                                                                                                              |
| overlayClassList | `string`                 | ''      | Class names that gets appended to overlay element                                                                                                                                                                                  |
| caretClassList   | `string`                 | ''      | Class names that gets appended to caret element                                                                                                                                                                                    |
| delta            | `integer`                | 10      | Minimum distance to slide before swiping animation starts                                                                                                                                                                          |
| minSlideWidth    | `float`                  | 0.6     | Minimum width that a user needs to slide till to change the button state to slide state. Value ranges from `0-1`. For example, `0.6` means user needs to slide atleast till 60% of total width of button to set it to slide state. |
| minSlideVelocity | `float`                  | 0.6     | Other way to change button state to slide is to slide it quickly. If the slide velocity is above this value then button is set to slide state.                                                                                     |

**Note**: Even if user slides to lesser distance than the one specified by `minSlideWidth` option, if his slide velocity is above `minSlideVelocity` the button state will be changed to slide.

---

### Development

Firstly move on the Package Folder.

```bash
cd package
```

then install the dependencies with `npm install` or `yarn install`.

Now , use the following command to create a link locally, which is to be used in example project, using the following command

```bash
npm link
```

Now start the automatic rebuild for hot reloading purpose using the command:

```bash
npm start
```

Keep this terminal opened and move onto next step.

Now you need to start the example project, to do this make sure your current directory is `/example`, install its dependencies too using `npm install` or `yarn install` command. Now link react-slide-button to the example project using the command:

```bash
npm link react-slide-button
```

Now you can start the example project by running the command:

```
npm start
```

Now you are ready to make changes to `/src/index.js` file.
