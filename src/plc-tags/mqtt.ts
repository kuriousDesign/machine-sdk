export interface TopicData {
    timestamp: number;
    payload: unknown; // Placeholder until cfg, status, data schemas provided
}

export const MqttTopics = {
    BRIDGE_STATUS: 'bridge/status',
    BRIDGE_CMD: 'bridge/cmd',
    BRIDGE_CACHE: 'bridge/cache',
    KIOSK_CONTROL: 'bridge/control',
    DEVICE_MAP: 'deviceMap',
    HMI_ACTION_REQ: 'hmi/action_req',
    HMI_WRITE_RECIPE: 'bridge/api/hmi_writes/recipe',
    HMI_WRITE_JOB: 'bridge/api/hmi_writes/job',
    HMI_WRITE_ACTIVE_RECIPE_INDEX: 'bridge/api/hmi_writes/active_recipe_index',
    EXT_SERVICE: 'ext_service',
} as const;