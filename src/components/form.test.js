import React from 'react';
import {shallow} from 'enzyme';
import Form from './form';

describe('<Form/>', () => {

    it('renders without crashing', () => {
        const testFunction = () => {
          1 + 1
        }
      shallow( <Form feedback="Test Successful" handleChange={testFunction} inputVal='3' /> );
    });

});