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
copyServer: buildServer
	mkdir backend && cp ../onboarding-backend/js/target/scala-3.4.1/app-fastopt/* backend/