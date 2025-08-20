export interface TopicData {
    timestamp: number;
    payload: unknown; // Placeholder until cfg, status, data schemas provided
}

export const MqttTopics = {
    BRIDGE_STATUS: 'bridge/status',
} as const;
