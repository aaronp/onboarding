// NOTE: change this to localbackend for local development
//
// ======  FOR BACKEND DEV ====== 
// in this case we're making backend changes and want that
// immediate feedback in the UI
//
// import { createService } from '$localbackend/main.mjs';
//
//
// ====== FOR FRONTEND DEV (e.g. front-end changes) ======
// in this case the backend is stable and just a lot quicker
// than spinning up services:
//
// import { createService } from '$backend/main.mjs';
//
// ====== FOR PRODUCT ======
// in this case we'll still include a backend main.mjs,
// it'll just call REST endpoints, etc
//
// this is relatively trivial, but still TODO
//
import { createService } from '$localbackend/main.mjs';
//
// TODO - this *should* work using npm link, but it doesn't. Something like:
// import { createService } from 'main';
export { createService };
