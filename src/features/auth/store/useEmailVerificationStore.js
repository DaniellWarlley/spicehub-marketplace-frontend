import { create } from 'zustand'

const useEmailVerificationStore = create((set) => ({
    email: '',

    setEmail: (email) => set({email}),

    clearEmail: () => set({email})
}))

export default useEmailVerificationStore