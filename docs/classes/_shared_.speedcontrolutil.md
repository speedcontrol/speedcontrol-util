[speedcontrol-util](../README.md) › [Globals](../globals.md) › ["shared"](../modules/_shared_.md) › [SpeedcontrolUtil](_shared_.speedcontrolutil.md)

# Class: SpeedcontrolUtil

## Hierarchy

* EventEmitter

  ↳ **SpeedcontrolUtil**

  ↳ [SpeedcontrolUtil](_server_.speedcontrolutil.md)

## Index

### Properties

* [defaultMaxListeners](_shared_.speedcontrolutil.md#static-defaultmaxlisteners)

### Methods

* [addListener](_shared_.speedcontrolutil.md#addlistener)
* [emit](_shared_.speedcontrolutil.md#emit)
* [eventNames](_shared_.speedcontrolutil.md#eventnames)
* [getMaxListeners](_shared_.speedcontrolutil.md#getmaxlisteners)
* [listenerCount](_shared_.speedcontrolutil.md#listenercount)
* [listeners](_shared_.speedcontrolutil.md#listeners)
* [off](_shared_.speedcontrolutil.md#off)
* [on](_shared_.speedcontrolutil.md#on)
* [once](_shared_.speedcontrolutil.md#once)
* [prependListener](_shared_.speedcontrolutil.md#prependlistener)
* [prependOnceListener](_shared_.speedcontrolutil.md#prependoncelistener)
* [rawListeners](_shared_.speedcontrolutil.md#rawlisteners)
* [removeAllListeners](_shared_.speedcontrolutil.md#removealllisteners)
* [removeListener](_shared_.speedcontrolutil.md#removelistener)
* [setMaxListeners](_shared_.speedcontrolutil.md#setmaxlisteners)
* [formPlayerNamesStr](_shared_.speedcontrolutil.md#static-formplayernamesstr)
* [getRunTotalPlayers](_shared_.speedcontrolutil.md#static-getruntotalplayers)
* [listenerCount](_shared_.speedcontrolutil.md#static-listenercount)

## Properties

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

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

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

*Overrides void*

Defined in src/shared.ts:5

**Parameters:**

▪ **event**: *"timerStarted"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerResumed", `listener`: function): *this*

*Overrides void*

Defined in src/shared.ts:6

**Parameters:**

▪ **event**: *"timerResumed"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerPaused", `listener`: function): *this*

*Overrides void*

Defined in src/shared.ts:7

**Parameters:**

▪ **event**: *"timerPaused"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerStopped", `listener`: function): *this*

*Overrides void*

Defined in src/shared.ts:8

**Parameters:**

▪ **event**: *"timerStopped"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerReset", `listener`: function): *this*

*Overrides void*

Defined in src/shared.ts:9

**Parameters:**

▪ **event**: *"timerReset"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerEdited", `listener`: function): *this*

*Overrides void*

Defined in src/shared.ts:10

**Parameters:**

▪ **event**: *"timerEdited"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "timerTeamStopped", `listener`: function): *this*

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

### `Static` formPlayerNamesStr

▸ **formPlayerNamesStr**(`runData`: RunData): *string*

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
