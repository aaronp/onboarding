import { appBackend } from '$lib/stores/backend.js';

let service;

// Subscribe to the store
appBackend.subscribe(value => {
  service = value;
});

export async function load({ fetch }) {

    return {
        users: [
            { 'label': 'Aaron', 'value' : 'Aaron' },
            { 'label': 'Georgina', 'value' : 'Georgina' },
            { 'label': 'Eleanor', 'value' : 'Eleanor' },
            { 'label': 'Jayne', 'value' : 'Jayne' }
        ]
    };
}
