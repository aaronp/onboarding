// NOTE: change this to localbackend for local development
// import { createService } from '$localbackend/main.mjs';
//
import { createService } from '$backend/main.mjs';
//
// TODO - this *should* work using npm link, but it doesn't. Something like:
// import { createService } from 'main';
export { createService };