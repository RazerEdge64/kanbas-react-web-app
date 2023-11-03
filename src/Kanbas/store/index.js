import { configureStore } from "@reduxjs/toolkit";
import ModulesReducer from "../Courses/Modules/ModulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentReducer";


const store = configureStore({
  reducer: {
    ModulesReducer,
    assignmentReducer
  }
});


export default store;