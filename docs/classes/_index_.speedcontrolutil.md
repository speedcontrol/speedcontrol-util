**[speedcontrol-util](../README.md)**

[Globals](../globals.md) › ["index"](../modules/_index_.md) › [SpeedcontrolUtil](_index_.speedcontrolutil.md)

# Class: SpeedcontrolUtil

## Hierarchy

* EventEmitter

  * **SpeedcontrolUtil**

## Index

### Constructors

* [constructor](_index_.speedcontrolutil.md#constructor)

### Properties

* [nodecg](_index_.speedcontrolutil.md#private-nodecg)
* [runDataActiveRun](_index_.speedcontrolutil.md#rundataactiverun)
* [runDataActiveRunSurrounding](_index_.speedcontrolutil.md#rundataactiverunsurrounding)
* [runDataArray](_index_.speedcontrolutil.md#rundataarray)
* [sendMessage](_index_.speedcontrolutil.md#sendmessage)
* [timer](_index_.speedcontrolutil.md#timer)
* [timerChangesDisabled](_index_.speedcontrolutil.md#timerchangesdisabled)
* [defaultMaxListeners](_index_.speedcontrolutil.md#static-defaultmaxlisteners)

### Methods

* [addListener](_index_.speedcontrolutil.md#addlistener)
* [disableTimerChanges](_index_.speedcontrolutil.md#disabletimerchanges)
* [emit](_index_.speedcontrolutil.md#emit)
* [enableTimerChanges](_index_.speedcontrolutil.md#enabletimerchanges)
* [eventNames](_index_.speedcontrolutil.md#eventnames)
* [findRunIndex](_index_.speedcontrolutil.md#findrunindex)
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
* [formPlayerNamesStr](_index_.speedcontrolutil.md#static-formplayernamesstr)
* [getRunTotalPlayers](_index_.speedcontrolutil.md#static-getruntotalplayers)
* [listenerCount](_index_.speedcontrolutil.md#static-listenercount)

## Constructors

###  constructor

\+ **new SpeedcontrolUtil**(`nodecg`: NodeCG): *[SpeedcontrolUtil](_index_.speedcontrolutil.md)*

*Defined in [index.ts:30](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`nodecg` | NodeCG |

**Returns:** *[SpeedcontrolUtil](_index_.speedcontrolutil.md)*

## Properties

### `Private` nodecg

• **nodecg**: *NodeCG*

*Defined in [index.ts:24](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L24)*

___

###  runDataActiveRun

• **runDataActiveRun**: *Replicant‹RunDataActiveRun›*

*Defined in [index.ts:26](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L26)*

___

###  runDataActiveRunSurrounding

• **runDataActiveRunSurrounding**: *Replicant‹RunDataActiveRunSurrounding›*

*Defined in [index.ts:27](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L27)*

___

###  runDataArray

• **runDataArray**: *Replicant‹RunDataArray›*

*Defined in [index.ts:25](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L25)*

___

###  sendMessage

• **sendMessage**: *SendMessage*

*Defined in [index.ts:29](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L29)*

___

###  timer

• **timer**: *Replicant‹Timer›*

*Defined in [index.ts:28](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L28)*

___

###  timerChangesDisabled

• **timerChangesDisabled**: *Replicant‹TimerChangesDisabled›*

*Defined in [index.ts:30](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L30)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:8

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:10

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  disableTimerChanges

▸ **disableTimerChanges**(): *void*

*Defined in [index.ts:183](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L183)*

Prevent the nodecg-speedcontrol timer from being changed.

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  enableTimerChanges

▸ **enableTimerChanges**(): *void*

*Defined in [index.ts:190](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L190)*

Allow the nodecg-speedcontrol timer to be changed.

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:23

**Returns:** *Array‹string | symbol›*

___

###  findRunIndex

▸ **findRunIndex**(`arg?`: RunData | string | null): *number*

*Defined in [index.ts:122](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L122)*

Attempt to find a run in the run data array from it's ID.
Will return -1 if it cannot be found.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg?` | RunData \| string \| null | Can either be a run data object or a unique ID string.  |

**Returns:** *number*

___

###  getCurrentRun

▸ **getCurrentRun**(): *RunDataActiveRun*

*Defined in [index.ts:94](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L94)*

Returns the currently active run data object.

**Returns:** *RunDataActiveRun*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:19

**Returns:** *number*

___

###  getNextRuns

▸ **getNextRuns**(`amount`: number, `run?`: RunData | null): *RunData[]*

*Defined in [index.ts:111](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L111)*

Gets the next X runs in the schedule after the supplied run,
or after the currently active run if possible.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`amount` | number | 4 | Maximum amount of runs to return, defaults to 4. |
`run?` | RunData \| null | - | Run data object, will return runs after this one if supplied.  |

**Returns:** *RunData[]*

___

###  getRunDataArray

▸ **getRunDataArray**(): *RunDataArray*

*Defined in [index.ts:101](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L101)*

Returns the array of runs.

**Returns:** *RunDataArray*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:16

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: "timerStarted", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:10](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L10)*

**Parameters:**

▪ **event**: *"timerStarted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerResumed", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:11](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L11)*

**Parameters:**

▪ **event**: *"timerResumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerPaused", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:12](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L12)*

**Parameters:**

▪ **event**: *"timerPaused"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerStopped", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:13](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L13)*

**Parameters:**

▪ **event**: *"timerStopped"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerReset", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:14](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L14)*

**Parameters:**

▪ **event**: *"timerReset"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerEdited", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:15](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L15)*

**Parameters:**

▪ **event**: *"timerEdited"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerTeamStopped", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:16](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L16)*

**Parameters:**

▪ **event**: *"timerTeamStopped"*

▪ **listener**: *function*

▸ (`id`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *this*

▸ **on**(`event`: "timerTeamStopUndone", `listener`: function): *this*

*Overrides void*

*Defined in [index.ts:17](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L17)*

**Parameters:**

▪ **event**: *"timerTeamStopUndone"*

▪ **listener**: *function*

▸ (`id`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *this*

▸ **on**(`event`: string, `listener`: Function): *this*

*Overrides void*

*Defined in [index.ts:19](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:12

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:13

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:14

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:15

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  resetTimer

▸ **resetTimer**(): *void*

*Defined in [index.ts:176](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L176)*

Resets the nodecg-speedcontrol timer.

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  startTimer

▸ **startTimer**(): *void*

*Defined in [index.ts:153](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L153)*

Starts the nodecg-speedcontrol timer.

**Returns:** *void*

___

###  stopTimer

▸ **stopTimer**(`teamIndex`: number): *void*

*Defined in [index.ts:161](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L161)*

Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`teamIndex` | number | 0 | Index of team to stop the timer for; 1st team if none specified.  |

**Returns:** *void*

___

### `Static` formPlayerNamesStr

▸ **formPlayerNamesStr**(`run`: RunData): *string*

*Defined in [index.ts:144](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L144)*

Goes through each team and players and makes a string to show the names correctly together.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`run` | RunData | Run data object.  |

**Returns:** *string*

___

### `Static` getRunTotalPlayers

▸ **getRunTotalPlayers**(`run`: RunData): *number*

*Defined in [index.ts:134](https://github.com/speedcontrol/speedcontrol-util/blob/d21d312/src/index.ts#L134)*

Gets the total amount of players in a specified run.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`run` | RunData | Run data object.  |

**Returns:** *number*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in C:/Dev Stuff/GitHub Repos/speedcontrol-util/node_modules/@types/node/events.d.ts:7

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** *number*