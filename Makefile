dev:
	npm run dev
build:
	npm run build
preview:
	npm run preview
link: build # used to reference this repo from the host app repo for local development
	npm link
storybook:
	npm run storybook
latestNode:
	sudo n latest
	nvm use node
buildServer:
	cd ../onboarding-backend && sbt "project appJS" fastLinkJS

# sets up our settings for publishing. Requires 'make build'
publish: setForGithubPages copyServer build 

clean:
	rm -rf dist && rm -rf build && rm -rf backend
	
setLocalDevelopment:
	./setLocalDevelopment.sh
setForGithubPages:
	./setForGithubPages.sh
# this takes a snapshot of the (assumed) peer backend project 
# the ./src/service.js should then also be updated to this import:
# import { createService } from '$backend/main.mjs';
copyServer: buildServer
	mkdir backend && cp ../onboarding-backend/js/target/scala-3.4.1/app-fastopt/* backend/
# Just takes a quick snapshot of our compiled backend js
# useful for local development
snapshot:
	cp ../onboarding-backend/js/target/scala-3.4.1/app-fastopt/* backend/