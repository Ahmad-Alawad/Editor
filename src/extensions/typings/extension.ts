import { Scene } from 'babylonjs';

import { IAssetComponent } from '../typings/asset';

/**
 * Interface representing an editor extension
 */
export interface IExtension<T> extends IAssetComponent {
    /**
     * Sets if the extensions is always applied
     */
    alwaysApply: boolean;

    /**
     * On apply the extension
     */
    onApply (data: T, rootUrl?: string): void;

    /**
     * Called by the editor when serializing the scene
     */
    onSerialize? (): T;

    /**
     * On load the extension (called by the editor when
     * loading a scene)
     */
    onLoad? (data: T): void;
}

// Exports a constructor type for an extension
export type ExtensionConstructor<T> = new (scene: Scene) => IExtension<T>;
