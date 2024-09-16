import blogReducer from "./reducers/blogReducer";
import homeReducer from "./reducers/homeReducer";
import projectReducer from "./reducers/projectReducer";
const rootReducers = {
  home: homeReducer,
  project: projectReducer,
  blog: blogReducer,
};
export default rootReducers;
