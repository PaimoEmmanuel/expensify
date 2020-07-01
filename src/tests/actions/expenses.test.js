import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: "Rent",
        amount: 12400,
        note: 'My first rent',
        createdAt: 1500
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
test('Should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "",
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})