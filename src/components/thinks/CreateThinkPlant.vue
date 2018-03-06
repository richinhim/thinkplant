<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text"> Create a new Think Plant</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateThinkPlant">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Title of Think</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                name="title"
                label="Insert a new Title of Think"
                v-model="title"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Content</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                name="content"
                label="Insert a new Contents of Think"
                class="input-group--focused"
                multi-line
                v-model="content"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>IsPublic</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-checkbox
              :label="`공개여부: ${ispublic.toString()}`"
              v-model="ispublic"
              >
              </v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Tag</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                name="tag"
                label="Insert Tag"
                single-line
                v-model="tag"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
              :disabled="!formIsValid"
              type="submit">Create ThinkPlant
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
 export default {
   data () {
     return {
       title: '',
       content: '',
       ispublic: true,
       tag: ''
     }
   },
   computed: {
     formIsValid () {
       return this.title !== '' && this.content !== ''
     }
   },
   methods: {
     onCreateThinkPlant () {
       if (!this.formIsValid) {
         return
       }
       const thinkplantData = {
         title: this.title,
         content: this.content,
         ispublic: this.ispublic,
         tag: this.tag
       }
       this.$store.dispatch('createThinkPlant', thinkplantData)
       this.$router.push('/thinkplants')
     }
   }
 }
</script>
