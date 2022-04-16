MAKEFLAGS += --silent

build:
	npm run build

build-watch:
	pug -w template -o src --pretty

launch:
	npm start

analysis:
	npx parcel build public/index.html --reporter @parcel/reporter-bundle-analyzer

clean:
	rm -rf dist
