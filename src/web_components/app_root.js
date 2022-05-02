class AppRoot extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <c-app-header></c-app-header>
        <div class="app_body">
            <c-sign-in-form></c-sign-in-form>
        </div>
        `;
    }

}

customElements.get('c-root') ||
customElements.define('c-root', AppRoot);
