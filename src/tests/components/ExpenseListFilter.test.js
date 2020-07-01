import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filter';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn(),
    sortByDate = jest.fn(),
    sortByAmount = jest.fn(),
    setStartDate = jest.fn(),
    setEndDate = jest.fn(),
    wrapper = shallow(
        <ExpenseListFilter 
        filters = {filters}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setTextFilter={setTextFilter}
        />
        );
});

test('Should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilter with altFilter data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: 'rent'
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date change', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});