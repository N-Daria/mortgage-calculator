import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendForm = createAsyncThunk("...", async (formData) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve();
      const data = JSON.stringify(formData);
      localStorage.setItem("form", data);
    }, 5000);
  });
});

const initialState = {
  formData: {
    price: 0,
    initialFee: 0,
    period: 0,
    monthlyPayment: 0,
    city: "",
    estimateTime: "",
    estateType: "",
    hasEstate: "",
  },
  loading: false,
  error: null,
};

export const formSlice = createSlice({
  name: "mortgageForm",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.formData = action.payload;
    },
    resetForm: (state) => {
      state.formData = {
        price: 0,
        initialFee: 0,
        period: 0,
        monthlyPayment: 0,
        city: "",
        estimateTime: "",
        estateType: "",
        hasEstate: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendForm.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(sendForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateState, resetForm } = formSlice.actions;

export default formSlice.reducer;
