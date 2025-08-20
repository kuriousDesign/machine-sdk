export interface TopicData {
    timestamp: number;
    payload: unknown; // Placeholder until cfg, status, data schemas provided
}

export const MqttTopics = {
    BRIDGE_STATUS: 'bridge/status',
    BRIDGE_CMD: 'bridge/cmd',
    DEVICE_MAP: 'deviceMap',
} as const;


export const BridgeCmds = {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect'
} as const;