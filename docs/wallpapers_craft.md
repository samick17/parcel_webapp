# Sample project - wallpaperscraft

## WebSite

 - https://wallpapaerscraft.com

## Dump the data by js

```javascript
(() => {
	const items = [];
	const list = document.querySelector('.wallpapers__list');
	for(let i = 0; i < list.children.length; i++) {
		let child = list.children[i];
		let item = {
			thumbnail: child.querySelector('img').getAttribute('src'),
			resolution: child.querySelector('.wallpapers__info').innerText.split('\n')[1],
			rating: child.querySelector('.wallpapers__info-rating').innerText.trim(),
			downloads: parseInt(child.querySelector('.wallpapers__info-downloads').innerText),
			tags: child.querySelector('.wallpapers__info:nth-child(3)').innerText.split(', '),
		};
		items.push(item);
	}
	console.log(JSON.stringify(items, null, '  '));
})();
````
