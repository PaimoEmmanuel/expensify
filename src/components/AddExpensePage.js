import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component {
 
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense))
    this.props.startAddExpense(expense);
    this.props.history.push('/')
  }
 
  render(){
    return (
        <div>
          This is from my add expense component
          <ExpenseForm 
          onSubmit = {this.onSubmit}
          />
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)) 
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
