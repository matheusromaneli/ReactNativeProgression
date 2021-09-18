import { render } from '@testing-library/react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== ""){
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      setTasks((oldState) => [data, ...oldState]);
    }
  }

  function handleToggleTaskDone(id: number) {
    setTasks((oldState) => {
      oldState.forEach( task => task.id == id? task.done = !task.done : false);
      return oldState
    })
  }

  function handleRemoveTask(id: number) {
    setTasks((oldState:Task[]) => oldState.filter(
      task => task.id !== id
    ))
  }

  useEffect(() => {}, [JSON.stringify(tasks)])

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})