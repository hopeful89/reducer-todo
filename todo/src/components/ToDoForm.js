import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Input } from '@material-ui/core'

const ToDoForm = ({ dispatch }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    // console.log("bs: todoform.js: onSubmit: formdata", data);
    dispatch({ type: "ADD_TODO", payload: data.item, appointment: JSON.stringify(data.appointment)});
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto'}}>
        <h1>testing</h1>
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            id="item"
            label="New Todo Item"
            name="item"
            autoFocus
          />
        <TextField
          id="datetime-local"
          label="Schedule"
          type="datetime-local"
          defaultValue="undefined"
          InputLabelProps={{
            shrink: true,
          }}
          name="appointment"
          inputRef={register}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default ToDoForm;
