import React from 'react';
import { Range } from 'immutable';
import { Link } from 'react-router-dom';
import { Button, withStyles, Grid } from '@material-ui/core';

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

const PageButton = ({ page, limit }) => {
    return (
        <Grid item>
            <Link to={`series?page=${page}&limit=${limit}`}>{page}</Link>
        </Grid>


    )
}

const Pagination = ({ page, lastPage, classes, limit }) => {

    const startCurrentPage = Math.max(Math.ceil(page / 10 - 1) * 10, 1);
    const lastCurrentPage = Math.min(Math.ceil(page / 10) * 10 + 1, lastPage);
    const range = Range(startCurrentPage, lastCurrentPage + 1);
    return (

        <div className={classes.root} >
            <div>
                <p>현재 {page} 페이지, 전체 {lastPage} 페이지</p>
            </div>
            <Grid container spacing={3}>

                {
                    range.map(value => (
                        <PageButton
                            key={value}
                            page={value}
                            limit={limit} />
                    ))
                }


            </Grid>
        </div>

    )

}
export default withStyles(styles)(Pagination); 