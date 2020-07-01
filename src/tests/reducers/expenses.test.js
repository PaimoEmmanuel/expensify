import expensesReducer from '../../reducers/expenses';
import addExpense from '../../actions/expenses';
import expenses from '../../selectors/expenses';

test('Should set up adefault state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

const defaulteEpenses = [
    {
        id: 1,
        description: 'book'
    },
    {
        id: 2,
        description: 'bible'
    }
]

test('Should add a new expense', () => {
    const expense = {
        description: 'Pen'
    }
    const state = expensesReducer(defaulteEpenses, {type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([...defaulteEpenses, expense]);
});

test('Should remove the expense by ID', () => {

    const state = expensesReducer(defaulteEpenses, {type: 'REMOVE_EXPENSE', id: 2});
    expect(state).toEqual([defaulteEpenses[0]]);
});
test('Should not remove the expense if ID not found', () => {
    const state = expensesReducer(defaulteEpenses, {type: 'REMOVE_EXPENSE', id: 9});
    expect(state).toEqual(defaulteEpenses);
});
test('Should edit expense', () => {
    const state = expensesReducer(defaulteEpenses, {type: 'EDIT_EXPENSE', id: 2, updates: { description: 'church'}});
    expect(state[1].description).toBe('church');
});
test('Should not edit expense if Id do not exist', () => {
    const state = expensesReducer(defaulteEpenses, {type: 'EDIT_EXPENSE', id: 8, updates: { description: 'church'}});
    expect(state).toEqual(defaulteEpenses);
});