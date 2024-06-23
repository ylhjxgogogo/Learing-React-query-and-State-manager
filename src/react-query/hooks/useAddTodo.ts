import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "../services/todoServices";
import todoServices from "../services/todoServices";
const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient(); //得到当前的查询客户端
  const addTodo = useMutation({
    mutationFn: todoServices.post, //改为箭头函数，this->apiClient
    onMutate: (newTodo: Todo) => {
      //报错更新之前的上下文，以便更新失败后回滚到之前的数据状态
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      //再发送数据给后端之前执行，实现乐观更新
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      onAdd();
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // console.log(savedTodo); //服务端返回的
      // console.log(newTodo); //我们提交的
      //更新数据有两种方法
      //1.告诉React-query 缓存无效了，那么它会立即发送请求获取更新后的数据，但由于目前使用的是 fake backend, no support
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS,
      // });

      //2.approach 2:updating the data in the cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => {
          return todo === newTodo ? savedTodo : todo;
        })
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
  return { addTodo };
};
export default useAddTodo;
