import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses'

let expense, startEditExpense, startRemoveExpense, match, history, wrapper;
beforeEach(() => {
    expense = expenses[1];
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    match = {
        params: {
            id: expenses[1].id
        }
    };
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        expense = {expense} 
        startEditExpense ={startEditExpense} 
        startRemoveExpense= {startRemoveExpense} 
        match = {match}
        history = {history}/>);
});
test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle startRemoveExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
    expect(history.push).toHaveBeenLastCalledWith('/');
})