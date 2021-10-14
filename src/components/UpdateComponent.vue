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
        <td><input v-model="countryName" /></td>
        <td><input v-model="countryStatus" /></td>
        <td><button @click="updateCountry">Update</button></td>
        <!-- </form> -->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countryName: "",
      countryStatus: "",
      countryStatusCode: "",

      //   parameterId:''
      // countryName : country.name,
      // countryStatus : country.status.status
    };
  },
  methods: {
    async updateCountry() {
      const parameterId = this.$route.params.id;
      let header = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      };
      //  console.log(data)
      console.log({ name: this.countryName, status: this.countryStatus });

      await this.axios
        .post(
          `http://192.168.0.132:8080/api/admin/country/${parameterId}`,
          { name: this.countryName, status: this.countryStatusCode },
          { headers: header }
        )
        .then(() => {
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
          });

          this.$swal.fire({
            icon: "success",
            title: "Country successfully updated",
          });
          this.$router.push("/dashboard");
        })
        .catch((err) => console.log(err.response));
    },

    async test() {
    let   name = await this.$store.state.country
       console.log(name)
    },
  },

  mounted() {
    this.$store.dispatch("update/updateCountryInfo", this.$route.params.id);
  return  this.test();
  },
};
</script>

<style>
</style>