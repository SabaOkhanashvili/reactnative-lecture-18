import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: false },
    { id: 3, text: 'Task 3', done: false },
  ]);

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: true } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text style={todo.done ? styles.doneText : styles.todoText}>
            {todo.text}
          </Text>
          {!todo.done && (
            <Button
              title="Done"
              onPress={() => markAsDone(todo.id)}
              color="#841584"
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
  },
  doneText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoApp;
