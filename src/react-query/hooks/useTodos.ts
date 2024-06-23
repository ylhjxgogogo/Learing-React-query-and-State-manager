import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "../services/todoServices";
import todoServices from "../services/todoServices";
const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoServices.getAll, //丢失了this,使用bind方法或改为箭头函数
    staleTime: 10 * 1000,
  });
};
export default useTodos;
