console.log('App Loaded!');

if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
  });
}

class SignInFormElement extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="form_wrapper">
      <div class="form">
        <div class="form_item">
          SignIn
        </div>
        <div class="form_item">
          <input role='name' placeholder='ID or Email'/>
        </div>
        <div class="form_item">
          <input role='password' placeholder='Password' type='password'/>
        </div>
        <div class="form_item">
          <button role='signin'>SignIn</button>
        </div>
      </div>
    </div>`;
    const nameRef = this.querySelector('input[role="name"]');
    console.log(nameRef);
    nameRef.addEventListener('keyup', (e) => {
      console.log('[Name]', e.target.value);
    });
    const pwdRef = this.querySelector('input[role="password"]');
    console.log(pwdRef);
    pwdRef.addEventListener('keyup', (e) => {
      console.log('[PWD]', e.target.value);
    });
    /**/
    const signInRef = this.querySelector('button[role="signin"]');
    signInRef.addEventListener('click', (e) => {
      const id = nameRef.value;
      const pwd = pwdRef.value;
      // TODO HTTP Request
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', (e) => {
        console.log('-readystatechange-', xhr.readyState);
        if(xhr.readyState === XMLHttpRequest.DONE) {
          console.log('Done!');
          console.log(e, xhr);
        }
      });
      const payload = JSON.stringify({
        id: id,
        pwd: pwd,
      });
      xhr.open('POST', 'http://localhost:8000/api/v1/signin');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(payload);
      // console.log('[SignIn]', nameRef.value, pwdRef.value);
    });
  }

}
window.customElements.define('c-sign-in-form', SignInFormElement);
