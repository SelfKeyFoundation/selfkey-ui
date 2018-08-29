import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { Grid } from '@material-ui/core'
import { H1 } from '../typography/headings';
import { MarketplaceItem, MarketplaceItemProps } from './marketplace-item';

const styles: StyleSheet = {
  header: {
    borderBottom: 'solid 1px #475768',
    '& h1': {
      marginLeft: '50px'
    },
    minHeight: '147px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
};

export type MarketplaceProps = {
  items: Array<MarketplaceItemProps>
}

const getItems = (items: Array<MarketplaceItemProps>) =>{
  return items.map((item, index) => {
    return (
      <MarketplaceItem key={index} title={item.title} description={item.description} active={item.active} svgIcon={item.svgIcon} learnMoreAction={item.learnMoreAction}/>
    );
  })
}

export const Marketplace = injectSheet(styles)<MarketplaceProps>(({classes, children, items}) => (
  <Grid container justify='center' alignItems='center'>
    <Grid item id='header' className={classes.header} xs={12}>
      <H1>SelfKey Marketplace</H1> 
    </Grid>
    <Grid item id='body' xs={12}>
      <Grid container direction='row' justify='space-evenly' alignItems='center'>
        {getItems(items)}
      </Grid>
    </Grid>
  </Grid>
));

export default Marketplace;
