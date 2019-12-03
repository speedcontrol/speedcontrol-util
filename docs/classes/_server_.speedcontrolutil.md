[speedcontrol-util](../README.md) › [Globals](../globals.md) › ["server"](../modules/_server_.md) › [SpeedcontrolUtil](_server_.speedcontrolutil.md)

# Class: SpeedcontrolUtil

## Hierarchy

  ↳ [SpeedcontrolUtil](_shared_.speedcontrolutil.md)

  ↳ **SpeedcontrolUtil**

## Index

### Constructors

* [constructor](_server_.speedcontrolutil.md#constructor)

### Properties

* [runDataActiveRun](_server_.speedcontrolutil.md#rundataactiverun)
* [runDataActiveRunSurrounding](_server_.speedcontrolutil.md#rundataactiverunsurrounding)
* [runDataArray](_server_.speedcontrolutil.md#rundataarray)
* [runFinishTimes](_server_.speedcontrolutil.md#runfinishtimes)
* [sendMessage](_server_.speedcontrolutil.md#sendmessage)
* [timer](_server_.speedcontrolutil.md#timer)
* [timerChangesDisabled](_server_.speedcontrolutil.md#timerchangesdisabled)
* [defaultMaxListeners](_server_.speedcontrolutil.md#static-defaultmaxlisteners)

### Methods

* [addListener](_server_.speedcontrolutil.md#addlistener)
* [disableTimerChanges](_server_.speedcontrolutil.md#disabletimerchanges)
* [emit](_server_.speedcontrolutil.md#emit)
* [enableTimerChanges](_server_.speedcontrolutil.md#enabletimerchanges)
* [eventNames](_server_.speedcontrolutil.md#eventnames)
* [findRunIndex](_server_.speedcontrolutil.md#findrunindex)
* [getCurrentRun](_server_.speedcontrolutil.md#getcurrentrun)
* [getMaxListeners](_server_.speedcontrolutil.md#getmaxlisteners)
* [getNextRuns](_server_.speedcontrolutil.md#getnextruns)
* [getRunDataArray](_server_.speedcontrolutil.md#getrundataarray)
* [listenerCount](_server_.speedcontrolutil.md#listenercount)
* [listeners](_server_.speedcontrolutil.md#listeners)
* [off](_server_.speedcontrolutil.md#off)
* [on](_server_.speedcontrolutil.md#on)
* [once](_server_.speedcontrolutil.md#once)
* [prependListener](_server_.speedcontrolutil.md#prependlistener)
* [prependOnceListener](_server_.speedcontrolutil.md#prependoncelistener)
* [rawListeners](_server_.speedcontrolutil.md#rawlisteners)
* [removeAllListeners](_server_.speedcontrolutil.md#removealllisteners)
* [removeListener](_server_.speedcontrolutil.md#removelistener)
* [resetTimer](_server_.speedcontrolutil.md#resettimer)
* [setMaxListeners](_server_.speedcontrolutil.md#setmaxlisteners)
* [startTimer](_server_.speedcontrolutil.md#starttimer)
* [startTwitchCommercial](_server_.speedcontrolutil.md#starttwitchcommercial)
* [stopTimer](_server_.speedcontrolutil.md#stoptimer)
* [formPlayerNamesStr](_server_.speedcontrolutil.md#static-formplayernamesstr)
* [getRunTotalPlayers](_server_.speedcontrolutil.md#static-getruntotalplayers)
* [listenerCount](_server_.speedcontrolutil.md#static-listenercount)

## Constructors

###  constructor

\+ **new SpeedcontrolUtil**(`nodecg`: NodeCGServer): *[SpeedcontrolUtil](_server_.speedcontrolutil.md)*

Defined in src/server.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`nodecg` | NodeCGServer |

**Returns:** *[SpeedcontrolUtil](_server_.speedcontrolutil.md)*

## Properties

###  runDataActiveRun

• **runDataActiveRun**: *ReplicantServer‹RunDataActiveRun›*

Defined in src/server.ts:12

___

###  runDataActiveRunSurrounding

• **runDataActiveRunSurrounding**: *ReplicantServer‹RunDataActiveRunSurrounding›*

Defined in src/server.ts:13

___

###  runDataArray

• **runDataArray**: *ReplicantServer‹RunDataArray›*

Defined in src/server.ts:11

___

###  runFinishTimes

• **runFinishTimes**: *ReplicantServer‹RunFinishTimes›*

Defined in src/server.ts:15

___

###  sendMessage

• **sendMessage**: *SendMessage*

Defined in src/server.ts:17

___

###  timer

• **timer**: *ReplicantServer‹Timer›*

Defined in src/server.ts:14

___

###  timerChangesDisabled

• **timerChangesDisabled**: *ReplicantServer‹TimerChangesDisabled›*

Defined in src/server.ts:16

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

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

Defined in src/server.ts:151

Prevent the nodecg-speedcontrol timer from being changed.

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  enableTimerChanges

▸ **enableTimerChanges**(): *void*

Defined in src/server.ts:158

Allow the nodecg-speedcontrol timer to be changed.

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  findRunIndex

▸ **findRunIndex**(`arg?`: RunData | string | null): *number*

Defined in src/server.ts:109

Attempt to find a run in the run data array from it's ID.
Will return -1 if it cannot be found.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg?` | RunData &#124; string &#124; null | Can either be a run data object or a unique ID string.  |

**Returns:** *number*

___

###  getCurrentRun

▸ **getCurrentRun**(): *RunDataActiveRun*

Defined in src/server.ts:81

Returns the currently active run data object.

**Returns:** *RunDataActiveRun*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getNextRuns

▸ **getNextRuns**(`amount`: number, `run?`: RunData | null): *RunData[]*

Defined in src/server.ts:98

Gets the next X runs in the schedule after the supplied run,
or after the currently active run if possible.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`amount` | number | 4 | Maximum amount of runs to return, defaults to 4. |
`run?` | RunData &#124; null | - | Run data object, will return runs after this one if supplied.  |

**Returns:** *RunData[]*

___

###  getRunDataArray

▸ **getRunDataArray**(): *RunDataArray*

Defined in src/server.ts:88

Returns the array of runs.

**Returns:** *RunDataArray*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

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

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:5

**Parameters:**

▪ **event**: *"timerStarted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerResumed", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:6

**Parameters:**

▪ **event**: *"timerResumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerPaused", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:7

**Parameters:**

▪ **event**: *"timerPaused"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerStopped", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:8

**Parameters:**

▪ **event**: *"timerStopped"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerReset", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:9

**Parameters:**

▪ **event**: *"timerReset"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerEdited", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:10

**Parameters:**

▪ **event**: *"timerEdited"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerTeamStopped", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:11

**Parameters:**

▪ **event**: *"timerTeamStopped"*

▪ **listener**: *function*

▸ (`id`: string, `forfeit`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`forfeit` | boolean |

**Returns:** *this*

▸ **on**(`event`: "timerTeamUndone", `listener`: function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:12

**Parameters:**

▪ **event**: *"timerTeamUndone"*

▪ **listener**: *function*

▸ (`id`: string, `forfeit`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`forfeit` | boolean |

**Returns:** *this*

▸ **on**(`event`: string, `listener`: Function): *this*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[on](_shared_.speedcontrolutil.md#on)*

*Overrides void*

Defined in src/shared.ts:14

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

Defined in node_modules/@types/node/events.d.ts:22

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

Defined in node_modules/@types/node/events.d.ts:23

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

Defined in node_modules/@types/node/events.d.ts:24

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

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

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

▸ **resetTimer**(): *Promise‹void›*

Defined in src/server.ts:144

Resets the nodecg-speedcontrol timer.

**Returns:** *Promise‹void›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  startTimer

▸ **startTimer**(): *Promise‹void›*

Defined in src/server.ts:120

Starts the nodecg-speedcontrol timer.

**Returns:** *Promise‹void›*

___

###  startTwitchCommercial

▸ **startTwitchCommercial**(): *Promise‹object›*

Defined in src/server.ts:165

Attempts to start a Twitch commercial on the set channel in the bundle.

**Returns:** *Promise‹object›*

___

###  stopTimer

▸ **stopTimer**(`teamIndex`: number): *Promise‹void›*

Defined in src/server.ts:129

Stops the nodecg-speedcontrol timer for the specified team index,
or the 1st team if none specified.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`teamIndex` | number | 0 | Index of team to stop the timer for, defaults to 1st (0).  |

**Returns:** *Promise‹void›*

___

### `Static` formPlayerNamesStr

▸ **formPlayerNamesStr**(`runData`: RunData): *string*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[formPlayerNamesStr](_shared_.speedcontrolutil.md#static-formplayernamesstr)*

Defined in src/shared.ts:22

Takes a run data object and returns a formed string of the player names.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`runData` | RunData | Run Data object.  |

**Returns:** *string*

___

### `Static` getRunTotalPlayers

▸ **getRunTotalPlayers**(`runData`: RunData): *number*

*Inherited from [SpeedcontrolUtil](_shared_.speedcontrolutil.md).[getRunTotalPlayers](_shared_.speedcontrolutil.md#static-getruntotalplayers)*

Defined in src/shared.ts:32

Gets the total amount of players in a specified run.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`runData` | RunData | Run data object.  |

**Returns:** *number*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
