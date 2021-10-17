import axios from "axios"

export const update = {
    namespaced: true,
    state:{
        country:[],
        hasUpdated:false
    },
    getters:{

    },
    mutations:{
        async   updateCountryData(state,payload){
          console.log(payload)
            
            try {
              console.log('payload of updateCountry', payload);
             const {name,status} = payload.data
             console.log('heloo world '+name+status.status_code)
              //  let status = status.status_code;
                let headers = {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                };
                
                const countryData = await  axios.post(
                  // `http://192.168.0.132:8080/api/v1/country/${parameterId}`,{headers:authorizedToken}
                  `http://192.168.0.132:8080/api/admin/country/${payload.data.id}`,{name,status:status.status_code},
                  { headers }
                );
              
                
                state.country = countryData;
                state.hasUpdated = true
                 
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