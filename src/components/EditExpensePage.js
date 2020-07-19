import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.editExpense(this.props.match.params.id, expense);
    this.props.history.push('/');
  }
  onRemove = () => {
      this.props.startRemoveExpense({ id: this.props.match.params.id });
      this.props.history.push('/');
  }
  render() {
    return (
      <div>
      Editing the expense with id of {this.props.match.params.id}
      <ExpenseForm 
      expense={this.props.expense}
      onSubmit = {this.onSubmit}/>
      <button onClick={this.onRemove}>Remove</button>
    </div>
    )
  }
}


const mapStateToProps = (state, props) =>{
  return {
    expense: state.expenses.find((expense => expense.id === props.match.params.id))
  }
}
const matchDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, updates) => dispatch(editExpense(id, updates)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(EditExpensePage);
