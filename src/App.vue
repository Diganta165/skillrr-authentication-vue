<template>
  <div id="app">
    <div id="nav">
      <router-link to='/logIn'></router-link>
    <router-link to="/signUp"></router-link>
    <router-link to="/resetPass"></router-link>
    <router-link to="/resetPassOTP"></router-link>
    <router-link to="/dashboard"></router-link>

    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
