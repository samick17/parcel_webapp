MAKEFLAGS += --silent

build:
	npm run build

build-watch:
	pug -w src -o public --pretty

launch:
	npm start

analysis:
	npx parcel build public/index.html --reporter @parcel/reporter-bundle-analyzer

clean:
	rm -rf dist
