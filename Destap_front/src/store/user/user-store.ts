import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { IUser } from '@/interfaces/user'

type UserStore = {
  user: IUser;
  setUser: (user: IUser) => void;
  clearUser: () => void;
};

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: {
        userId: '',
        email: '',
        fullName: '',
        paymentMethods: [],
      },
      setUser: (user) => set({ user }),
      clearUser: () => set({ 
        user: { userId: '', email: '', fullName: '', paymentMethods: [] },
      }),
    }),
    {
      name: 'user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useUserStore;