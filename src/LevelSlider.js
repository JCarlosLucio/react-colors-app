import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: '#d4d5d9',
    height: 8,
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: 'green',
    border: '2px solid green',
    marginTop: -4,
    marginLeft: -8,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
};

const LevelSlider = withStyles(styles)(Slider);

export default LevelSlider;
