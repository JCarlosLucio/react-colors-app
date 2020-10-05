import sizes from './sizes';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    '& span': {
      padding: '0 10px',
    },
    [sizes.down('md')]: {
      padding: '5px 0',
    },
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
};

export default styles;
