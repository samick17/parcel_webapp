import './web_components';

function renderRoot(querySelector, tagName) {
	const root = document.querySelector(querySelector);
	const rootElement = document.createElement(tagName);
	root.append(rootElement);
}

(() => {
	window.addEventListener('load', () => {
		renderRoot('#root', 'c-root');
	});
})();
