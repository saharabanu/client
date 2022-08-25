import { updateText } from "../actions";

const updateTextThunk = (todoId, text) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: text
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    console.log(text);
    console.log(todo);

    dispatch(updateText(todoId, text));
  };
};

export default updateTextThunk;
