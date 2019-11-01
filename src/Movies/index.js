import React, { Component } from 'react';
import MovieSearch from '../MovieSearch';
import Grid from '@material-ui/core/Grid';
import { TextField, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 350,
        verticalAlign: 'inherit',
    },
    movieContainer: {
        paddingBottom: 32
    },
});

const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
                boxShadow: `${fade('#1976d2', 0.25)} 0 0 0 0.2rem`,
                borderColor: '#1976d2',
                border: '1px solid #ced4da',
            },
        },
    },
})(TextField);


class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            value: '',
            searchValue: '',
            isEnterKeyPress: false,
        });
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Get values from text input on each keypress and re-set 
     * isEnterKeyPress state so that the text value is not 
     * used in the search until pressing Enter.
     * @param {*} event 
     */
    handleChange(event) {
        this.setState({ value: event.target.value, isEnterKeyPress: false });
    }


    render() {
        const { classes } = this.props;
        let { searchValue } = this.state;
        let searchTextValue = searchValue.trim();

        return (
            <Container maxWidth="xl" className={classes.movieContainer}>

                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        <CssTextField
                            id="outlined-bare"
                            name="searchInput"
                            value={this.state.value}
                            className={classes.textField}
                            variant="outlined"
                            placeholder="Search..."
                            helperText="Enter movie title, e.g. Finding Nemo"

                            onChange={this.handleChange}

                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    this.setState({
                                        value: event.target.value,
                                        searchValue: event.target.value,
                                        isEnterKeyPress: true
                                    });
                                }
                            }}
                        />
                    </Grid>
                </Grid>

                {searchTextValue && this.state.isEnterKeyPress && (
                    <MovieSearch searchTerm={searchTextValue} />
                )}
            </Container>
        )
    }

}

Movies.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Movies);