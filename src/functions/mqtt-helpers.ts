import { DeviceRegistration } from "../custom-types";

export function buildFullTopicPath(device: DeviceRegistration, deviceMap: Map<number, DeviceRegistration>): string {
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

    return 'machine/' + parts.join('/');
}