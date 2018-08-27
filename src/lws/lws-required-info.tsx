import * as React from 'react';
import injectSheet, { StyleSheet, ClassNameMap } from 'react-jss';
import CommonStyle from '../common/common-style';
import { CheckIcon } from '../icons/check';
import { WarningIcon } from '../icons/warning';
import { EditIcon } from '../icons/edit';
import { LWSButton } from './lws-button';

const styles: StyleSheet = {

  form: CommonStyle.form,

  buttonPrimary: CommonStyle.buttonPrimary,

  buttonSecondary: CommonStyle.buttonSecondary,

  areaTitle: {
    textAlign: 'center',
    '& h4': {
      fontSize: '16px',
      fontWeight: 'normal',
      padding: '0 0 40px',
      margin: '0',
      lineHeight: '22px',
      textAlign: 'left',
      color: '#FFF'
    }
  },

  attribute: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 30px',
    color: '#FFF',
    '& dl': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '0 0 0 15px',
      '& dd': {
        color: '#93B0C1',
        wordBreak: 'break-word',
        textAlign: 'right'
      }
    },
  },

  waringMessage: {
    color: '#FFA700',
    fontSize: '13px',
    marginTop: '-15px'
  },

  formSubmitColumn: {
    flexDirection: 'row',
    display: 'flex',    
    justifyContent: 'space-between',
    '& button': {
      maxWidth: '215px',
      marginTop: '0px'
    }
  },

  tocMessage: {
    background: '#293743',
    padding: '20px',
    fontSize: '12px',
    lineHeight: '15px',
    fontFamily: 'ProximaNovaRegIt',
    margin: '30px 0 45px',
    color: '#FFF'
  },

  edit: {
    cursor: 'pointer'
  }

};

export type Attribute = {
  name: string,
  value: string
}

export type Website = {
  name: string,
  url: string,
  termsUrl: string,
  policyUrl: string
}

export type LWSRequiredInfoProps = {
  allowAction?: ((event: React.MouseEvent<HTMLElement>) => void),
  cancelAction?: ((event: React.MouseEvent<HTMLElement>) => void),
  editAction?: ((event: React.MouseEvent<HTMLElement>) => void),
  attributes: Array<Attribute>,
  website: Website
};

const renderAttributes = (attributes: Array<Attribute>, classes: Partial<ClassNameMap<string>>, editAction: ((event: React.MouseEvent<HTMLElement>) => void) | undefined) => {
  return attributes.map((attribute, index) => {
    if (attribute.value) {
      return (
        <div key={index}>
          <div className={classes.attribute}>
            <CheckIcon/>
            <dl>
                <dt>{attribute.name}</dt>
                <dd>{attribute.value}</dd>
            </dl>
          </div>
        </div>
      )
    } else {
      return (
        <div key={index}>
          <div className={classes.attribute}>
            <WarningIcon/>
            <dl>
                <dt>{attribute.name}</dt>
                <dd><a onClick={editAction} className={classes.edit}><EditIcon/></a></dd>
            </dl>
          </div>
          <div className={classes.waringMessage}>Please update your missing details.</div>
        </div>
      )
    }
    
  })
}


export const LWSRequiredInfo = injectSheet(styles)<LWSRequiredInfoProps>(({classes, children, allowAction, cancelAction, editAction, attributes, website}) => (
  <div>
    <div className={classes.areaTitle}>
        <h4><a href={website.url} target='_blank'><strong>{website.name}</strong></a> would like to access this information:</h4>
    </div>
    <div className={classes.form}>
      {renderAttributes(attributes, classes, editAction)}

      <div className={classes.tocMessage}>
          By clicking "Allow", your information listed above will be used by <a href={website.url} target='_blank'>{website.name}</a> with respect to their <a href={website.termsUrl} target='_blank'>[Terms of Service]</a> and <a href={website.policyUrl} target='_blank'>[Privacy Policy]</a>.
      </div>
      <div className={classes.formSubmitColumn}>
          <LWSButton className={classes.buttonSecondary}>Cancel</LWSButton>
          <LWSButton className={classes.buttonPrimary}>Allow</LWSButton>
      </div>
    </div>
  </div>
));

export default LWSRequiredInfo;
