<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { Button } from '@/components/ui/button'

useHead({ title: 'about page' })
const router = useRouter()
</script>

<template>
  <p>About Page</p>
  <Button @click="router.push('/')">button to home</Button>
</template>
