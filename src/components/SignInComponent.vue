<template>
  <div>
    <div class="skiller_sign_in_area d_flex align_center justify_center">
      <div class="skiller_sign_in_wrapper">
        <div class="skiller_form_heading txt_center pb37">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="20"
            viewBox="0 0 86 20"
          >
            <g id="Logo" transform="translate(-245.504 -40.704)">
              <path
                id="Dot"
                d="M3.384.216A2.686,2.686,0,0,1,1.44-.552,2.593,2.593,0,0,1,.648-2.5a2.564,2.564,0,0,1,.78-1.944,2.722,2.722,0,0,1,1.956-.744,2.711,2.711,0,0,1,1.968.744A2.585,2.585,0,0,1,6.12-2.5,2.613,2.613,0,0,1,5.34-.552,2.675,2.675,0,0,1,3.384.216Z"
                transform="translate(325.384 60.368)"
                fill="#2ecc71"
              />
              <path
                id="Text"
                d="M7.618.7A15.405,15.405,0,0,1,3.639.191,9.719,9.719,0,0,1,.5-1.179l1.568-3.57A10.079,10.079,0,0,0,4.7-3.526a9.881,9.881,0,0,0,2.942.465q2.749,0,2.749-1.394a1.153,1.153,0,0,0-.784-1.088,14.266,14.266,0,0,0-2.52-.746A23.8,23.8,0,0,1,3.9-7.181,5.357,5.357,0,0,1,1.71-8.709a4.166,4.166,0,0,1-.916-2.836,4.958,4.958,0,0,1,.844-2.824,5.661,5.661,0,0,1,2.52-1.993A10.248,10.248,0,0,1,8.269-17.1a14.315,14.315,0,0,1,3.28.379A9.962,9.962,0,0,1,14.395-15.6L12.924-12.01a9.725,9.725,0,0,0-4.678-1.32,3.878,3.878,0,0,0-2.074.428A1.286,1.286,0,0,0,5.52-11.79a1.1,1.1,0,0,0,.772,1.027,13.807,13.807,0,0,0,2.484.709,23.021,23.021,0,0,1,3.2.892,5.515,5.515,0,0,1,2.195,1.516,4.084,4.084,0,0,1,.928,2.824,4.861,4.861,0,0,1-.844,2.787A5.766,5.766,0,0,1,11.718-.042,10.119,10.119,0,0,1,7.618.7ZM23-4.284,21.654-2.89V.362H17.072V-17.78h4.582v9.511l4.678-4.621h5.426L26.332-7.218,32.216.362H26.67ZM33.567-12.89h4.582V.362H33.567Zm2.291-1.467a2.876,2.876,0,0,1-2.026-.709,2.294,2.294,0,0,1-.772-1.76,2.294,2.294,0,0,1,.772-1.76,2.876,2.876,0,0,1,2.026-.709,2.973,2.973,0,0,1,2.026.672,2.183,2.183,0,0,1,.772,1.724,2.386,2.386,0,0,1-.772,1.822A2.847,2.847,0,0,1,35.858-14.357Zm5.257-3.423H45.7V.362H41.115Zm7.548,0h4.582V.362H48.663ZM69.572-6.24q0,.049-.072,1.149H60a2.7,2.7,0,0,0,1.121,1.577,3.705,3.705,0,0,0,2.086.55,4.46,4.46,0,0,0,1.628-.269,4.793,4.793,0,0,0,1.387-.88L68.631-1.57A7.049,7.049,0,0,1,63.06.582,8.792,8.792,0,0,1,59.033-.3a6.516,6.516,0,0,1-2.689-2.445,6.681,6.681,0,0,1-.953-3.545A6.7,6.7,0,0,1,56.32-9.8a6.524,6.524,0,0,1,2.568-2.433,7.677,7.677,0,0,1,3.69-.88,7.632,7.632,0,0,1,3.545.819,6.18,6.18,0,0,1,2.52,2.372A7.036,7.036,0,0,1,69.572-6.24ZM62.6-9.809A2.624,2.624,0,0,0,60.83-9.2a2.77,2.77,0,0,0-.9,1.663h5.354a2.77,2.77,0,0,0-.9-1.663A2.624,2.624,0,0,0,62.6-9.809ZM76.059-11.3a4.269,4.269,0,0,1,1.821-1.357,6.823,6.823,0,0,1,2.568-.452v4.181A9.242,9.242,0,0,0,79.411-9a3.169,3.169,0,0,0-2.3.807,3.3,3.3,0,0,0-.832,2.469V.362H71.694V-12.89h4.365Z"
                transform="translate(245 60)"
              />
            </g>
          </svg>
        </div>
        <div class="skiller_form_wrapper">
          <div class="skiller_form_title txt_center pb30">
            <p>Sign In</p>
            {{ totolBookInState }}
            <!-- {{getBookLists}} -- Totla Book {{totalBook}} -->
          </div>
          <form action="" @submit.prevent="handleInput()" class="skiller_form">
            <label class="skiller_type_mail mb20">
              <input
                type="text"
                placeholder="Email"
                v-model="email"
                required
                @blur="validateEmail"
                @focus="clearEmailError"
              />
              <p v-if="hasEmail">
                <span style="color: red">Invalid Email</span>
              </p>
              <p v-if="msg">
                <span class="error-message">{{ msg }} <br /></span>
              </p>
            </label>
            <label class="skiller_type_pass mb10">
              <input :type="type" placeholder="Password" v-model="password" />

              <p v-if="hasPassword">
                <span style="color: red">Invalid Password <br /><br /></span>
              </p>
              <span @click="showPassword">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12.457"
                  viewBox="0 0 16 12.457"
                >
                  <path
                    id="Eye"
                    d="M-4114.515-444.4a3.273,3.273,0,0,1,0-3.44,8.824,8.824,0,0,1,7.511-4.508,8.825,8.825,0,0,1,7.512,4.508,3.275,3.275,0,0,1,0,3.44,8.824,8.824,0,0,1-7.512,4.509A8.823,8.823,0,0,1-4114.515-444.4Zm1.136-2.742a1.943,1.943,0,0,0,0,2.045,7.539,7.539,0,0,0,6.375,3.872,7.537,7.537,0,0,0,6.374-3.872,1.941,1.941,0,0,0,0-2.045,7.531,7.531,0,0,0-6.374-3.872A7.539,7.539,0,0,0-4113.379-447.139Zm3.042,1.022a3.333,3.333,0,0,1,3.333-3.332,3.337,3.337,0,0,1,3.333,3.332,3.333,3.333,0,0,1-3.333,3.333A3.333,3.333,0,0,1-4110.336-446.117Zm1.333,0a2,2,0,0,0,2,2,2,2,0,0,0,2-2,2,2,0,0,0-2-2A2,2,0,0,0-4109-446.117Z"
                    transform="translate(4115.004 452.345)"
                    fill="#1e272e"
                  />
                </svg>
              </span>
            </label>
            <p id="forgot_pass" class="mb20">
              <router-link to="/resetPass">Forgot Password?</router-link>
            </p>
            <p style="color: red">{{ loginErrors }}</p>

            <button class="sign_in_btn mb30">Sign In</button>
          </form>
          <div class="skiller_sign_in_bottom pt20 txt_center">
            <p>
              Don’t have an account.?
              <router-link to="/signUp">Sign Up</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      type: "password",
      error: "",
      loginError:'',
      hasEmail: false,
      hasPassword: false,
      msg: "",
      totalBook: this.$store.state.bookList,
    };
  },

  methods: {
    clearEmailError() {
      this.msg = "";
    },
    validateEmail() {
      if (!this.email.length == 0) {
        //eslint-disable-next-line
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.msg = "Please enter a valid email address";
        } else {
          this.msg = "";
        }
      }
    },
    hasUserLoggedIn() {
      let loggedData = this.$store.state.login.userData;
  // console.log(loggedData="user Data");
      if (loggedData.length > 0) {
        localStorage.setItem("access_token", loggedData);
        this.$router.push("/dashboard");
      } else {
        // console.log(this.$store.state.loginError)
        this.error = this.$store.state.login.loginError;
      }
    },
    handleInput() {
      if (!this.email) {
        this.hasEmail = true;
      }
      if (!this.password) {
        this.hasPassword = true;
      }

      if (this.email && this.password && !this.msg) {
        //login statement herere

        this.$store.dispatch("login/userLogin", {email: this.email, password: this.password});

      return  this.hasUserLoggedIn();
      }
    },
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },

  computed: {
    getBookLists() {
      return this.$store.state.bookList;
    },
    totolBookInState() {
      return this.$store.getters.bookCounter;
    },
    loginErrors(){
      return this.$store.state.loginError;

    }
  },
};
</script>

<style>
.error-message {
  color: red;
}
</style>