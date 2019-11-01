import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
        maxHeight: 280,
        minHeight: 280,
    },
    media: {
        height: 140,
    },
});


class MovieGrid extends Component {
    constructor(props) {
        super(props)

        this.renderResults = this.renderResults.bind(this);
        this.getRentalPrice = this.getRentalPrice.bind(this);
    }

    getRentalPrice(price) {
        return price ? '$' + price : 'Unavailable';
    }

    renderResults = () => {
        const { classes } = this.props;
        const { data } = this.props;
        let searchResults = data.data.results;

        if (searchResults !== undefined) {
            return (
                <div className={classes.root}>
                    <Container>
                        <Grid container spacing={3}
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            {searchResults.map((result, index) => {
                                return (
                                    <Grid key={index} item xs={6} sm={3}>
                                        <Card className={classes.card}>
                                            {/* <CardActionArea> */}
                                            <CardMedia
                                                className={classes.media}
                                                image={result.artworkUrl100.replace('100x100', '1200x1200')}
                                                title={result.trackName}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {result.trackName}
                                                </Typography>
                                                <Typography noWrap variant="body2" color="textSecondary" component="p">
                                                    {result.shortDescription}
                                                </Typography>
                                            </CardContent>
                                            {/* </CardActionArea> */}
                                            <CardActions>
                                                <Typography>
                                                    {this.getRentalPrice(result.trackRentalPrice)}
                                                </Typography>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Container>
                </div>
            )
        }
    }

    render() {
        const { data } = this.props;
        const dataDisplay = this.renderResults();

        return (
            <Fragment>
                {dataDisplay}
            </Fragment>
        )
    }
}
export default withStyles(styles)(MovieGrid);