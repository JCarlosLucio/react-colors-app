import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const [palettes, setPalettes] = useLocalStorageState('palettes', seedColors);
  const findPalette = (id) => palettes.find((palette) => palette.id === id);
  const savePalette = (newPalette) => setPalettes([...palettes, newPalette]);
  const deletePalette = (id) =>
    setPalettes(palettes.filter((palette) => palette.id !== id));

  return (
    <Route
      render={() => (
        <TransitionGroup>
          <CSSTransition>
            <Switch>
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <PaletteList
                    palettes={palettes}
                    deletePalette={deletePalette}
                    {...routeProps}
                  />
                )}
              />
              <Route
                exact
                path="/palette/new"
                render={(routeProps) => (
                  <NewPaletteForm
                    savePalette={savePalette}
                    palettes={palettes}
                    {...routeProps}
                  />
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={(routeProps) => (
                  <Palette
                    palette={generatePalette(
                      findPalette(routeProps.match.params.id)
                    )}
                  />
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) => (
                  <SingleColorPalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
