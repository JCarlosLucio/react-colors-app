import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import useInputState from './hooks/useInputState';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    width: '100%',
  },
  picker: {
    marginTop: '2rem',
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
    heigth: '70px',
  },
};

function ColorPickerForm({ isPaletteFull, addNewColor, colors, classes }) {
  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, handleChange, reset] = useInputState('');

  // validators - for TextValidator
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
  });

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleSubmit = () => {
    const newColor = { color: currentColor, name: newColorName };
    addNewColor(newColor);
    reset();
  };

  return (
    <div className={classes.root}>
      <ChromePicker
        className={classes.picker}
        width="100%"
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          className={classes.colorNameInput}
          margin="normal"
          variant="filled"
          placeholder="Color Name"
          value={newColorName}
          name="colorName"
          onChange={handleChange}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color already used!',
          ]}
        />
        <Button
          className={classes.addColor}
          variant="contained"
          type="submit"
          color="primary"
          disabled={isPaletteFull}
          style={{ backgroundColor: isPaletteFull ? 'grey' : currentColor }}
        >
          {isPaletteFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
