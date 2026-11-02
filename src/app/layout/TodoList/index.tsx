import { Todo } from "@/app/types/todo";
import React from "react";
import { FlatList, View } from "react-native";
import TodoItem from "../TodoItem";

type TodoListProps = {
  todos: Todo[];
  onCheckTodo: (id: Todo["id"]) => void;
  onPressDelete: (id: Todo["id"]) => void;
  onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onCheckTodo, onPressDelete, onUpdateTitle }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
            onCheck={onCheckTodo}
            onDelete={onPressDelete}
            onUpdateTitle={onUpdateTitle}
          />
        )}
      />
    </View>
  );
};

export default TodoList;
