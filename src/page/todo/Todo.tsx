import React, { useCallback } from "react";
import { useGetTodosQuery } from "./todoService";
import type { Todo as TodoType } from "./types";

export const Todo: React.FC = ({}) => {
  const {
    isError,
    isLoading,
    data: todos,
  } = useGetTodosQuery("todos", {
    refetchOnFocus: true,
  });

  const onToggle = () => null;

  return (
    <div>
      <div className="App">
        <div className="todos">
          {todos?.map((todo) => (
            <React.Fragment key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle()}
                />
                <span>{todo.title}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
