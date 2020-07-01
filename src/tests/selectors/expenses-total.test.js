import selectExpensesTotal from '../../selectors/expenses-total';

import { expenses } from '../fixtures/expenses'

test('Should return 0 if there are no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toEqual(0);
});

test('Should correctly add up a single expense', () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toEqual(1500);
});

test('Should correctly add upmultiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(27000);
});