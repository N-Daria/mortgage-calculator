import { createSlice } from "@reduxjs/toolkit";

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
};

export const formSlice = createSlice({
  name: "mortgageForm",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.formData.price = action.payload;
    },
    setInitialFee: (state, action) => {
      state.formData.initialFee = action.payload;
    },
    setPeriod: (state, action) => {
      state.formData.period = action.payload;
    },
    setMonthlyPayment: (state, action) => {
      state.formData.monthlyPayment = action.payload;
    },
    setCity: (state, action) => {
      state.formData.city = action.payload;
    },
    setEstimateTime: (state, action) => {
      state.formData.estimateTime = action.payload;
    },
    setEstateType: (state, action) => {
      state.formData.estateType = action.payload;
    },
    setHasEstate: (state, action) => {
      state.formData.hasEstate = action.payload;
    },
  },
});

export const {
  setPrice,
  setInitialFee,
  setPeriod,
  setMonthlyPayment,
  setCity,
  setEstimateTime,
  setEstateType,
  setHasEstate,
} = formSlice.actions;

export default formSlice.reducer;
