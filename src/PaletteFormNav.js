import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

function PaletteFormNav({
  open,
  palettes,
  handleSubmit,
  handleDrawerOpen,
  classes,
}) {
  const [formShowing, setFormShowing] = useState(false);

  const showForm = () => setFormShowing(true);
  const hideForm = () => setFormShowing(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create a Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button variant="contained" color="secondary">
              GO BACK
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={showForm}>
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          hideForm={hideForm}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
