export interface TopicData {
    timestamp: number;
    payload: unknown; // Placeholder until cfg, status, data schemas provided
}

const DEFAULT_MACHINE_TOPIC_ROOT = 'machine';
const DEFAULT_BRIDGE_TOPIC_ROOT = 'bridge';
const DEFAULT_HMI_TOPIC_ROOT = 'hmi';

function sanitizeTopicSegment(value: string): string {
    return value
        .trim()
        .replace(/[^A-Za-z0-9_-]+/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');
}

export function normalizeMachineTopicId(machineId: string): string {
    const trimmedMachineId = machineId.trim();

    if (!trimmedMachineId) {
        throw new Error('machineId is required to build MQTT topic namespaces');
    }

    const trailingDigitsMatch = trimmedMachineId.match(/(\d+)$/);
    const normalizedValue = trailingDigitsMatch?.[1] ?? sanitizeTopicSegment(trimmedMachineId);

    if (!normalizedValue) {
        throw new Error(`Unable to normalize machineId for MQTT topics: ${machineId}`);
    }

    return normalizedValue;
}

export function getMachineTopicRoot(machineId: string): string {
    return `${DEFAULT_MACHINE_TOPIC_ROOT}_${normalizeMachineTopicId(machineId)}`;
}

export function getBridgeTopicRoot(machineId: string): string {
    return `${DEFAULT_BRIDGE_TOPIC_ROOT}_${normalizeMachineTopicId(machineId)}`;
}

export function getHmiTopicRoot(machineId: string): string {
    return `${DEFAULT_HMI_TOPIC_ROOT}_${normalizeMachineTopicId(machineId)}`;
}

export function joinTopicParts(...parts: Array<string | number | null | undefined>): string {
    return parts
        .filter((part): part is string | number => part !== null && part !== undefined && String(part).length > 0)
        .map((part) => String(part).replace(/^\/+|\/+$/g, ''))
        .filter(Boolean)
        .join('/');
}

export function getMachineTopic(machineId: string, ...parts: Array<string | number>): string {
    const topicRoot = machineId === DEFAULT_MACHINE_TOPIC_ROOT || machineId.startsWith(`${DEFAULT_MACHINE_TOPIC_ROOT}_`)
        ? machineId
        : getMachineTopicRoot(machineId);

    return joinTopicParts(topicRoot, ...parts);
}

export function getBridgeTopic(machineId: string, ...parts: Array<string | number>): string {
    const topicRoot = machineId === DEFAULT_BRIDGE_TOPIC_ROOT || machineId.startsWith(`${DEFAULT_BRIDGE_TOPIC_ROOT}_`)
        ? machineId
        : getBridgeTopicRoot(machineId);

    return joinTopicParts(topicRoot, ...parts);
}

export function getHmiTopic(machineId: string, ...parts: Array<string | number>): string {
    const topicRoot = machineId === DEFAULT_HMI_TOPIC_ROOT || machineId.startsWith(`${DEFAULT_HMI_TOPIC_ROOT}_`)
        ? machineId
        : getHmiTopicRoot(machineId);

    return joinTopicParts(topicRoot, ...parts);
}

export function getBridgeApiUpdateDeviceRoot(machineId: string): string {
    return getBridgeTopic(machineId, 'api', 'update_device');
}

export function getBridgeApiWriteTagTopic(machineId: string): string {
    return getBridgeTopic(machineId, 'api', 'write_tag');
}

export function getMqttTopics(machineId: string) {
    return {
        BRIDGE_STATUS: getBridgeTopic(machineId, 'status'),
        BRIDGE_CMD: getBridgeTopic(machineId, 'cmd'),
        BRIDGE_CACHE: getBridgeTopic(machineId, 'cache'),
        KIOSK_CONTROL: getBridgeTopic(machineId, 'control'),
        DEVICE_MAP: getBridgeTopic(machineId, 'deviceMap'),
        HMI_ACTION_REQ: getHmiTopic(machineId, 'action_req'),
        HMI_WRITE_RECIPE: getBridgeTopic(machineId, 'api', 'hmi_writes', 'recipe'),
        HMI_WRITE_JOB: getBridgeTopic(machineId, 'api', 'hmi_writes', 'job'),
        HMI_WRITE_ACTIVE_RECIPE_INDEX: getBridgeTopic(machineId, 'api', 'hmi_writes', 'active_recipe_index'),
        EXT_SERVICE: 'ext_service',
    } as const;
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