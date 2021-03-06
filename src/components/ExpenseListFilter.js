import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
export class ExpenseListFilter extends React.Component {

    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusedChange = (calendarFocused) =>{
        this.setState(() => ({calendarFocused}))
    }
    onTextChange = (e) =>{
        this.props.setTextFilter(e.target.value)
    };
    onSortChange = (e) => {
        e.target.value === 'date'? this.props.sortByDate(): this.props.sortByAmount()
    };
    render(){
        return (
            <div>
                <input type="text" 
                        value={this.props.filters.text} 
                        onChange = {this.onTextChange}
                /> 
                <select 
                value={this.props.filters.sortBy} 
                onChange= {this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusedChange}
                    showClearDates= {true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapsDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)) ,
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
})
export default connect(mapStateToProps, mapsDispatchToProps)(ExpenseListFilter);