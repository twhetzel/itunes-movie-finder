import React, { Component } from 'react';
import axios from 'axios';
import MovieGrid from '../MovieGrid';


const URL = 'https://itunes.apple.com/search?country=us&entity=movie&term=';

class MovieSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
        this.findMovies = this.findMovies.bind(this);
    }

    async componentDidMount() {
        this.findMovies();
    }

    findMovies(searchTerm) {
        searchTerm = 'cars';
        let searchURL = `${URL}${searchTerm}`
        console.log("** ST: ", searchURL);

        axios.get(searchURL).then(response => {
            const movieResults = response.data;
            console.log("** MR: ", movieResults);
            this.setState({ data: movieResults });
        })
    }

    render() {
        const data = this.state;

        return (
            <MovieGrid data={data} />
        )
    }
}

export default MovieSearch;