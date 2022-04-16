# CodeBase of web app (Parcel)

## To development

 - make build-watch
 - make launch

## Steps - React

1. Install React Modules

```shell=
npm i react react-dom --save
```

2. Create app entry point

src/app_react.js
```javascript
import ReactDOM from 'react-dom/client';
import Entry from './react_components/Entry';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Entry/>);

```

3. Create Entry.jsx

src/react_components/Entry.jsx

```jsx
import React from 'react';

class AppComponent extends React.Component {

  render() {
    return <React.Fragment>
      <div className='app_header'/>
      <div className='app_body'>
        <div>asdf</div>
      </div>
    </React.Fragment>
  }

}

export default AppComponent;
```

4. Change the index.pug or index.html

index.pug
```pug
doctype! html
html(lang='en')
    head
        meta(charset='utf-8')
        title App1
        link(rel='stylesheet' href='styles.css')
        script(type='module' src='app_react.js')
    body
        #root
```

## Steps

1. Create the project

```shell=
cd ~/Desktop
mkdir parcel_webapp
```

2. Initialize the node project

```shell=
cd parcel_webapp
npm init
```

3. Install parcel devDeps

```shell=
npm i parcel \
    @parcel/core \
    @parcel/compressor-brotli \
    @parcel/compressor-gzip \
    @parcel/reporter-bundle-analyzer \
    -D
```

4. Added source/browserlist/scripts to package.json

package.json
```json
{
  "name": "parcel_webapp",
  "version": "1.0.0",
  "description": "",
  "source": "public/index.html",
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "author": "",
  "license": "",
  "devDependencies": {
    "@parcel/compressor-brotli": "^2.4.1",
    "@parcel/compressor-gzip": "^2.4.1",
    "@parcel/core": "^2.4.1",
    "@parcel/reporter-bundle-analyzer": "^2.4.1",
    "parcel": "^2.4.1"
  }
}
```

5. Create the index page (I use src/index.pug)

src/index.pug
```pug
doctype! html
html
    head
        meta(charset='utf-8')
    body
        div App
```

6. Makefile

Makefile
```
MAKEFLAGS += --silent

build:
    npx parcel build public/index.html

build-index:
    pug -w src -o public --pretty

launch:
    npx parcel ./public/index.html

analysis:
    npx parcel build public/index.html --reporter @parcel/reporter-bundle-analyzer

```

7. .gitignore

.gitignore
```
.DS_Store
.parcel-cache
dist
node_modules
parcel-bundle-reports
package-lock.json
public/index.html
```

## Reference

 - https://parceljs.org/getting-started/webapp/
 - https://parceljs.org/features/development/
 - https://parceljs.org/features/production/
