import React from 'react';
import {shallow} from 'enzyme';
import GuessHistory from './guessHistory';

describe('<GuessHistory/>', () => {

    it('renders without crashing', () => {
    const testArray = [5, 4, 3, 2, 1];
    shallow( <GuessHistory array={testArray} /> );
    });
    
});