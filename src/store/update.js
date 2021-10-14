import axios from "axios"

export const update = {
    namespaced: true,
    state:{
        country:{}
    },
    getters:{

    },
    mutations:{
        async   updateCountryData(state,payload){
            console.log('payload of updateCountry', payload)
            try {

               
                let authorizedToken = {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                };
          
                const countryData = await  axios.get(
                  // `http://192.168.0.132:8080/api/v1/country/${parameterId}`,{headers:authorizedToken}
                  `http://192.168.0.132:8080/api/admin/country/${payload}`,
                  { headers: authorizedToken }
                );
                console.log("This is Country Data", countryData.data.data[0].id);
                state.country = countryData.data.data[0];
                console.log('data of state.country',state.country)
                 
              } catch (err) {
                console.log(err.response);
              }
        }
    },
    actions:{
    updateCountryInfo(context,payload){
        console.log('Payload inside updateCountryInfo', payload)
        return context.commit('updateCountryData',payload)
    }
    }
}