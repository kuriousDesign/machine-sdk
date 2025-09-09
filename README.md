# adding new opcua tags
don't forget that tags need to start with lowercase


# npm install @kuriousdesign/machine-sdk
A shared SDK for data types and helper functions used in machine-related repositories.

# Publishing to npm
first, commit you git changes
npm login (if not already)
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
npm publish


# Installation
npm install @kuriousdesign/machine-sdk@latest

Usage
import { Machine, formatTimestamp, isMachineActive } from '@kuriousdesign/machine-sdk';

// Example: Machine data
const machine: Machine = {
  id: 'M001',
  name: 'Conveyor',
  status: 'running',
  lastUpdated: new Date()
};

// Format timestamp
console.log(formatTimestamp(machine.lastUpdated)); // e.g., "2025-08-15T22:23:00.000Z"

// Check if machine is active
console.log(isMachineActive(machine)); // true

API
Data Types

Machine: Represents a machine with id, name, status, and lastUpdated.
SensorData: Represents sensor readings with machineId, temperature, pressure, and timestamp.

Helper Functions

formatTimestamp(date: Date): string: Formats a Date to ISO string.
isMachineActive(machine: Machine): boolean: Checks if a machine is running.
calculateAverageTemperature(data: SensorData[]): number: Computes average temperature.
validateMachineId(id: string): boolean: Validates a machine ID format.

License
MIT