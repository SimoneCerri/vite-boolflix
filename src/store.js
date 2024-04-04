import { reactive } from 'vue';
import axios from "axios";

export const store = reactive
    ({
        search: "",
        ID: "25fe11ffdf5ce5a3da68cfa381752925",
        results:[],
        resultsTv:[],
        resultsFilm:[],
        noResultsErrTv:false,
        noResultsErrFilm: false,
        img_url: "https://image.tmdb.org/t/p/w92",

        callApi(ID, search) {
            axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.search}&api_key=${this.ID}`)
                .then(response => {
                    //console.log(response.data);
                    this.noResultsErrFilm = false;
                    if (response.data.total_results == 0)
                    {
                        this.noResultsErrFilm = true;
                    }
                    console.log(response.data.results);
                    this.resultsFilm = response.data.results
                    //#TO_DO: fix results, I stamp only first page
                    this.results = [...this.resultsFilm]
                })
            axios.get(`https://api.themoviedb.org/3/search/tv?query=${this.search}&api_key=${this.ID}`)
            .then(response => {
                console.log(response.data.results);
                this.noResultsErrTv = false;
                if (response.data.total_results == 0)
                {
                    this.noResultsErrTv = true;
                }
                this.resultsTv = response.data.results
                //#TO_DO: fix results, I stamp only first page
                this.results = [...this.resultsFilm,...this.resultsTv]
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.message)
                })
            axios.get(`${this.img_url}${this.result.poster_path}`)
            .then(response =>
                {
                    console.log("?");
                })
            //console.log(this.results);
        }
    })