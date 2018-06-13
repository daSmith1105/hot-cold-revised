import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';
import App from './App';

describe('<Header/>', () => {

    it('renders without crashing', () => {
      const helpHandler = () => {
          1 + 1
    }; 
      const restartHandler = () => {
        2 + 2
    }; 
      shallow( <Header /> );
    });
    
});