import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Should render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount ={1} expenseTotal ={4000}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount ={4} expenseTotal ={444}/>);
    expect(wrapper).toMatchSnapshot();
});