<template>
  <div>
    <h1>This is Update</h1>
    <table>
      <tr>
        <th>No</th>
        <th>Country</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>{{}}</td>

        <!-- <form @submit.prevent="updateCountry"> -->
        <td><input v-model="singleCountryInfo.name" /></td>
        <td><input v-model="countryStatus" /></td>
        <td><button @click="updateCountry(singleCountryInfo)">Update</button></td>
        <!-- </form> -->

        <!-- {{singleCountryInfo}} -->
      </tr>
    </table>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  
  data() {
    return {
      // countryName: "",
      // countryName: this.$store.state.name,
      
      countryStatus: "",
      countryStatusCode: "",
      countryName : this.$store.state.loadUpdateCountry.name

      //   parameterId:''
      // countryName : country.name,
      // countryStatus : country.status.status
    };
  },
  computed:{
    singleCountryInfo(){
      return this.$store.getters['loadUpdateCountry/getCountry']
    }
  },
  methods: {
     loadCountryData(){
       console.log()
      //  const parameterId = this.$route.params.id;
      //  axios.get(`http://192.168.0.132:8080/api/admin/country/${parameterId}`)
      //  .then(res=>{
      //    console.log(res);
      //  })

       this.$store.commit('country/loadAllCountryLists');
      //  this.$store.commit('loadUpdateCountry/loadSingleCountry');
      
       

    },
     updateCountry(data) { 
      // this.countryName = this.$store.state.name;
    // console.log('This is country name on load data',this.countryName)
      // const parameterId = this.$route.params.id;
      // console.log("hiiiiii".this.singleCountryInfo)
      // let header = {
      //   Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      // };
      //  console.log(data)
      // console.log({ name: this.countryName, status: this.countryStatus });

      // await this.axios
      //   .post(
      //     `http://192.168.0.132:8080/api/admin/country/${parameterId}`,
      //     { name: this.countryName, status: this.countryStatusCode },
      //     { headers: header }
      //   )

      
      console.log(this.singleCountryInfo)
      // console.log(parameterId)
        this.$store.dispatch("update/updateCountryInfo", {data})

    

       
        .then((res) => {
          console.log('this is response',res)
          this.$swal.fire({
            position: "top-end",
            width: 300,
            customClass: "swal-height",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
            
          });

          this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          })
          ;
          this.test();

          this.$swal.fire({
            icon: "success",
            title: "Country successfully updated",
          });
          this.$router.push("/dashboard");
          this.loadCountryData();
        })
        .catch((err) => console.log(err.response));
    },
    

    async test() {
    let   name = await this.$store.state.country
       console.log(name)
    },
  },
  mounted() {
    const parameterId = this.$route.params.id;
    const countryResponse =this.$store.dispatch("loadUpdateCountry/loadSingleCountry",parameterId);
    console.log('this is country response', countryResponse)
    
    this.countryName = this.$store.state.loadUpdateCountry.name;
    console.log('This is country name on mounted',this.countryName)
    // let authorizedToken = {
    //             Authorization: `Bearer ${localStorage.getItem('access_token')}`
    //         }
    //         axios.get(`http://192.168.0.132:8080/api/admin/country/${parameterId}`,
    //         {headers:authorizedToken}
    //         )
    //         .then(res=>{
    //             console.log(res.data.data[0]);
    //             // state.name = res.data.data[0].name;
    //             this.countryName = res.data.data[0].name;
    //             this.countryStatus = res.data.data[0].status.status;
    //             console.log('state.name',this.countryName);
    //             console.log('state.name',this.countryStatus);


    //         }).catch(err=>{
    //             console.log(err)
    //         })
  },

  // mounted() {
  //   this.$store.dispatch("update/updateCountryInfo", this.$route.params.id);
  // return  this.test();
  // },
};
</script>

<style>
</style>