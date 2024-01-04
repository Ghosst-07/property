import { create } from "zustand";

const useGlobalStore = create((set) => ({
  step: 0,
  addOneStep: () => set((state) => ({ step: state.step + 1 })),
  subtractOneStep: () => set((state) => ({ step: state.step - 1 })),
}));

export default useGlobalStore;
