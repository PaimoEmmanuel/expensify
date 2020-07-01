import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '34',
        description: 'Books',
        note: 'Fimile',
        amount: 9000,
        createdAt: 0
    },
    {
        id: '349b',
        description: 'Bible',
        note: '',
        amount: 500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '134',
        description: 'Phone',
        note: 'Bought a new phone',
        amount: 2500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]
test('Should filter by text value', () => {
    const filters = {
        text: 'b',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1] ])
})

test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
})
test('Should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
})

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})
test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
})