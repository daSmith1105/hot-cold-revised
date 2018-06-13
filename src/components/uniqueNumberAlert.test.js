import React from 'react';
import {shallow} from 'enzyme';
import UniqueNumberAlert from './uniqueNumberAlert';

describe('<UniqueNumberAlert/>', () => {
    const closeTest = () => 1 + 1;
    const value = 10;

    it('renders without crashing', () => {
        shallow( <UniqueNumberAlert closeModal = { closeTest } value = { 10 }  /> );
    });
    
 });