import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { Grid, Button } from '@material-ui/core'
import { P } from '../typography/paragraph';
import { H2 } from '../typography/headings';

const styles: StyleSheet = {
  root: {
    width: '360px',
    height: '326px',
    marginTop: '30px',
    marginBottom: '30px',
    border: 'solid 1px #303c49',
    borderRadius: '4px'
  },

  title: {
    margin: '20px'
  },

  icon: {
    marginLeft: '20px'
  },

  header: {
    backgroundColor: '#2a3540'
  },

  svgIcon: {
    
    height: '44px',
    color: '#23E6FE'
  },

  button: {
    color: '#93b0c1',
    borderColor: '#3b4a5a',
    '&:disabled': {
      color: '#48565f'
    }
  },

  body: {
    width: '320px',
    textAlign: 'left',
    margin: '20px',
    color: '#fff',
    fontFamily: '"Proxima Nova", arial, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
    height: '130px',
  },

  footer: {
    margin: '20px',
  }
};

export type MarketplaceItemProps = {
  title: string,
  description: string,
  active: boolean,
  svgIcon?: string,
  learnMoreAction?: ((event: React.MouseEvent<HTMLElement>) => void)
}

export const MarketplaceItem = injectSheet(styles)<MarketplaceItemProps>(({classes, children, title, description, active, svgIcon, learnMoreAction}) => (
  <Grid container className={classes.root}>
    <Grid item>
      <Grid container id='header' direction='row' justify='flex-start' alignItems='center' className={classes.header}>
        <Grid item id='icon' className={classes.icon}>
          {svgIcon &&
            <img src={svgIcon} className={classes.svgIcon}/>
          }
        </Grid>
        <Grid item id='title' className={classes.title}>
          <H2>{title}</H2>
        </Grid>
      </Grid>
      <Grid item id='body' className={classes.body}>
        <P>{description}</P>
      </Grid>
      <Grid item id='footer' className={classes.footer}>
        <Button variant="outlined" disabled={!active} className={classes.button} onClick={learnMoreAction}>{active? 'Learn More' : 'Coming Soon'}</Button>
      </Grid>
    </Grid>
  </Grid>
));

export default MarketplaceItem;
