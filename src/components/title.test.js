import React from 'react';
import {shallow} from 'enzyme';
import Title from './title';

describe('<Title/>', () => {

    it('renders without crashing', () => {
      shallow( <Title /> );
    });

});