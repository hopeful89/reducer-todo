import React, { useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  Switch
} from "@material-ui/core";
import "../App.css";

//things to complete is are complete updating state with dispatch and filter to update state out completed items

const ToDoCard = ({ toDo, dispatch }) => {
    // const [ completed, setCompleted ] = useState(false)
    // console.log('todo', toDo.appointment.split('T'))
    console.log('bs: toDoCard.js: toDo',toDo)
  return (
    <Grid item xs={3}>
      <Card color="primary" style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
        {/* <CardHeader title={toDo.item}></CardHeader> */}
        <CardContent>{toDo.item}</CardContent>
        <Switch onClick={(e) => {
          e.stopPropagation();
          dispatch({type: "IS_COMPLETE", id: toDo.id, completed: !toDo.completed})}} color="primary"></Switch>
        {/* <CardContent>{(toDo.appointment !== "" ? `Due by: ${toDo.appointment}`: undefined)}</CardContent> */}
      </Card>
      
    </Grid>
  );
};

export default ToDoCard;
