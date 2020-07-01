import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should generate set text filter default object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should generate set text filter object with given text', () => {
    const text = 'bill'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})