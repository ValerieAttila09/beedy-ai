import { create } from 'zustand';

type DocsState = { isOpen: boolean };

type DocsActions = { toggleDocsSidebar: () => void };

export const useDocsSidebarStore = create<DocsState & DocsActions>((set) => ({
  isOpen: false,
  toggleDocsSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
