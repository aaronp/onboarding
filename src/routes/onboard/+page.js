import { appBackend } from '$lib/stores/backend.js';

let service;

// Subscribe to the store
appBackend.subscribe(value => {
  service = value;
});

export async function load({ fetch }) {
    const products = service.listCategories();
    return {
        products
    };
}
