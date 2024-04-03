import { reactive } from 'vue';
import axios from "axios";

export const store = reactive
    ({
        search: "",
        ID: "25fe11ffdf5ce5a3da68cfa381752925",
        results:[],

        callApi(ID, search) {
            console.log(this.search, this.ID);

            axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.search}&api_key=${this.ID}`)
                .then(response => {
                    //console.log(response.data);
                    console.log(response.data.results);
                    this.results = response.data.results
                })
                .catch(err => {
                    console.error(err.message)
                })
        }
    })