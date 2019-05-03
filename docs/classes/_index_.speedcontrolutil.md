[speedcontrol-util](../README.md) > ["index"](../modules/_index_.md) > [SpeedcontrolUtil](../classes/_index_.speedcontrolutil.md)

# Class: SpeedcontrolUtil

## Hierarchy

**SpeedcontrolUtil**

## Index

### Constructors

* [constructor](_index_.speedcontrolutil.md#constructor)

### Properties

* [nodecgContext](_index_.speedcontrolutil.md#nodecgcontext)
* [runDataActiveRun](_index_.speedcontrolutil.md#rundataactiverun)
* [runDataArray](_index_.speedcontrolutil.md#rundataarray)
* [timer](_index_.speedcontrolutil.md#timer)

### Methods

* [checkForTotalPlayers](_index_.speedcontrolutil.md#checkfortotalplayers)
* [findIndexInRunDataArray](_index_.speedcontrolutil.md#findindexinrundataarray)
* [formPlayerNamesString](_index_.speedcontrolutil.md#formplayernamesstring)
* [getCurrentRun](_index_.speedcontrolutil.md#getcurrentrun)
* [getNextRuns](_index_.speedcontrolutil.md#getnextruns)
* [getRunDataArray](_index_.speedcontrolutil.md#getrundataarray)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SpeedcontrolUtil**(nodecg: *`NodeCG`*): [SpeedcontrolUtil](_index_.speedcontrolutil.md)

*Defined in [index.ts:56](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L56)*

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

*Defined in [index.ts:53](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L53)*

___
<a id="rundataactiverun"></a>

###  runDataActiveRun

**● runDataActiveRun**: *`Replicant`<[RunData](../interfaces/_index_.rundata.md) \| `undefined`>*

*Defined in [index.ts:55](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L55)*

___
<a id="rundataarray"></a>

###  runDataArray

**● runDataArray**: *`Replicant`<[RunData](../interfaces/_index_.rundata.md)[]>*

*Defined in [index.ts:54](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L54)*

___
<a id="timer"></a>

###  timer

**● timer**: *`Replicant`<[Timer](../interfaces/_index_.timer.md)>*

*Defined in [index.ts:56](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L56)*

___

## Methods

<a id="checkfortotalplayers"></a>

###  checkForTotalPlayers

▸ **checkForTotalPlayers**(run: *[RunData](../interfaces/_index_.rundata.md)*): `number`

*Defined in [index.ts:121](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L121)*

Gets the total amount of players in a specified run.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | [RunData](../interfaces/_index_.rundata.md) |  Run data object. |

**Returns:** `number`

___
<a id="findindexinrundataarray"></a>

###  findIndexInRunDataArray

▸ **findIndexInRunDataArray**(run?: *[RunData](../interfaces/_index_.rundata.md) \| `undefined`*): `number`

*Defined in [index.ts:101](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L101)*

Find run data array index of current run based on it's ID.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` run | [RunData](../interfaces/_index_.rundata.md) \| `undefined` |  this.getCurrentRun() |  Run data object, defaults to current run. |

**Returns:** `number`

___
<a id="formplayernamesstring"></a>

###  formPlayerNamesString

▸ **formPlayerNamesString**(run: *[RunData](../interfaces/_index_.rundata.md)*): `string`

*Defined in [index.ts:131](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L131)*

Goes through each team and players and makes a string to show the names correctly together.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | [RunData](../interfaces/_index_.rundata.md) |  Run data object. |

**Returns:** `string`

___
<a id="getcurrentrun"></a>

###  getCurrentRun

▸ **getCurrentRun**(): [RunData](../interfaces/_index_.rundata.md) \| `undefined`

*Defined in [index.ts:68](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L68)*

Returns the currently active run data object.

**Returns:** [RunData](../interfaces/_index_.rundata.md) \| `undefined`

___
<a id="getnextruns"></a>

###  getNextRuns

▸ **getNextRuns**(amount?: *`number`*, run?: *[RunData](../interfaces/_index_.rundata.md) \| `undefined`*): [RunData](../interfaces/_index_.rundata.md)[]

*Defined in [index.ts:85](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L85)*

Gets the next X runs in the schedule after the supplied run.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` amount | `number` | 4 |  Maximum amount of runs to return, defaults to 4. |
| `Default value` run | [RunData](../interfaces/_index_.rundata.md) \| `undefined` |  this.getCurrentRun() |  Run data object, defaults to current run. |

**Returns:** [RunData](../interfaces/_index_.rundata.md)[]

___
<a id="getrundataarray"></a>

###  getRunDataArray

▸ **getRunDataArray**(): [RunData](../interfaces/_index_.rundata.md)[]

*Defined in [index.ts:75](https://github.com/speedcontrol/speedcontrol-util/blob/1603e07/index.ts#L75)*

Returns the array of runs.

**Returns:** [RunData](../interfaces/_index_.rundata.md)[]

___

