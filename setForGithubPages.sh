#!/usr/bin/env bash

cat << 'EOF' > ./src/service.js
// NOTE: toggle this to localbackend for local development
// see ./setForGithubPages.sh (or make setForGithubPages) 
// import { createService } from '$localbackend/main.mjs';
import { createService } from '$backend/main.mjs';

export { createService };
EOF
