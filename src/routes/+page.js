import { appBackend } from '$lib/stores/backend.js';

let service;

// Subscribe to the store
appBackend.subscribe(value => {
  service = value;
});

export async function load({ fetch }) {
    const allUsers = service.listUsers();

    console.log("allUsers", allUsers);

    return {
        service : service,
        users: allUsers
    };
}
