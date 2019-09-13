import React, { Component } from 'react';
import SeriesItem from './SeriesItem';
import { List } from 'immutable';
import { Grid, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
});

class SeriesList extends Component {

    render() {
        const { classes } = this.props;
        const { seriesList, categories, onCategoryChange } = this.props;
        return (
            <div className={classes.root} >
                <Grid container>
                    {seriesList.map(series => (
                        <Grid item xs key={series.get('id')}>
                            <SeriesItem
                                key={series.get('id')}
                                series={series}
                                categories={categories}
                                onCategoryChange={onCategoryChange}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}
SeriesList.defaultProps = {
    seriesList: List()
}


export default withStyles(styles)(SeriesList);