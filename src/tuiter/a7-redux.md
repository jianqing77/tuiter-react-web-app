step1: create reducers slice by defining its name and initial state, using `createSlice()`

step2: combine reducer to the store in index.js using `configureStore()`

step3: implement specific functional components using store `state` rather than hard code the json file, using `useSelector()` to get the array const

## reducers <=> createSlice
 
- import { createSlice } from "@reduxjs/toolkit";

**reducers/who-reducer.js** 
#### WhoToFollowList
- Component: read only and its state does not change
- Before: JSON file `who.json`.
- Now: 
  - refactor to use a `reducer` that provides the same data as the JSON file.
- TODO: 
  - create the slice and name the slice: const nameSlice = `createSlice`({name:... initialState:...})
  - name the reducer
  - initiate the reducer state
  - export default nameSlice.reducer

**tuits/tuits-reducer.js** 



## reducer -> store(index.js)
**index.js**
- import 
  - `libraries`:
    - import React from 'react';
    - import { `configureStore` } from '@reduxjs/toolkit';
    - import { `Provider` } from 'react-redux';
  - import all the `reducers`
- main task:
  - configure the store: Create a store to hold the reducer, and save it to const store.
  - function Tuiter(): return Provider components  
  - provide the store to the rest of the application so it can pull from the global state
    ```
    const store = configureStore( 
        {reducer: {who: whoReducer}}
    );

    function Tuiter() {
        return (
            <Provider store={store}>
                ... FUNCTIONAL COMPONENTS
            </Provider>
        )
    }
    ```
  - Once the state is in the store, any component in the body of the **Provider** can retrieve state from the store.

## store(index.js) => functional components
Functional Components in Provider: 
- separate to different folders
- each use the `useSelector` hook to retrieve the specific slice from the `state` in the `store`.


**who-to-follow-list:**
- import useSelector
- define const WhoToFollowListComponent
- inside the component, retrieve state from the store in `index.js` (no need to import the state from index.js)
  - const whoArray = useSelector((state) => state.who) (who is defined in the reducer name)

