<template>  
<v-container>
    <v-layout
      text-xs-center
      wrap
    >
    <v-flex xs12 sm6 md3>
          <v-text-field
            label="Insert new text"
            v-model="userinput"
          ></v-text-field>
        </v-flex>
    
      <v-btn fab dark color="indigo" @click="storetext()">
      <v-icon dark>add</v-icon>
    </v-btn>
      {{newstring}}
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data:()=>({
      userinput:''
    }),
    computed: {
    newstring () {
	    return this.$store.state.newstring
    }
  },
  methods: {
    storetext(){
      this.$store.commit('storetext', this.userinput)
    }
  }
}
</script>