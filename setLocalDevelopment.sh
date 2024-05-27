#!/usr/bin/env bash

cat << 'EOF' > ./src/lib/service.js
// NOTE: toggle this to localbackend for local development
// see setLocalDevelopment.sh (or make setLocalDevelopment)
//
// import { createService } from '$backend/main.mjs';
import { createService } from '$localbackend/main.mjs';

export { createService };
EOF
