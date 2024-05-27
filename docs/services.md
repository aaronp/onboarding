[home](../README.md) [back](notes.md)
# Sharing services

The `createService` from the backend.js creates the services we need, but we have a preference for the front-end/javascript stuff to be done in a sympathetic way to the front-end framework where possible.

## Loading the correct backend service.

For active full-stack local development, I've created the [vite.config.js](./vite.config.js) contains aliases for where it can find the backend code:

```javascript
    $localbackend: path.resolve(__dirname, '../onboarding-backend/js/target/scala-3.4.1/app-fastopt'),
    $backend: path.resolve(__dirname, 'backend'),
```

Either the 'localBackend' or 'backend' is then used in `src/lib/service.js`.

We can create a new service at any time to experiment/test a page, or otherwise use a shared application-wide service.

## Using the data in a page

See [here](https://kit.svelte.dev/docs/load) for how we use +page.js

## Shared service
To share the same service across the application, we use [a svelte store](https://svelte.dev/docs/svelte-store) in [src/stores/backend.js](./src/stores/backend.js)


See [here](https://chatgpt.com/share/f647495c-24d8-401b-ad60-3b25ac063196) for where we followed svelte's use of stores.
