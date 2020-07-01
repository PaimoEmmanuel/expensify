import filtersReducer from '../../reducers/filters';
import moment from 'moment'

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: "@@INIT"})
    expect(state).toEqual({
        text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});
test('Should set sortBy to date', ()=>{
    const initialState = {
        text: '',
        sortBy: 'amount'
    }
    const state = filtersReducer(initialState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});
test('Should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'bills'})
    expect(state.text).toBe('bills');
});
test('Should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).subtract(5, 'months')});
    expect(state.startDate).toEqual(moment(0).subtract(5, 'months'))
});

test('Should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0));
})