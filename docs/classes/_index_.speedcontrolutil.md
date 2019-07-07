[speedcontrol-util](../README.md) > ["index"](../modules/_index_.md) > [SpeedcontrolUtil](../classes/_index_.speedcontrolutil.md)

# Class: SpeedcontrolUtil

## Hierarchy

 `EventEmitter`

**↳ SpeedcontrolUtil**

## Index

### Constructors

* [constructor](_index_.speedcontrolutil.md#constructor)

### Properties

* [nodecgContext](_index_.speedcontrolutil.md#nodecgcontext)
* [runDataActiveRun](_index_.speedcontrolutil.md#rundataactiverun)
* [runDataArray](_index_.speedcontrolutil.md#rundataarray)
* [timer](_index_.speedcontrolutil.md#timer)
* [timerChangesDisabled](_index_.speedcontrolutil.md#timerchangesdisabled)
* [defaultMaxListeners](_index_.speedcontrolutil.md#defaultmaxlisteners)

### Methods

* [addListener](_index_.speedcontrolutil.md#addlistener)
* [checkForTotalPlayers](_index_.speedcontrolutil.md#checkfortotalplayers)
* [disableTimerChanges](_index_.speedcontrolutil.md#disabletimerchanges)
* [emit](_index_.speedcontrolutil.md#emit)
* [enableTimerChanges](_index_.speedcontrolutil.md#enabletimerchanges)
* [eventNames](_index_.speedcontrolutil.md#eventnames)
* [findIndexInRunDataArray](_index_.speedcontrolutil.md#findindexinrundataarray)
* [formPlayerNamesString](_index_.speedcontrolutil.md#formplayernamesstring)
* [getCurrentRun](_index_.speedcontrolutil.md#getcurrentrun)
* [getMaxListeners](_index_.speedcontrolutil.md#getmaxlisteners)
* [getNextRuns](_index_.speedcontrolutil.md#getnextruns)
* [getRunDataArray](_index_.speedcontrolutil.md#getrundataarray)
* [listenerCount](_index_.speedcontrolutil.md#listenercount)
* [listeners](_index_.speedcontrolutil.md#listeners)
* [off](_index_.speedcontrolutil.md#off)
* [on](_index_.speedcontrolutil.md#on)
* [once](_index_.speedcontrolutil.md#once)
* [prependListener](_index_.speedcontrolutil.md#prependlistener)
* [prependOnceListener](_index_.speedcontrolutil.md#prependoncelistener)
* [rawListeners](_index_.speedcontrolutil.md#rawlisteners)
* [removeAllListeners](_index_.speedcontrolutil.md#removealllisteners)
* [removeListener](_index_.speedcontrolutil.md#removelistener)
* [resetTimer](_index_.speedcontrolutil.md#resettimer)
* [setMaxListeners](_index_.speedcontrolutil.md#setmaxlisteners)
* [startTimer](_index_.speedcontrolutil.md#starttimer)
* [stopTimer](_index_.speedcontrolutil.md#stoptimer)
* [listenerCount](_index_.speedcontrolutil.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SpeedcontrolUtil**(nodecg: *`NodeCG`*): [SpeedcontrolUtil](_index_.speedcontrolutil.md)

*Defined in [index.ts:25](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| nodecg | `NodeCG` |

**Returns:** [SpeedcontrolUtil](_index_.speedcontrolutil.md)

___

## Properties

<a id="nodecgcontext"></a>

### `<Private>` nodecgContext

**● nodecgContext**: *`NodeCG`*

*Defined in [index.ts:21](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L21)*

___
<a id="rundataactiverun"></a>

###  runDataActiveRun

**● runDataActiveRun**: *`Replicant`<`RunDataActiveRun`>*

*Defined in [index.ts:23](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L23)*

___
<a id="rundataarray"></a>

###  runDataArray

**● runDataArray**: *`Replicant`<`RunDataArray`>*

*Defined in [index.ts:22](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L22)*

___
<a id="timer"></a>

###  timer

**● timer**: *`Replicant`<`Timer`>*

*Defined in [index.ts:24](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L24)*

___
<a id="timerchangesdisabled"></a>

###  timerChangesDisabled

**● timerChangesDisabled**: *`Replicant`<`TimerChangesDisabled`>*

*Defined in [index.ts:25](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L25)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:9*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="checkfortotalplayers"></a>

###  checkForTotalPlayers

▸ **checkForTotalPlayers**(run: *`RunData`*): `number`

*Defined in [index.ts:140](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L140)*

Gets the total amount of players in a specified run.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | `RunData` |  Run data object. |

**Returns:** `number`

___
<a id="disabletimerchanges"></a>

###  disableTimerChanges

▸ **disableTimerChanges**(): `void`

*Defined in [index.ts:192](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L192)*

Prevent the nodecg-speedcontrol timer from being changed.

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="enabletimerchanges"></a>

###  enableTimerChanges

▸ **enableTimerChanges**(): `void`

*Defined in [index.ts:199](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L199)*

Allow the nodecg-speedcontrol timer to be changed.

**Returns:** `void`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:24*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="findindexinrundataarray"></a>

###  findIndexInRunDataArray

▸ **findIndexInRunDataArray**(run?: *`RunData` \| `null`*): `number`

*Defined in [index.ts:120](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L120)*

Find run data array index of current run based on it's ID. Will return -1 if it cannot be found.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` run | `RunData` \| `null` |  this.getCurrentRun() |  Run data object, defaults to current run. |

**Returns:** `number`

___
<a id="formplayernamesstring"></a>

###  formPlayerNamesString

▸ **formPlayerNamesString**(run: *`RunData`*): `string`

*Defined in [index.ts:150](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L150)*

Goes through each team and players and makes a string to show the names correctly together.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | `RunData` |  Run data object. |

**Returns:** `string`

___
<a id="getcurrentrun"></a>

###  getCurrentRun

▸ **getCurrentRun**(): `RunDataActiveRun`

*Defined in [index.ts:87](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L87)*

Returns the currently active run data object.

**Returns:** `RunDataActiveRun`

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:20*

**Returns:** `number`

___
<a id="getnextruns"></a>

###  getNextRuns

▸ **getNextRuns**(amount?: *`number`*, run?: *`RunData` \| `null`*): `RunData`[]

*Defined in [index.ts:103](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L103)*

Gets the next X runs in the schedule after the supplied run.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` amount | `number` | 4 |  Maximum amount of runs to return, defaults to 4. |
| `Default value` run | `RunData` \| `null` |  this.getCurrentRun() |  Run data object, defaults to current run. Will grab from the start if not set. |

**Returns:** `RunData`[]

___
<a id="getrundataarray"></a>

###  getRunDataArray

▸ **getRunDataArray**(): `RunDataArray`

*Defined in [index.ts:94](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L94)*

Returns the array of runs.

**Returns:** `RunDataArray`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"timerStarted"*, listener: *`function`*): `this`

▸ **on**(event: *"timerResumed"*, listener: *`function`*): `this`

▸ **on**(event: *"timerPaused"*, listener: *`function`*): `this`

▸ **on**(event: *"timerFinished"*, listener: *`function`*): `this`

▸ **on**(event: *"timerReset"*, listener: *`function`*): `this`

▸ **on**(event: *"timerEdited"*, listener: *`function`*): `this`

▸ **on**(event: *"timerTeamFinished"*, listener: *`function`*): `this`

▸ **on**(event: *"timerTeamUndidFinish"*, listener: *`function`*): `this`

▸ **on**(event: *`string`*, listener: *`Function`*): `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:8](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerStarted" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:9](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerResumed" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:10](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerPaused" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:11](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerFinished" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:12](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerReset" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:13](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerEdited" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:14](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerTeamFinished" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:15](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "timerTeamUndidFinish" |
| listener | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [index.ts:17](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="resettimer"></a>

###  resetTimer

▸ **resetTimer**(): `void`

*Defined in [index.ts:184](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L184)*

Resets the nodecg-speedcontrol timer.

**Returns:** `void`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="starttimer"></a>

###  startTimer

▸ **startTimer**(): `void`

*Defined in [index.ts:167](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L167)*

Starts the nodecg-speedcontrol timer.

**Returns:** `void`

___
<a id="stoptimer"></a>

###  stopTimer

▸ **stopTimer**(teamID?: *`number`*): `void`

*Defined in [index.ts:176](https://github.com/speedcontrol/speedcontrol-util/blob/50ea470/src/index.ts#L176)*

Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` teamID | `number` | 0 |  Team to stop the timer for; 1st team if none specified. |

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:8*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

