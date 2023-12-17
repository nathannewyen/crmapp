import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeads = createAsyncThunk('leads/fetch', async (page = 1) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return {
        data: response.data.data,
        totalCount: response.data.total,
    };
});

export const addLead = createAsyncThunk(
    'leads/add',
    async (lead) => {
        const response = await axios.post('https://reqres.in/api/users', lead);
        return response.data;
    }
);

export const updateLead = createAsyncThunk(
    'leads/update',
    async (lead) => {
        const response = await axios.put(`https://reqres.in/api/users/${lead.id}`, lead);
        return response.data;
    }
);

export const deleteLead = createAsyncThunk(
    'leads/delete',
    async (id) => {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        return id;
    }
);

const leadsSlice = createSlice({
    name: 'leads',
    initialState: {
        loading: false,
        leads: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeads.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLeads.fulfilled, (state, action) => {
                state.loading = false;
                state.leads = action.payload;
            })
            .addCase(fetchLeads.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default leadsSlice.reducer;