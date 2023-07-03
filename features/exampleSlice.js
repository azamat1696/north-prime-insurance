import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk for fetching all todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://api.example.com/todos');
    return response.data;
});

// Create an async thunk for creating a todo
export const createTodo = createAsyncThunk('todos/createTodo', async (todo) => {
    const response = await axios.post('https://api.example.com/todos', todo);
    return response.data;
});

// Create an async thunk for updating a todo
export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
    const response = await axios.put(`https://api.example.com/todos/${todo.id}`, todo);
    return response.data;
});

// Create an async thunk for deleting a todo
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todoId) => {
    await axios.delete(`https://api.example.com/todos/${todoId}`);
    return todoId;
});

// Create the todos slice
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const updatedTodo = action.payload;
                const index = state.data.findIndex((todo) => todo.id === updatedTodo.id);
                if (index !== -1) {
                    state.data[index] = updatedTodo;
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const deletedTodoId = action.payload;
                state.data = state.data.filter((todo) => todo.id !== deletedTodoId);
            });
    },
});

export default todosSlice.reducer;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './todosSlice';
import {AnyAction} from "@reduxjs/toolkit";

const TodoList = () => {
    const dispatch  = useDispatch();
    const { data: todos, isLoading, error } = useSelector((state) => state.todos);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleCreateTodo = () => {
        dispatch(createTodo({ title: newTodoTitle }));
        setNewTodoTitle('');
    };

    const handleUpdateTodo = (todo) => {
        dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    };

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <button onClick={handleCreateTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleUpdateTodo(todo)}
                        />
                        {todo.title}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
