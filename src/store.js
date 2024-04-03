import { reactive } from 'vue';
import axios from "axios";

export const store = reactive
    ({
        search: "",
        ID: "25fe11ffdf5ce5a3da68cfa381752925",
        results:[],
        resultsTv:[],
        resultsFilm:[],

        callApi(ID, search) {
            axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.search}&api_key=${this.ID}`)
                .then(response => {
                    //console.log(response.data);
                    //@TODO: fix results, I stamp only first page
                    console.log(response.data.results);
                    this.resultsFilm = response.data.results
                    this.results = [...this.resultsFilm]
                })
            axios.get(`https://api.themoviedb.org/3/search/tv?query=${this.search}&api_key=${this.ID}`)
            .then(response => {
                console.log(response.data.results);
                this.resultsTv = response.data.results
                this.results = [...this.resultsFilm,...this.resultsTv]

                })
                .catch(err => {
                    console.error(err.message)
                })
            /* this.results = [...this.resultsTv, ...this.resultsFilm] */
            /* this.results.concat(this.resultsFilm,this.resultsTv) */
            console.log(this.results);
        }
    })