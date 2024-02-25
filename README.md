# react-gridlines

A pure SVG based configurable React component to display grid lines.

This project is a fork of [react-gridlines](https://www.npmjs.com/package/react-gridlines) by [alfed7](https://www.npmjs.com/~alfed7) with ESM and TypeScript support.

![Grid lines screenshot](https://github.com/mezh-hq/react-gridlines/assets/73662613/7f407c35-39d8-4731-98de-a26979c943e9 "Grid lines screenshot")

# Install
```
npm i -s @mezh-hq/react-gridlines
```
or
```
yarn add @mezh-hq/react-gridlines
```

# Sample

```javascript
import React from 'react';
import GridLines from '@mezh-hq/react-gridlines';
import './App.css';

function App() {
  return (
    <div className="App">
      <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={12}>
        <h1>Gridlines demo</h1>
      </GridLines>
    </div>
  );
}

export default App;
```

# Supported properties

```
component - replace <div> with another element
cellWidth - width of the primary cell
cellHeight - height of the primary cell, equals to cellWidth if not provided
lineColor - color of the primary cell
strokeWidth - line weight of the primary cell
dashArray - line pattern of the primary cell ("3 1" --- - --- - --- - ---)
cellWidth2
cellHeight2
lineColor2
strokeWidth2
dashArray2
```

## License
[MIT](https://couto.mit-license.org/)