<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({ title: 'home page' })
</script>

<template>
  <p>Home Page</p>
  <RouterLink to="/about" class="underline">link to about</RouterLink>
</template>
