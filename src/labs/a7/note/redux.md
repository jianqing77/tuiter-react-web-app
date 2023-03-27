
`Action`: An action is a plain JavaScript object that represents a user interaction or some other event that has occurred. 
- An action has a **type** property: describes the type of event that has occurred, and
- may have additional data attached to it, such as a **payload** of data that the reducer can use to update the store.
- example:
```
  {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Buy milk',
    completed: false
  }
}
```

`Reducer`: A reducer is a pure function that takes the current state of the application and an action, and returns a new state that reflects the changes made by the action. The reducer is responsible for updating the store based on the action that has occurred.

`Store`: The store is an object that holds the state of the application, and provides a way to subscribe to changes in that state. The store is created by passing a reducer to the createStore function provided by the Redux library.

`Components`: Components are the building blocks of a React application. They are responsible for rendering the user interface, and can use the data stored in the Redux store to determine what to render.

`Dispatch`: Dispatch is a function provided by the store that is used to send an action to the reducer. When an action is dispatched, the store passes it to the reducer, which updates the state of the application accordingly.
The relationship between these concepts can be summarized as follows:

Relationships:
- **Actions** are created and dispatched to the **store**.
- The **store** receives the **actions** and sends them to the **reducers**.
- The **reducers** take the current **state** and the **action**, and calculate the new state of the application.
- The **store** updates its state with the new state returned by the reducer.
- Any components that are subscribed to the store are notified of the state change and update accordingly.
Overall, the actions, reducers, and store work together to provide a predictable and consistent way to manage the state of an application in a complex and scalable way.

                  ┌───────────┐
                  │   Action  │
                  └──────┬────┘
                         │
                         ▼
                  ┌───────────┐
                  │   Reducer │
                  └──────┬────┘
                         │
                         ▼
                  ┌───────────┐
                  │    Store  │
                  └──────┬────┘
                         │
                         ▼
                 ┌────────────┐
                 │ Components │
                 └────────────┘

                
**Actions**(todo-reducers.js)
- `createSlice` from redux toolkit or createAction from redux
- Payload and Type definitions for actions
- action creators functions

**Reducers**
- createSlice from redux toolkit or createReducer from redux
- The initial state definition
- The switch-case or if-else statements to handle different action types
- The state immutability and new state creation

**Store**
createStore from redux
configureStore from redux toolkit
The rootReducer, which combines multiple reducers into a single reducer
The initialState for the entire app
applyMiddleware for middleware
Provider

Provider component from react-redux
The store passed as a prop to the <Provider> component
Wrapping the top-level component with the <Provider> component
Hooks useSelector hook from react-redux
useDispatch hook from react-redux
Here is a flowchart that shows the typical process for using these methods in Redux

**reducers** - specific reducer.js
- createSlice()
  - create the slice
  - name the reducer: `name:...`
  - initialize the reducer state: `initialState:...`
- export the reducer using the slice reducer
- 


**index.js**
- import libraries:
  - import React from 'react';
  - import { configureStore } from '@reduxjs/toolkit';
  - import { Provider } from 'react-redux';
- import all the reducers

1. [configureStore()]: 
- Create a store to hold the reducer, and save it to const store. 
- Take an object that includes **multiple reducers** as well as other configuration options.
  -  The `createStore` function takes in the reducer function as an argument.
  -  `createStore` function from Redux takes a single reducer as an argument, while `configureStore` function from the Redux Toolkit can take an object that includes multiple reducers as well as other configuration options. It internally uses combineReducers from Redux to combine all reducers passed to it into a single root reducer.
  store all the reducers()
- example: 
    ```
    const store = configureStore({
        reducer: { hello, todos },
    });
    ```

-> [createReducer()] 

-> [Provider](index.js) 

-> [useSelector()] 

-> [useDispatch()](todos-component.js)


