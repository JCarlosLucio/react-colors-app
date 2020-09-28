import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {},
});

function NewPaletteForm({
  maxColors = 20,
  palettes,
  savePalette,
  history,
  classes,
}) {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);

  const isPaletteFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const handleSubmit = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replaceAll(' ', '-'),
      colors,
    };
    savePalette(newPalette);
    history.push('/');
  };

  const clearColors = () => setColors([]);

  const addRandomColor = () => {
    // pick random color from existing palettes
    const allColors = palettes.flatMap((p) => p.colors);
    const rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  };

  const removeColor = (colorName) =>
    setColors(colors.filter((color) => color.name !== colorName));

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4">Design Your Palette</Typography>
          <div className={classes.buttons}>
            <Button variant="contained" color="secondary" onClick={clearColors}>
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isPaletteFull}
              onClick={addRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            colors={colors}
            addNewColor={addNewColor}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
