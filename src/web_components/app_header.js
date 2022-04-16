class AppHeader extends HTMLElement {

	connectedCallback() {
    	this.innerHTML = `<div class="app_header">
    		<div class="app_title">App Title</div>
    	</div>`;
	}

}

customElements.get('c-app-header') ||
customElements.define('c-app-header', AppHeader);
