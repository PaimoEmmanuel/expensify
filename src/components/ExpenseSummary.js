import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    console.log(props.expenseTotal);
    const expenseWord = props.expenseCount > 1 ? 'expenses' : 'expense';
     const formattedExpenseTotal = numeral(props.expenseTotal / 100).format('$0,0.00');
    return (

        <div>
            <p>Viewing {props.expenseCount} {expenseWord} totalling {formattedExpenseTotal}</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses) 
    }
};
export default connect(mapStateToProps)(ExpenseSummary);
