<template>
  <div>
    <div>This is Dashboard</div>
    <div>
      <table>
        <tr>
          <th>No</th>
          <th>Country</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr v-for="country in loadCountry" :key="country.id">
          <td></td>
          <td>{{ country.name }}</td>
          <td>{{ country.status.status }}</td>
          <td>
            <button @click="updateData(country.id)">update</button>
            <button @click="deleteData(country.id)">delete</button>
          </td>
        </tr>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              v-for="(pageNo, id) in meta.last_page"
              :key="id"
              class="page-item"
            >
              <a class="page-link" type="button" @click="changeData(pageNo)">{{
                pageNo
              }}</a>
            </li>
            {{
              meta.last_page
            }}
          </ul>
        </nav>
      </table>
    </div>
    <button @click="handleLogOut">Log Out</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadCountry: {},
      loadLinks: [],
      serial: 1,
      pageNo: 1,
      totlaPage: 5,
      meta: [],
    };
  },

  methods: {
    // LogOut
    handleLogOut() {
      localStorage.setItem("access_token", "");
      this.$router.push("/logIn");
    },
    // Pagination
    async changeData(pageNumber) {
      try {
        const countryData = await this.axios.get(
          `http://192.168.0.132:8080/api/v1/country?page=${pageNumber}`
        );
        this.loadCountry = countryData.data.data;
        this.loadLinks = countryData.data.links;
        this.meta = countryData.data.meta;
        console.log("Load Country Data", this.loadCountry);
        console.log("Load Meta Data", countryData.data.meta);
      } catch (err) {
        console.log(err);
      }
    },
    // Update Data
    updateData(countryId) {
      this.$router.push(`/update/${countryId}`);
      // this.axios.post('http://192.168.0.132:8080/api/v1/country')
      // console.log("updateData CountryID", countryId);
      // let authorizeToken = {
      //   Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      // };
      // console.log("token befrore sending", authorizeToken);
      // this.axios
      //   .post(`http://192.168.0.132:8080/api/admin/country/${countryId}`, {
      //     headers: authorizeToken
      //   })
      //   .then((res) => {
      //     console.log("Hi I am response", res);
      // this.$router.push(`/update/:${countryId}`)
      // })
      // .catch((err) => {
      // console.log("Hi I'm error")
      //   console.log(err);
      // });

      // this.$swal.fire({
      //   position: "top-end",
      //   width: 300,
      //   customClass: "swal-height",
      //   icon: "success",
      //   title: "Your work has been saved",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    },
    // Delete Data
    deleteData(countryId) {
      console.log("Delete Data", countryId);
      // this.$swal('Delete!!!');
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          console.log(result);
          if (result.isConfirmed) {
            let header = {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            };
            let response = this.axios.delete(
              `http://192.168.0.132:8080/api/admin/delete/country/${countryId}`,
              { headers: header }
            );
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );

            response.then((result) => {
              console.log(result);
              this.changeData();
            });
          }
        });
      // this.axios.post('http://192.168.0.132:8080/api/v1/country',{countryId})
    },
  },
  created() {
    console.log("hi created");
    const token = localStorage.getItem("access_token");

    if (!token) {
      this.$router.push("/logIn");
    }

    const countryData = this.axios.get(
      "http://192.168.0.132:8080/api/v1/country?page=1"
    );
    countryData.then((countryData) => {
      this.loadCountry = countryData.data.data;
      this.loadLinks = countryData.data.links;
      this.meta = countryData.data.meta;
      console.log("Load Country Data", this.loadCountry);
      console.log("Load Link Data", this.loadLinks);
      console.log("Load Meta Data", countryData.data.meta);
    });
  },
};
</script>

<style>
.swal-height {
  height: 200px;
}
</style>