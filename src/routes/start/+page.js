import { appBackend } from '$lib/stores/backend.js';

let service;

// Subscribe to the store
appBackend.subscribe(value => {
  service = value;
});

export async function load({ fetch }) {
    return {
        assets: [
            { 'label': 'Private Fund', 'value': 'Private Fund' },
            { 'label': 'Bond', 'value': 'Bond' },
            { 'label': 'Stock', 'value': 'Stock' },
            { 'label': 'Mutual Fund', 'value': 'Mutual Fund' },
            { 'label': 'ETF', 'value': 'ETF' }
        ]
    };
}
