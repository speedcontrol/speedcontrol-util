**[speedcontrol-util](README.md)**

[Globals](globals.md)

# speedcontrol-util

*Currently developed around the `dev` branch of `nodecg-speedcontrol`, use it at your own risk!*

Node.js package with utilities to help you code NodeCG bundles that interface with the nodecg-speedcontrol bundle.

## Install

`$ npm install speedcontrol-util --save`

### Example

#### JavaScript

```javascript
const speedcontrolUtil = require('speedcontrol-util');
module.exports = nodecg => {
  const sc = new speedcontrolUtil(nodecg);
  const activeRun = sc.runDataActiveRun; // instance of the replicant
};
```

#### TypeScript

```typescript
import speedcontrolUtil from 'speedcontrol-util';
export = (nodecg: NodeCG) => {
  const sc = new speedcontrolUtil(nodecg);
  const activeRun = sc.runDataActiveRun; // instance of the replicant
};

```

Some simple auto generated documentation from the TypeScript is [available here](docs/README.md).