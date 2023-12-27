import { create } from "zustand";
const PostPropertyDataStore = create((set) => ({
  propertyData: {
    lookingto: "",
    kindofproperty: "",
    propertytype: "",
    propertysubtype: "",
  },
}));

export default PostPropertyDataStore;
