import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";
let _id = 0;
const TodoForm = () => {
  const { addTodo } = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}

      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: _id++,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">{"Add"}</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;