<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'auth-layout')
    }
  }
}
</script>

<template>
  <component v-bind:is="layout"></component>
</template>

