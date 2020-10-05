import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto, sans-serif',
    height: '100%',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },
  //Added to center LevelSlider and Level span
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '340px',
    marginLeft: '10px',
    marginTop: '3px',
    [sizes.down('md')]: {
      width: '150px',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1.1rem',
  },
};
