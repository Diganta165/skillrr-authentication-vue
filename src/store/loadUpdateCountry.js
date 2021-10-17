
import axios from 'axios'
export const  loadUpdateCountry = {
    namespaced: true,
    state:{
        name:'',
        status:'',
        country:{}
    },
    getters:{
        getCountry(state){
            return state.country
        }
    },
    mutations:{
        loadCountry(state,payload){
            state.country = payload
           
        }
    },
    actions:{
  async  loadSingleCountry(context, payload){

        let authorizedToken = {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
        axios.get(`http://192.168.0.132:8080/api/admin/country/${payload}`,
        {headers:authorizedToken}
        )
        .then(res=>{
            console.log(res.data.data[0]);
            // state.name = res.data.data[0].name;
            // state.status = res.data.data[0].status.status;
            // console.log('state.name',state.name)

            return context.commit("loadCountry",res.data.data[0]);

        }).catch(err=>{
            console.log(err)
        })

       
    }
    }
}