import { defineStore } from 'pinia'

interface User {
  name?: string
  email?: string
}

interface UserState {
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
  }),
  getters: {
    isReady(state) {
      return !!state.user
    },
  },
  actions: {
    setUser(user: User) {
      const params = { ...this.user, ...user }
      this.user = params
    },
    initialize() {
      if (this.isReady) return
      this.user = {
        name: 'John Doe',
        email: 'john@doe.com',
      }
    },
  },
})
