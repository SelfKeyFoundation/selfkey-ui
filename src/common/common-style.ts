const CommonStyle = {
  fontFamily: 'ProximaNovaRegular',

  form: {
    minHeight: '300px'
  },

  buttonPrimary: {
    color: '#fff',
    background: 'linear-gradient(0deg, #09A8BA 0%, #0ABBD0 100%)',
    border: 0,
    width: '100%',
    '&:hover': {
      background: 'linear-gradient(45deg, #09A8BA 0%, #0ABBD0 100%)'  
    }
  },

  buttonSecondary: {
    marginTop: '30px',
    color: '#1CA9BA',
    background: '#202A33',
    border: '2px solid #1CA9BA',
    width: '100%',
    '&:hover': {
      background: '#293743'
    }
  },

  areaHeader: {
    textAlign: 'center'
  }
}

export default CommonStyle