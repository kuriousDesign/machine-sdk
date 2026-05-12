export enum BridgeCmds {
    NONE = 1,
    CONNECT = 2,
    DISCONNECT = 3,
    GET_CACHE = 4,
}

export interface BridgeData {
    connectedClients: number[];
}

export interface KioskControlData {
    controlMode?: string;
    isControlled?: boolean;
    allowedKioskIds?: string[];
}

export const initialKioskControlData: KioskControlData = {
    controlMode: "kiosk",
    isControlled: false,
    allowedKioskIds: [],
};