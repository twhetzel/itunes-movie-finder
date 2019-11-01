import React, { Component } from 'react';
import axios from 'axios';
import MovieGrid from '../MovieGrid';


const URL = 'https://itunes.apple.com/search?country=us&entity=movie&term=';

class MovieSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            movieName: '',
        }
        this.findMovies = this.findMovies.bind(this);
        this.testSearch = this.testSearch.bind(this);
    }

    async componentDidMount() {
        // this.findMovies();
        this.testSearch();
    }

    findMovies(searchTerm) {
        // FOR TESTING
        // let searchTerm = 'cars';

        // let searchValue = this.props.searchTerm;
        // if (searchValue !== undefined || searchValue != null) {
        //     console.log("** TS Props: ", searchValue);
        // }

        let searchURL = `${URL}${searchTerm}`
        console.log("** URL: ", searchURL);

        axios.get(searchURL).then(response => {
            const movieResults = response.data;
            console.log("** MR: ", movieResults);
            this.setState({ data: movieResults });
        })
    }

    testSearch = () => {
        console.log("** Called testSearch()...")

        let searchValue = this.props.searchTerm;
        if (searchValue !== undefined || searchValue != null) {
            console.log("** TS Props: ", searchValue);
            this.findMovies(searchValue);
        }
    }

    render() {
        const data = this.state;

        // this.testSearch();

        console.log("** ST Props: ", this.props.searchTerm);
        let searchValue = this.props.searchTerm;
        console.log("** SV: ", searchValue);

        // if (searchValue !== undefined || searchValue != null) {
        //     // { this.findMovies(searchValue) }
        //     this.testSearch();
        //     console.log("Search term FOUND!", searchValue);
        // }

        return (
            <MovieGrid data={data} />
        )
    }
}

export default MovieSearch;