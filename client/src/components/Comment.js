import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setComment } from "../features/commentSlice";

function Comment() {
  const comment = useSelector((state) => state.comment.value);
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        className="comment"
        type="text"
        label="A short description of the recipe."
        multiline
        rows={3}
        value={comment}
        onChange={(e) => dispatch(setComment(e.target.value))}
        inputProps={{ maxLength: 120 }}
      />
    </div>
  );
}

export default Comment;
