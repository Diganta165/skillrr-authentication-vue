import axios from 'axios'
export const country = {
    namespaced:true,
    state: {
        bookList: [1, 2, 3, 4],
        book: [1, 2, 3, 4],  
        isDeleted: false,
        countryLists: ''
    },
    getters: {
        bookCounter(state) {

            return state.bookList.filter(data => {
                return data < 4
            })

        }
    },
    mutations: {
      
        async deleteData(state, payload) {
            try {
                let header = {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                };

                let response = await axios.delete(
                    `http://192.168.0.132:8080/api/admin/delete/country/${payload.countryId}`,
                    { headers: header }
                );
                console.log('response from country.js', response)

                state.isDeleted = true;

                state.countryLists = response.data.data;
                // console.log("state.countryLists",state.countryLists)

            }
            catch (err) {
                console.log(err)
            }
        },


        async loadAllCountryLists(state, pageNumber = 1) {

            const data = await axios.get(
                `http://192.168.0.132:8080/api/v1/country?page=${pageNumber}`
            )
            state.countryLists = data.data.data;
            console.log(state.countryLists)
        }
    },
    actions: {
        userLogin(context, payload) {
            return context.commit('login', payload);
        },
        dashboardDataDelete(context, payload) {
            return context.commit('deleteData', payload);
        },
        getAllCountryList(context){
            return context.commit('loadAllCountryLists')
        }
    },


}