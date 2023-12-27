import { create } from "zustand";
const LocationDataStore = create((set) => ({
  locationData: {
    address: "",
    city: "",
    state: "",
    pincode: "",
  },
}));

export default LocationDataStore;
