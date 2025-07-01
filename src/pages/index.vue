<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/store'

useHead({ title: 'home page' })
const count = ref(0)
const store = useUserStore()
const userName = ref('')
</script>

<template>
  <p>Home Page</p>
  <RouterLink to="/about" class="underline">link to about</RouterLink>
  <Button @click="count++">count: {{ count }}</Button>
  <p>pinia user: {{ store.user }}</p>
  <div class="flex gap-2 items-center">
    <input type="text" name="username" id="username" v-model="userName" class="border border-gray-300 rounded-md p-2" />
    <Button @click="() => store.setUser({ name: userName })">change username</Button>
  </div>
</template>
