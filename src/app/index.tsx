import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "./constants/ui";
import Header from "./layout/Header";
import TodoCreator from "./layout/TodoCreator";
import TodoList from "./layout/TodoList";
import { Todo } from "./types/todo";

const defaultTodos: Todo[] = [
  { id: 1, title: "Learn React Native!", isCompleted: false },
  { id: 2, title: "Build a Todo app", isCompleted: false },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const onAddTodo = (title: Todo["title"]) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onPressDelete = (id: Todo["id"]) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const onCheckTodo = (id: Todo["id"]) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onUpdateTitle = (id: Todo["id"], title: Todo["title"]) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header totalTodos={todos.length} completedTodos={completedTodos} />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onPressDelete={onPressDelete}
        onUpdateTitle={onUpdateTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
