import React, { Component } from 'react';
import SeriesCategoryList from './SeriesCategoryList';
import { Map } from 'immutable';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    card: {
      width: 300
     },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class SeriesItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addCategories: Map(),
            deleteCategories: Map()
        }
    }

    onAdd = ({ title, id }) => {
        if (this.state.deleteCategories.has(id)) {
            this.setState({
                addCategories: this.state.addCategories,
                deleteCategories: this.state.deleteCategories.remove(id)
            }, () => this.onComplete());
        } else {
            this.setState({
                addCategories: this.state.addCategories.set(id, title),
                deleteCategories: this.state.deleteCategories
            }, () => this.onComplete());
        }

    }
    onDelete = ({ title, id }) => {
        if (this.state.addCategories.has(id)) {
            this.setState({
                addCategories: this.state.addCategories.remove(id),
                deleteCategories: this.state.deleteCategories
            }, () => this.onComplete());
        } else {
            this.setState({
                addCategories: this.state.addCategories,
                deleteCategories: this.state.deleteCategories.set(id, title)
            }, () => this.onComplete());
        }
    }

    onComplete = () => {
        const { onCategoryChange, series } = this.props;
        const addCategories = this.state.addCategories;
        const deleteCategories = this.state.deleteCategories;
        const id = series.get('id');

        onCategoryChange({
            addCategories, deleteCategories, id
        })
    }

    render() {

    const { classes } = this.props;
        const { series, categories } = this.props;
        return (
            <Card className={classes.card}>
                 <CardContent>
                 <div>
                    <p>{series.get('id')}</p>
                </div>
                <div>
                    <p>{series.get('title')}</p>
                </div>
                <div>
                    <Typography>{series.get('description')}</Typography>
                </div>
                <div>
                    <img src={series.get('thumbnail')} />
                </div>
                <div>
                    <SeriesCategoryList
                        allCategories={categories}
                        categories={series.get('categories')}
                        onAdd={this.onAdd}
                        onDelete={this.onDelete}
                    />
                </div>
                 </CardContent>
                
            </Card>
        )
    }
}

export default withStyles(styles)(SeriesItem);