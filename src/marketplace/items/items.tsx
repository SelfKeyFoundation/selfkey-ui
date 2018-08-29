import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { Grid, SvgIcon } from '@material-ui/core'
import { H1 } from '../../typography/headings';
import { Item, ItemProps } from './item';

const styles: StyleSheet = {
  header: {
    borderBottom: 'solid 1px #475768',
    '& h1': {
      marginLeft: '20px'
    },
    '& svg': {
      marginLeft: '20px'
    }
  },

  svgIcon: {
    fontSize: '50px',
    color: '#FFF'
  },
};

export type ItemsProps = {
  category: string,
  items: Array<ItemProps>,
  svgIcon: string,
}

const getItems = (items: Array<ItemProps>) =>{
  return items.map(item => {
    return (
      <Item name={item.name} description={item.description} status={item.status} logoUrl={item.logoUrl}/>
    );
  })
}

export const Items = injectSheet(styles)<ItemsProps>(({classes, children, category, items, svgIcon}) => (
  <Grid container justify='center' alignItems='center'>
    <Grid item id='header' className={classes.header} xs={12}>
      <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          {svgIcon &&
            <SvgIcon className={classes.svgIcon}>
              <path d={svgIcon}/>
            </SvgIcon>
          }
        </Grid>
        <Grid item>
        <H1>{category}</H1> 
        </Grid>
      </Grid>      
    </Grid>
    <Grid item id='body' xs={12}>
      <Grid container direction='row' justify='space-evenly' alignItems='center'>
        {getItems(items)}
      </Grid>
    </Grid>
  </Grid>
));

export default Items;
