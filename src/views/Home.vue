<template>  
<v-container>
    <v-layout
      text-xs-center
      wrap
    >
      {{newstring}}
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    newstring () {
	    return this.$store.state.newstring
    }
  }
  
}
</script>