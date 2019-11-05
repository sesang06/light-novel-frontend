import React, { useCallback } from 'react'
import { Map, List, mergeWith } from 'immutable';
import Box from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    box: {
      
    },
    input: {
      display: 'none',
    },
    label: {
        padding: theme.spacing(1),
        marginRight: 16,
      }
  }));
  

const SeriesCategoryItem = ({ category, onAdd, onDelete }) => {
    const classes = useStyles();

    const id = category.get('id');
    const title = category.get('title');
    const onChange = useCallback(
        e => {
            if (e.target.checked === true) {
                onAdd({ id, title });
            } else {
                onDelete({ id, title });
            }
        },
        [onAdd, onDelete, id, title],
    );

    return (
        <div>
            <FormControlLabel
                className={classes.box}
                 label = {<Typography component="span" className={classes.label}>{category.get('title')} </Typography>}
                control = {<Checkbox 
                    type="checkbox"
                    defaultChecked={category.get('is_checked')}
                    onChange={onChange}
                    />}
            />
             </div>
    )
}

const SeriesCategoryList = ({ categories, allCategories, onAdd, onDelete }) => {

    const checkedCategories = Map(
        categories.map(category => {
            return [category.get('id'), category.set('is_checked', true)]
        })
    )

    const unCheckedCategories = Map(
        allCategories.map(category => {
            return [category.get('id'), category.set('is_checked', false)]
        })
    )

    const result = mergeWith(
        (_, newVal) => newVal,
        unCheckedCategories,
        checkedCategories
    ).toList()
    return (
        <div>
            {result.map(category => (
                <SeriesCategoryItem
                    category={category}
                    key={category.get('id')}
                    onAdd={onAdd}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default SeriesCategoryList;