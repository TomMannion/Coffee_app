import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setComment } from "../features/commentSlice";

function Comment() {
  const comment = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();

  return (
    <TextField
      className="comment"
      type="text"
      label="Comment"
      multiline
      rows={4}
      value={comment}
      onChange={(e) => dispatch(setComment(e.target.value))}
    />
  );
}

export default Comment;
