import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
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
            <MenuIcon />
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
