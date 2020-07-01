import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses'

let expense, editExpense, removeExpense, match, history, wrapper;
beforeEach(() => {
    expense = expenses[1];
    editExpense = jest.fn();
    removeExpense = jest.fn();
    match = {
        params: {
            id: expenses[1].id
        }
    };
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        expense = {expense} 
        editExpense ={editExpense} 
        removeExpense= {removeExpense} 
        match = {match}
        history = {history}/>);
});
test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
    expect(history.push).toHaveBeenLastCalledWith('/');
})