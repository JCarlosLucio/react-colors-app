import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function ColorPickerForm({
  isPaletteFull,
  newName,
  handleChange,
  addNewColor,
}) {
  const [currentColor, setCurrentColor] = useState('teal');

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={addNewColor}>
        <TextValidator
          value={newName.colorName}
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

export default ColorPickerForm;
