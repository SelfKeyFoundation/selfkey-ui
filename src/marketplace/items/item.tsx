import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';

import { Grid, Button } from '@material-ui/core'
import { H2 } from '../../typography/headings';
import Truncate from 'react-truncate';

const styles: StyleSheet = {
  root: {
    width: '360px',
    height: '312px',
    marginTop: '30px',
    marginBottom: '30px',
    border: 'solid 1px #303c49',
    borderRadius: '4px'
  },

  svgIcon: {
    fontSize: '50px',
    color: '#FFF'
  },

  title: {
    margin: '20px'
  },

  icon: {
    marginLeft: '20px'
  },

  button: {
    color: '#93b0c1',
    borderColor: '#3b4a5a',
    '&:disabled': {
      color: '#48565f'
    }
  },

  header: {
    backgroundColor: '#2a3540'
  },

  body: {
    width: '320px',
    textAlign: 'justify',
    margin: '20px',
    color: '#fff',
    fontFamily: 'ProximaNovaRegular',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.67
  },

  footer: {
    margin: '20px',
  }
};

export type ItemProps = {
  name: string,
  status: string,
  description: string,
  logoUrl?: string
}

export const Item = injectSheet(styles)<ItemProps>(({classes, children, name, description, status, logoUrl}) => (
  <Grid container className={classes.root}>
    <Grid item>
      <Grid container id='header' direction='row' justify='flex-start' alignItems='center' className={classes.header}>
        <Grid item id='icon' className={classes.icon}>
          <img src={logoUrl}/>
        </Grid>
        <Grid item id='title' className={classes.title}>
          <H2>{name}</H2>
        </Grid>
      </Grid>
      <Grid item id='body' className={classes.body}>
        <Truncate lines={5}>
          {description}
        </Truncate>
      </Grid>
      <Grid item id='footer' className={classes.footer}>
        <Button variant="outlined" className={classes.button}>View</Button>
      </Grid>
    </Grid>
  </Grid>
));

export default Item;
