## React Native Feather Icons

[![npm version](https://img.shields.io/npm/v/react-native-feather.svg?style=flat-square)](https://www.npmjs.com/package/react-native-feather)
[![npm downloads](https://img.shields.io/npm/dm/react-native-feather.svg?style=flat-square)](https://www.npmjs.com/package/react-native-feather)

#### What is react-native-feather?

react-native-feather is a collection of simply beautiful open source icons for React Native. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

#### Based on Feather Icons `v4.28.0`

## Installation

1. Ensure sure you've installed [`react-native-svg`](https://github.com/react-native-community/react-native-svg)
2. `npm i react-native-feather`

### Usage

```javascript
import { Activity } from "react-native-feather";

const App = () => {
  return <Activity />;
};
```

Icons can be configured with inline props:

```javascript
<Activity stroke="red" fill="#fff" width={32} height={32} />
```

You can also include the whole icon pack:

```javascript
import * as Icon from "react-native-feather";

const App = () => {
  return <Icon.Activity />;
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
