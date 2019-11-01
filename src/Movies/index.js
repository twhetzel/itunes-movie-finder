import React, { Component } from 'react';
import MovieSearch from '../MovieSearch';

// import MaterialTable from 'material-table';
// import { forwardRef } from 'react';

// import AddBox from '@material-ui/icons/AddBox';
// import ArrowUpward from '@material-ui/icons/ArrowUpward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';
import Grid from '@material-ui/core/Grid';
import { TextField, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles';

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };

// const URL = 'https://itunes.apple.com/search?country=us&entity=movie&term=';

const styles = theme => ({
    textField: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 350,
        verticalAlign: 'inherit',
    },
    publicationContainer: {
        paddingBottom: 32
    },
    noResultsTextStyle: {
        fontSize: 18,
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

    // tableRef = React.createRef();

    // Get text input value
    handleChange(event) {
        // this.setState({ value: event.target.value });
        // this.setState({ value: event.target.value, searchValue: event.target.value });
        this.setState({ value: event.target.value, isEnterKeyPress: false });
    }

    clearSearchInput = () => {
        // clear value
        this.setState({
            value: '',
            searchValue: '',
            isEnterKeyPress: false,
        })

        // refresh table
        // if (this.tableRef.current) {
        //     this.tableRef.current.onQueryChange();
        // }
    }
    render() {
        const { classes } = this.props;
        // const noResultsMessage = <span className={classes.noResultsTextStyle}>Sorry, we're not able to find this movie.</span>;

        let { searchValue } = this.state;
        let searchTextValue = searchValue.trim();
        console.log("--------\n** Trimmed STV: ", searchTextValue);

        return (
            <Container maxWidth="xl" className={classes.publicationContainer}>

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
                            placeholder="Search by Movie Title"
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
                                    // this.tableRef.current && this.tableRef.current.onQueryChange();
                                }
                            }}
                        />
                        <button label="Clear" onClick={this.clearSearchInput}> Clear </button>
                    </Grid>
                </Grid>

                {/* TEST */}
                {searchTextValue && this.state.isEnterKeyPress && (
                    <MovieSearch searchTerm={searchTextValue} />
                )}

                {/* {searchTextValue && (
                    <MaterialTable
                        tableRef={this.tableRef}
                        icons={tableIcons}
                        columns={[
                            {
                                title: 'Movie Image', field: 'artworkUrl100',
                                render: rowData => (
                                    <img
                                        style={{ height: 64 }}
                                        src={rowData.artworkUrl100}
                                        alt={'movie artwork'}
                                    />
                                ),
                            },
                            { title: 'Title', field: 'trackName', },
                            { title: 'Description', field: 'shortDescription' },
                            { title: 'Rental Price', field: 'trackRentalPrice' },
                        ]}
                        data={query =>
                            new Promise((resolve, reject) => {
                                // Re-set search page for new query
                                if (query.search !== searchTextValue) {
                                    query.page = 0
                                }

                                // Replace search text value in Query object with input from TextField
                                query.search = searchTextValue;

                                let url = URL + query.search;

                                // Handle search by Movie title
                                fetch(url)
                                    .then(response => response.json())
                                    .then(result => {
                                        resolve({
                                            data: result.results,
                                            page: 0,
                                            totalCount: result.resultCount,
                                        })
                                    }).catch(error => {
                                    })

                                setTimeout(() => {
                                    resolve({
                                        data: [],
                                        page: 0,
                                        totalCount: 0,
                                    });
                                }, 3000);
                            })
                        }
                        options={{
                            pageSize: 50,
                            pageSizeOptions: [50],
                            toolbar: false,
                        }}
                        localization={{
                            body: {
                                emptyDataSourceMessage: noResultsMessage
                            }
                        }}
                    />
                )} */}
            </Container>
        )
    }

}


Movies.propTypes = {
    classes: PropTypes.object.isRequired,
};
Movies = withStyles(styles)(Movies)

export default (Movies);