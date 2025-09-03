export enum BridgeCmds {
    NONE = 1,
    CONNECT = 2,
    DISCONNECT = 3
}

export interface BridgeData {
    connectedClients: number[];
}