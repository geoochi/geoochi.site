<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/store'
import { ref } from 'vue'

useHead({ title: 'about page' })
const router = useRouter()
const store = useUserStore()
const userEmail = ref('')
</script>

<template>
  <p>About Page</p>
  <Button @click="router.push('/')">button to home</Button>
  <p>pinia user: {{ store.user }}</p>
  <div class="flex gap-2 items-center">
    <input type="text" name="email" id="email" v-model="userEmail" class="border border-gray-300 rounded-md p-2" />
    <Button @click="() => store.setUser({ email: userEmail })">change email</Button>
  </div>
</template>
