import { DeviceRegistration } from "../custom-types";
import { getMachineTopicRoot } from "../plc-tags/mqtt";

export function buildFullTopicPath(
    device: DeviceRegistration,
    deviceMap: Map<number, DeviceRegistration>,
    machineId?: string,
): string {
    const parts: number[] = [];
    let current: DeviceRegistration | undefined = device;

    while (current) {
        parts.unshift(current.id);

        if (!current.parentId || current.parentId === 0) break;

        const parent = deviceMap.get(current.parentId);
        if (!parent) {
            console.warn(`Parent device missing for device ${current.id}, parentId: ${current.parentId}`);
            break;
        }
        current = parent;
    }

    const topicRoot = machineId ? getMachineTopicRoot(machineId) : 'machine';

    return `${topicRoot}/${parts.join('/')}`;
}