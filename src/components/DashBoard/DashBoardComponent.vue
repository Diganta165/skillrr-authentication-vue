<template>
  <div>
    <div>This is Dashboard</div>
    <button @click="handleLogOut">Log Out</button>
  </div>
</template>

<script>
// import {mount} from '@vue/test-utils'
export default {



methods:{
  handleLogOut(){
    localStorage.setItem('access_token', '');
    this.$router.push('/logIn')
  }
},
  mounted(){
               
            const token = localStorage.getItem('access_token')

            if(!token){this.$router.push('/logIn')}             
        
        
       
  },
}
</script>

<style>

</style>