/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RunFinishTimes {
	[k: string]: Timer;
}
export interface Timer {
	time: string;
	state: 'stopped' | 'running' | 'paused' | 'finished';
	milliseconds: number;
	timestamp: number;
	teamFinishTimes: {
		[k: string]: {
			time: string;
			state: 'forfeit' | 'completed';
			milliseconds: number;
			timestamp: number;
		};
	};
}
