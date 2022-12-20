/// <reference types="node" />
import { RakunMono, Void } from "rakun";
import { EventEmitter } from "events";
import { Deferred } from "../utils/promise-delegate";
import { ZoldyStoreState } from "../types";
export type GetParams = {
    path: string;
    get: () => RakunMono<any>;
};
export type SetParams = {
    path: string;
    value: any;
};
export interface ZoldySnapshot {
    eventEmitter: EventEmitter;
    parent: ZoldySnapshot | null;
    getCacheState(path: string): RakunMono<ZoldyStoreState>;
    reset(path: string): RakunMono<typeof Void>;
    getState(params: GetParams): RakunMono<ZoldyStoreState>;
    set({ path, value }: SetParams): RakunMono<typeof Void>;
    subscribe(path: string, callback: (value: ZoldyStoreState) => void): RakunMono<() => RakunMono<typeof Void>>;
}
export interface ZoldyStoreStates {
    [path: string]: ZoldyStoreState;
}
export type ZoldyStoreEvents = [string, ZoldyStoreState][];
export type EventType = "reset" | "set" | "addDependency";
export type Events = {
    type: "reset";
    params: {
        path: string;
    };
    deferred: Deferred<typeof Void>;
} | {
    type: "set";
    params: {
        path: string;
        value: any;
    };
    deferred: Deferred<typeof Void>;
} | {
    type: "addDependency";
    params: {
        path: string;
        dependency: string;
    };
    deferred: Deferred<typeof Void>;
};
export type EventChanges = {
    <TEvent extends Events>(type: TEvent['type'], params: TEvent['params']): RakunMono<TEvent['deferred'] extends Deferred<infer D> ? D : never>;
};
export type EventChangesProcess = {
    <TEvent extends Events>(event: TEvent): void;
};
export type EE = Parameters<EventChanges>[0];
export interface ZoldyStore {
    setEvents(events: ZoldyStoreEvents): void;
    getEvents(): ZoldyStoreEvents;
    set(path: string, value: any): void;
    reset(path: string): void;
    addDependency(path: string, dependency: string): void;
    states: ZoldyStoreStates;
    events: ZoldyStoreEvents;
    getState(path: string): ZoldyStoreState;
    hasDependency(path: string, dependency: string): boolean;
    getDependencies(path: string): string[];
    setDependency(path: string, dependencies: string[]): void;
}
