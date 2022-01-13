import { api } from "../../store/api";
import { Todo } from "./types";

const todosService = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Array<Todo>, string>({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosService;
