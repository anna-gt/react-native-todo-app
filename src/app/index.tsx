import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/ui";
import Header from "../../layout/Header";
import TodoCreator from "../../layout/TodoCreator";
import TodoList from "../../layout/TodoList";
import useTodo from "../../hooks/useTodo";

export default function Index() {
  const {
    onAddTodo,
    completedTodos,
    todos,
    onCheckTodo,
    onUpdateTodoTitle,
    onDeleteTodo,
  } = useTodo();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header totalTodos={todos.length} completedTodos={completedTodos} />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onPressDelete={onDeleteTodo}
        onUpdateTitle={onUpdateTodoTitle}
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
