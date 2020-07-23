import React, { useReducer, useEffect } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoCard from "./components/ToDoCard";
import { Container, Grid } from "@material-ui/core";
import { reducer, initState } from "./reducers/index";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const clearComplete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({type: 'CLEAR_COMPLETED'})
  }
  console.log('current state', state)

  useEffect(() => {
    console.log('usestate hook', state)
  })
  return (
    <>
      <div className="App">
        <ToDoForm state={state} dispatch={dispatch} />
        <button onClick={() => {dispatch({type: 'CLEAR_COMPLETED'})}}>Clear Completed</button>
      </div>
      <Grid container justify="center" spacing={2} style={{ padding: "2%" }}>
        
        {state?.map((obj) => {
          return <ToDoCard key={obj.id} toDo={obj} dispatch={dispatch} />;
        })}
      </Grid>
    </>
  );
}

export default App;
