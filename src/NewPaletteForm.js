import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import arrayMove from 'array-move';
import clsx from 'clsx';
import DraggableColorList from './DraggableColorList';
import ColorPickerForm from './ColorPickerForm';
import PaletteFormNav from './PaletteFormNav';
import seedColors from './seedColors';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm({
  maxColors = 20,
  palettes,
  savePalette,
  history,
  classes,
}) {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(seedColors[0].colors);

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

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replaceAll(' ', '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push('/');
  };

  const clearColors = () => setColors([]);

  const addRandomColor = () => {
    // pick random color from existing palettes
    const allColors = palettes.flatMap((p) => p.colors);
    let rand = Math.floor(Math.random() * allColors.length);
    let randomColor = allColors[rand];
    // avoid duplicate colors
    const checkDuplicateColor = () =>
      colors.some((color) => color.name === randomColor.name);
    let isDuplicateColor = checkDuplicateColor();

    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = checkDuplicateColor();
    }
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
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.button}
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
          distance={5}
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
