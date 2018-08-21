import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { Grid, Button, SvgIcon } from '@material-ui/core'
import { P } from '../typography/paragraph';
import { H2 } from '../typography/headings';

const styles: StyleSheet = {
  root: {
    width: '360px',
    height: '312px',
    padding: '50px'
  },

  svgIcon: {
    fontSize: '50px',
    color: '#FFF'
  },

  title: {
    marginLeft: '30px'
  },

  button: {
    color: '#93b0c1',
    borderColor: '#3b4a5a',
    '&:disabled': {
      color: '#48565f'
    }
  },

  body: {
    textAlign: 'justify'
  }
};

export type MarketplaceItemProps = {
  title: string,
  description: string,
  active: boolean,
  svgIcon?: string
}

export const MarketplaceItem = injectSheet(styles)<MarketplaceItemProps>(({classes, children, title, description, active, svgIcon}) => (
  <Grid container className={classes.root}>
    <Grid item>
      <Grid container id='header' direction='row' justify='flex-start' alignItems='center'>
        <Grid item id='icon'>
          {svgIcon &&
            <SvgIcon className={classes.svgIcon}>
              <path d={svgIcon}/>
            </SvgIcon>
          }
        </Grid>
        <Grid item id='title' className={classes.title}>
          <H2>{title}</H2>
        </Grid>
      </Grid>
      <Grid item id='body' className={classes.body}>
        <P>{description}</P>
      </Grid>
      <Grid item id='footer'>
        <Button variant="outlined" disabled={!active} className={classes.button}>{active? 'Learn More' : 'Comming Soon'}</Button>
      </Grid>
    </Grid>
  </Grid>
));

export default MarketplaceItem;
