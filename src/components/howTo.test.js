import React from 'react';
import {shallow} from 'enzyme';
import HowTo from './howTo';

describe('<HowTo/>', () => {

        it('renders without crashing', () => {
            const helpHandler = () => {
                1 + 1
        }; 
            shallow( <HowTo helpClick={helpHandler} /> );
        });
});
