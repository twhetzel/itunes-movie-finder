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
    }

    async componentDidMount() {
        this.findMovies();
    }

    findMovies = () => {
        let searchValue = this.props.searchTerm;

        if (searchValue !== undefined || searchValue != null) {
            let searchURL = `${URL}${searchValue}`

            axios.get(searchURL).then(response => {
                const movieResults = response.data;
                this.setState({ data: movieResults });
            })
        }
    }

    render() {
        const data = this.state;

        return (
            <MovieGrid data={data} />
        )
    }
}

export default MovieSearch;