MAKEFLAGS += --silent

build:
	npx parcel build public/index.html

build-index:
	pug -w src -o public --pretty

launch:
	npx parcel ./public/index.html

analysis:
	npx parcel build public/index.html --reporter @parcel/reporter-bundle-analyzer
