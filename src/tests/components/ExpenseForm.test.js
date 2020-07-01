import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { expenses } from '../fixtures/expenses';
import moment from 'moment'

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Should set description on input change', () => {
    const value = "New note blah blah"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('Should set amount if valid input', () => {
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount if invalid input', () => {
    const value = "12.122";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe("");
});

test('Should call onSubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]} onSubmit = {onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt,
        note: expenses[1].note
    })
});

test('Should set new date on date change', () =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment());
    expect(wrapper.state('createdAt')).toEqual(moment());
});

test('Should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focus = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: focus});
    expect(wrapper.state('focused')).toBe(focus);
})