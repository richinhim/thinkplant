<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">{{ thinkplant.title}}</h4>
          </v-card-title>
          <v-card-text>
            <div>
              {{thinkplant.content}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    props: ['id'],
    computed: {
      thinkplant () {
        console.log('thinkplant single')
        return this.$store.getters.loadedThinkPlant(this.id)
      }
    }
  }
</script>
