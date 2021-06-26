## React Native Feather Icons

[![npm version](https://img.shields.io/npm/v/react-native-feather.svg?style=flat-square)](https://www.npmjs.com/package/react-native-feather)
[![npm downloads](https://img.shields.io/npm/dm/react-native-feather.svg?style=flat-square)](https://www.npmjs.com/package/react-native-feather)

#### What is react-native-feather?

react-native-feather is a collection of simply beautiful open source icons for React Native. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

At its core, Feather is a collection of SVG files. To use SVG files on React Native, [`react-native-svg`](https://github.com/react-native-community/react-native-svg) is needed. This component contains all Feather icons converted to make compatible with [`react-native-svg`](https://github.com/react-native-community/react-native-svg) package.

#### Based on Feather Icons `v4.28.0`

## Installation

1. Ensure sure you've installed [`react-native-svg`](https://github.com/react-native-community/react-native-svg)
2. `npm i react-native-feather`

### Icons

List of available icons in this component.
[https://feathericons.com](https://feathericons.com/)

### Usage

To use icons as component, all icon names is formatted to Pascal Case.
arrow-up-circle => `<ArrowUpCircle/>`

```javascript
import { ArrowUpCircle } from "react-native-feather";

const App = () => {
  return <ArrowUpCircle />;
};
```

Icons can be configured with inline props:

```javascript
<ArrowUpCircle stroke="red" fill="#fff" width={32} height={32} />
```

You can also include the whole icon pack:

```javascript
import * as Icon from "react-native-feather";

const App = () => {
  return <Icon.ArrowUpCircle />;
};
```

### Properties

Any [Svg property](https://github.com/react-native-community/react-native-svg#common-props) and the following:

| Prop              | Description                                                          | Default          |
| ----------------- | -------------------------------------------------------------------- | ---------------- |
| **`width`**       | Width of the icon.                                                   | `24`             |
| **`height`**      | Height of the icon.                                                  | `24`             |
| **`stroke`**      | The stroke prop refers to the color outline the icon.                | `"currentColor"` |
| **`strokeWidth`** | The strokeWidth prop specifies the width of the outline on the icon. | `2`              |
| **`fill`**        | The fill prop refers to the color inside the icon.                   | `"none"`         |

### Author
<!-- readme: yigithanyucedag -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/yigithanyucedag">
            <img src="https://avatars.githubusercontent.com/u/25598773?v=4" width="100;" alt="yigithanyucedag"/>
            <br />
            <sub><b>Yiğithan</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: yigithanyucedag -end -->

## Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/yigithanyucedag">
            <img src="https://avatars.githubusercontent.com/u/25598773?v=4" width="100;" alt="yigithanyucedag"/>
            <br />
            <sub><b>Yiğithan</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/FDiskas">
            <img src="https://avatars.githubusercontent.com/u/468006?v=4" width="100;" alt="FDiskas"/>
            <br />
            <sub><b>Vytenis</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->