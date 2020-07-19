import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import { expenses } from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, text, amount, createdAt}) => {
        expensesData[id] = { 
            description,
            text,
            amount,
            createdAt
        }
    });
    database.ref('expenses').set(expensesData).then(() => done());
})
test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('Should set up edit expense action object', () => {
    const action = editExpense('456abc', { note: "This is an edited note" });
    expect(action).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id: '456abc',
            updates: { note: "This is an edited note" }
        })
});

test('SHpuld set up add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('Should add expense with provided values to database and redux store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "Car",
        note: "Primera nissan",
        amount: 3000,
        createdAt: 4560
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with default values to database and redux store', (done) => {

    const store = createMockStore({});
    const expenseDefault = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });

});

test('Should set up expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('Should remove expense from firebase', () => {
    const store = createMockStore({});
    store.dispatch(startRemoveExpense(expenses[2])).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 3
        });
        return database.ref(`expenses/${actions[0].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(null);
        done();
    });
});