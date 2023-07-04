import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// redux toolkit
const initialState = {
    content: null,
    loading: false,
    error: '',
}

export const fetchContent =  createAsyncThunk( "content/fetchContent",async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posdts');
    return await response.json();
})
export const postContent =  createAsyncThunk( "content/postContent",async (data) => {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();
})
const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.loading = false;
            state.content = action.payload;
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        // post content
/*
        builder.addCase(postContent.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(postContent.fulfilled, (state, action) => {
            state.loading = false;
            state.content = action.payload;
        })
        builder.addCase(postContent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })*/
    }

})
export default contentSlice.reducer;

