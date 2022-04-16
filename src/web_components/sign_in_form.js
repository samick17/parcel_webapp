class SignInFormElement extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="form_wrapper">
      <div class="form">
        <div class="form_item">
          SignIn
        </div>
        <div class="form_item">
          <input placeholder='ID or Email'/>
        </div>
        <div class="form_item">
          <input placeholder='Password' type='password'/>
        </div>
        <!-- div class="form_item">
          <input placeholder='Password Confirm' type='password'/>
        </div -->
        <div class="form_item">
          <button role='signin' disabled='true'>SignIn</button>
        </div>
      </div>
    </div>`;
    const data = {
      id: '',
      pwd: '',
    };

    // console.log(this.querySelector('.form .form_item:nth-child(2) input'));
    const nameRef = this.querySelector('.form .form_item:nth-child(2) input');
    nameRef.addEventListener('keyup', (e) => {
      updateSubmitStatus();
    });
    // console.log(this.querySelector('.form .form_item:nth-child(3) input'));
    const pwdRef = this.querySelector('.form .form_item:nth-child(3) input');
    pwdRef.addEventListener('keyup', (e) => {
      updateSubmitStatus();
    });

    const signInRef = this.querySelector('button[role="signin"]');
    signInRef.addEventListener('click', () => {
      console.log('SignIn', nameRef.value, pwdRef.value);
    });
    function canSubmit() {
      return !!nameRef.value && !!pwdRef.value;
    }
    function updateSubmitStatus() {
      if(canSubmit()) {
        signInRef.removeAttribute('disabled');
      } else {
        signInRef.setAttribute('disabled', 'true');
      }
      // console.log(!canSubmit());
      // signInRef.setAttribute('disabled', (!canSubmit()).toString());
    }
    
  }

}

customElements.get('c-sign-in-form') ||
customElements.define('c-sign-in-form', SignInFormElement);
