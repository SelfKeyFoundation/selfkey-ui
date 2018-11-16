const CommonStyle = {
  fontFamily: 'Lato, arial, sans-serif',
  header: {
    height: '50px',
    backgroundColor: '#1E262E',
    boxShadow: 'inset 0 -1px 0 0 #303C49, 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',
    '&& th': {
      border: 'none',
      color: '#7F8FA4',
      fontFamily: 'Lato',
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '15px',
      textTransform: 'uppercase'
    }
  },
  body: {
    '&& tr > td': {
      color: '#FFFFFF',
      border: 'none',
      fontFamily: 'Lato',
      fontSize: '15px',
      lineHeight: '18px'
    },
    '&& tr:nth-child(odd)': {
      backgroundColor: '#2E3945'
    },
    '&& tr:nth-child(even)': {
      backgroundColor: '#262f39'
    }
  },
}

export default CommonStyle
