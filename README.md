# speedcontrol-util

*Currently in heavy/early development, breaking changes may happen!*

Node.js package with utilities to help you code NodeCG bundles that interface with the nodecg-speedcontrol bundle.

## Install

`$ npm install speedcontrol-util`

### Example

#### JavaScript

```javascript
const SpeedcontrolUtil = require('speedcontrol-util');
module.exports = nodecg => {
  const sc = new SpeedcontrolUtil(nodecg);
  const activeRun = sc.runDataActiveRun; // instance of the replicant
};
```

#### TypeScript

```typescript
import SpeedcontrolUtil from 'speedcontrol-util';
export = (nodecg: NodeCG) => {
  const sc = new SpeedcontrolUtil(nodecg);
  const activeRun = sc.runDataActiveRun; // instance of the replicant
};

```
