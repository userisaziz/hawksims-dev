import { createSlice } from "@reduxjs/toolkit";
import { accordionData } from "@/components/Footer/FooterData";
const headerSlice = createSlice({
  name: "header",
  initialState: {
    suppressHeader: false,
    footerLinkClickedOnSameRoute:false,
    footerNavigationData:accordionData,
    subHeaderActiveIndex:0 , 
    isSubHeaderNavigationClicked:false
  },
  reducers: {
    setSuppressHeader: (state, action) => {
      state.suppressHeader = action.payload;
    },
    setFooterLinkClickedOnSameRoute:(state , action) =>{
      state.footerLinkClickedOnSameRoute=action.payload;
    },
    setFooterDataNavigation:(state , action)=>{
      state.footerNavigationData=action.payload;
    },
    setSubHeaderActiveIndex:(state , action)=>{
      state.subHeaderActiveIndex=action.payload;
    },
    setSubHeaderNavigationClicked:(state , action)=>{
      state.isSubHeaderNavigationClicked=action.payload;
    }
  },
});

export const { setSuppressHeader , setFooterLinkClickedOnSameRoute , setFooterDataNavigation , setSubHeaderActiveIndex , setSubHeaderNavigationClicked } = headerSlice.actions;
export default headerSlice.reducer;