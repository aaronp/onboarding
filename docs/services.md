[home](../README.md) [back](notes.md)
# Sharing services

The `createService` from the backend.js creates the services we need, but we have a preference for the front-end/javascript stuff to be done in a sympathetic way to the front-end framework where possible.

## Loading the correct backend service.

**Note:** We provide "convenience scripts" in the form of `make setForGithubPages` and `make setLocalDevelopment` for switching between local and production (deployment) settings.


All that does is change where the 'backend.js' is loaded from.

### How it was designed to work

The [backend server code](https://github.com/aaronp/onboarding-backend) is compiled to javascript and included alongside this project.

That gives us rapid full-stack development for when we're making server-side changes alongside
our front-end, assuming we've laid our our working directory like this:

```
 -+ working dir
  |
  +- onboarding <-- this repo
  |
  +- onboarding-backend <-- the backend, running `sbt "project appJS" ~fastLinkJS`
```

We control where the `backend.js` file comes from via [src/lib/service.js](./src/lib/service.js), which uses aliases set up in [vite.config.js](./vite.config.js):

```javascript
    $localbackend: path.resolve(__dirname, '../onboarding-backend/js/target/scala-3.4.1/app-fastopt'),
    $backend: path.resolve(__dirname, 'backend'),
```

## Using the data in a page

See [here](https://kit.svelte.dev/docs/load) for how we use +page.js

## Shared service
To share the same service across the application, we use [a svelte store](https://svelte.dev/docs/svelte-store) in [src/stores/backend.js](./src/stores/backend.js)


See [here](https://chatgpt.com/share/f647495c-24d8-401b-ad60-3b25ac063196) for where we followed svelte's use of stores.
