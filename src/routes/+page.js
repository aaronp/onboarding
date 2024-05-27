import { appBackend, currentUser } from '$lib/stores/backend.js';

let service;

// Subscribe to the store
appBackend.subscribe(value => {
  service = value;
});

export async function load({ fetch }) {
    const allUsers = service.listUsers();

    return {
        service : service,
        currentUser: currentUser,
        users: allUsers
    };
}
