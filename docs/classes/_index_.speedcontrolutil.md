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
* [getNextRuns](_index_.speedcontrolutil.md#getnextruns)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SpeedcontrolUtil**(nodecg: *`NodeCG`*): [SpeedcontrolUtil](_index_.speedcontrolutil.md)

*Defined in [index.ts:56](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L56)*

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

*Defined in [index.ts:53](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L53)*

___
<a id="rundataactiverun"></a>

###  runDataActiveRun

**● runDataActiveRun**: *`Replicant`<[RunData](../interfaces/_index_.rundata.md) \| `undefined`>*

*Defined in [index.ts:55](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L55)*

___
<a id="rundataarray"></a>

###  runDataArray

**● runDataArray**: *`Replicant`<[RunData](../interfaces/_index_.rundata.md)[]>*

*Defined in [index.ts:54](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L54)*

___
<a id="timer"></a>

###  timer

**● timer**: *`Replicant`<[Timer](../interfaces/_index_.timer.md)>*

*Defined in [index.ts:56](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L56)*

___

## Methods

<a id="checkfortotalplayers"></a>

###  checkForTotalPlayers

▸ **checkForTotalPlayers**(run: *[RunData](../interfaces/_index_.rundata.md)*): `number`

*Defined in [index.ts:106](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L106)*

Gets the total amount of players in a specified run.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | [RunData](../interfaces/_index_.rundata.md) |  Run data object. |

**Returns:** `number`

___
<a id="findindexinrundataarray"></a>

###  findIndexInRunDataArray

▸ **findIndexInRunDataArray**(run?: *[RunData](../interfaces/_index_.rundata.md)*): `number`

*Defined in [index.ts:86](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L86)*

Find run data array index of current run based on it's ID.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` run | [RunData](../interfaces/_index_.rundata.md) |  Run data object. |

**Returns:** `number`

___
<a id="formplayernamesstring"></a>

###  formPlayerNamesString

▸ **formPlayerNamesString**(run: *[RunData](../interfaces/_index_.rundata.md)*): `string`

*Defined in [index.ts:116](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L116)*

Goes through each team and players and makes a string to show the names correctly together.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | [RunData](../interfaces/_index_.rundata.md) |  Run data object. |

**Returns:** `string`

___
<a id="getnextruns"></a>

###  getNextRuns

▸ **getNextRuns**(run: *[RunData](../interfaces/_index_.rundata.md)*, amount: *`number`*): [RunData](../interfaces/_index_.rundata.md)[]

*Defined in [index.ts:70](https://github.com/speedcontrol/speedcontrol-util/blob/2d9a800/index.ts#L70)*

Gets the next X runs in the schedule after the supplied run.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| run | [RunData](../interfaces/_index_.rundata.md) |  Run data object. |
| amount | `number` |  Maximum amount of runs to return. |

**Returns:** [RunData](../interfaces/_index_.rundata.md)[]

___

