import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import AddExpensePage from './components/AddExpensePage';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(() => {
  //console.log(store.getState())  
});
store.dispatch(addExpense({description: 'water bill', note: 'last water bill', createdAt: 4500}))
store.dispatch(addExpense({description: 'gas bill', amount: 200, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 98200}))


const state = store.getState()
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(getVisibleExpenses(state.expenses, state.filters));

  const jsx = (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
      );
  ReactDOM.render(jsx, document.getElementById('app'));
