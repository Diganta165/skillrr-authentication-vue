<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <sign-in-component></sign-in-component>
    <sign-up-component></sign-up-component>
    <reset-pass-component></reset-pass-component> 
    <reset-otp></reset-otp> -->
    <div id="nav">
      <router-link to='/signIn'></router-link>
    <router-link to="/signUp"></router-link>
    <router-link to="/resetPass"></router-link>
    <router-link to="/resetPassOTP"></router-link>
    <router-link to="/dashboard"></router-link>

    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SignInComponent from './components/SignInComponent.vue'
// import SignUpComponent from './components/SignUpComponent.vue'
// import ResetPassComponent from './components/ResetPassword/ResetPassComponent.vue'
// import ResetPassOTPComponent from './components/ResetPassword/ResetPassOTPComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // SignInComponent,
    // SignUpComponent,
    // ResetPassComponent,
    // 'reset-otp':ResetPassOTPComponent
  }
}
</script>

<style>

</style>
