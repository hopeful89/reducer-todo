import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardContent,
  Switch
} from "@material-ui/core";
import "../App.css";

//things to complete is are complete updating state with dispatch and filter to update state out completed items

const ToDoCard = ({ toDo, dispatch }) => {
  return (
    <Grid item xs={3}>
      <Card color="primary" style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
        {/* <CardHeader title={toDo.item}></CardHeader> */}
        <CardContent style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>{toDo.item}{toDo.completed ? <span>completed</span>: undefined}</CardContent>
        <Switch onClick={(e) => {
          e.stopPropagation();
          dispatch({type: "IS_COMPLETE", id: toDo.id})}} color="primary"></Switch>
        {/* <CardContent>{(toDo.appointment !== "" ? `Due by: ${toDo.appointment}`: undefined)}</CardContent> */}
      </Card>
      
    </Grid>
  );
};

export default ToDoCard;
