import React from 'react';
import {shallow} from 'enzyme';
import GuessCounter from './guessCounter';

describe('<GuessCounter/>', () => {

    it('renders without crashing', () => {
      const count = [5, 4, 3, 2, 1];
      const div = document.createElement('div');
      shallow( <GuessCounter  currentCount={count}/> );
    });
    
  });