import { createService } from '$lib/service.js';
import { writable } from 'svelte/store';

// Create a writable store to hold the service reference
export const appBackend = writable(createService());