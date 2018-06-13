import React from 'react';
import {shallow} from 'enzyme';
import Feedback from './feedback';

describe('<Title/>', () => {

    it('renders without crashing', () => {
      shallow(<Feedback feedback="Test Successful" /> );
    });

});