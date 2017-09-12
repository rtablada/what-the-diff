/* eslint import/no-webpack-loader-syntax: "off" */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Markdown,
  Deck,
  Slide
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Markdown source={require('raw-loader!./another.md')}/>
      </Deck>
    );
  }
}
