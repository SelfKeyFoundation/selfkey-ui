import * as React from 'react';
import injectSheet, { StyleSheet, ClassNameMap } from 'react-jss';

import { Grid, Divider, FormGroup, FormControl, Button } from '@material-ui/core'
import { H2, H3 } from '../../typography/headings';
import { P } from '../../typography/paragraph';
import { TickIcon } from '../../icons/tick';
import { UnlockIcon } from '../../icons/unlock';
import { StyledButton } from '../../common/styled-button';

const styles: StyleSheet = {
  root: {
    width: '946px',
    height: '100%',
    marginTop: '50px',
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

  body: {
    textAlign: 'justify',
    margin: '20px',
    color: '#fff',
    fontFamily: 'ProximaNovaRegular',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.67
  },

  formControl: {
    marginRight: '100px'
  },

  divider: {
    backgroundColor: '#475768'
  },

  dividerWrapper: {
    width: '100%'
  },

  formGroup: {
    '& span': {
      fontSize: '14px'
    },

    '& span strong': {
      color: '#93b0c1',
      fontSize: '16px',
      paddingRight: '20px'
    }
  },

  bullet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '28px',
    borderRadius: '18px',
    backgroundColor: '#3b4b59',
    border: 'solid 1px #495b70',
  },

  requirement: {
    paddingLeft: '20px',
    color: '#93b0c1'
  },

  requirements: {
    width: '400px',
  },

  description: {
    marginTop: '0px'
  },

  buttonWrapper: {
    marginRight: '30px',
  },

  button: {
    color: '#93b0c1',
    borderColor: '#3b4a5a',
    '&:disabled': {
      color: '#48565f'
    }
  },
};

export type Logo = {
  filename: string,
  url: string 
}
export type ItemProps = {
  name: string,
  logo: Array<Logo>,
  status: string,
  integration: string,
  description: string,
  location: string,
  year_launched: number,
  coin_pairs: string,
  maker_fee: string,
  taker_fee: string,
  fiat_payments: string,
  fiat_supported: Array<string>,
  margin_trading: string,
  kyc_aml: string,
  excluded_residents: Array<string>,
  url: string,
  email: string,
  kyc_template: Array<string>,
}

export type ItemDetailsProps = {
  item: ItemProps,
  unlockAction?: Function
  hasBalance: boolean,
  backAction?: ((event: React.MouseEvent<HTMLElement>) => void)
}

const getKYCRequirements = (requirements: Array<string>, classes: Partial<ClassNameMap<string>>) =>{
  return requirements.map(requirement => {
    return (
      <Grid item>
        <Grid container direction='row' justify='space-between'>
          <Grid item className={classes.bullet}>
            <TickIcon />
          </Grid>
          <Grid item className={classes.requirement}>
            {requirement}
          </Grid>
        </Grid>
      </Grid>
    );
  });
}

const unlockActionCall = (unlockAction: Function | undefined, item: ItemProps, hasBalance: boolean) => {
  if(item.status !== 'Active' || !unlockAction) {
    return;
  }

  unlockAction(hasBalance);
}

export const ItemDetails = injectSheet(styles)<ItemDetailsProps>(({classes, children, item, unlockAction, hasBalance, backAction}) => (
  <Grid container>
    <Grid item className={classes.buttonWrapper}>
      <Button variant="outlined" className={classes.button} onClick={backAction}>&#60; Back</Button>
    </Grid> 
    <Grid container className={classes.root}>
      <Grid item>
        <Grid container id='header' direction='row' justify='flex-start' alignItems='center' className={classes.header}>
          <Grid item id='icon' className={classes.icon}>
            <img src={item.logo[0].url}/>
          </Grid>
          <Grid item id='title' className={classes.title}>
            <H2>{item.name}</H2>
          </Grid>
        </Grid>
        <Grid item id='body' className={classes.body}>
          <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={32}>
            <Grid item id='description'>
              <Grid container direction='row' justify='center' alignItems='flex-start' spacing={40}>
                <Grid item xs={8}>
                  <P className={classes.description}>{item.description}</P>
                </Grid>
                <Grid item xs={4}>
                  <StyledButton  onClick={() => unlockActionCall(unlockAction, item, hasBalance)}>
                    {item.status === 'Active' &&
                      <UnlockIcon/>
                    } 
                    {item.integration}
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.dividerWrapper}>
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item id='highlights'>
              <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={16}>
                <Grid item>
                  <H3>Highlights</H3>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup className={classes.formGroup}>
                      <span><strong>Location:</strong> {item.location} </span>
                      <span><strong>Year Launched:</strong> {item.year_launched} </span>
                      <span><strong>Coin Pairs:</strong> {item.coin_pairs} </span>
                      <span><strong>Maker Fee:</strong> {item.maker_fee} </span>
                      <span><strong>Taker Fee:</strong> {item.taker_fee} </span>
                      <span><strong>URL:</strong> {item.url} </span>
                    </FormGroup>
                  </FormControl> 
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup className={classes.formGroup}>
                      <span><strong>FIAT Payment:</strong> {item.fiat_payments} </span>
                      <span><strong>FIAT Supported:</strong> {(item.fiat_supported)?item.fiat_supported.toString().replace(/,/g, ' '): ''} </span>
                      <span><strong>Margin Trading:</strong> {item.margin_trading} </span>
                      <span><strong>KYC/AML:</strong> {item.kyc_aml} </span>
                      <span><strong>Excluded Resident:</strong> {item.excluded_residents} </span>
                      <span><strong>Contact:</strong> {item.email} </span>
                    </FormGroup>
                  </FormControl>  
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.dividerWrapper}>
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item id='requirements'>
              <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={16}>
                <Grid item>
                  <H3>KYC Requirements</H3>
                </Grid>
                <Grid item className={classes.requirements}>
                  <Grid container direction='row' justify='flex-start' alignItems='center' spacing={32}>
                    {getKYCRequirements(item.kyc_template, classes)}
                  </Grid> 
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));

export default ItemDetails;
