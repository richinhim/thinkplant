<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
         <v-carousel-item
          v-for="(thinkplant,i) in thinkplants"
          :key="thinkplant.id"
          v-on:click.native="onLoadThinkPlant(thinkplant.id)">
          <div class="title">
              {{ thinkplant.content }}
          </div>
        </v-carousel-item>
       </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Create Think Planting</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    thinkplants () {
      return this.$store.getters.featuredThinkPlants
    }
  },
  methods: {
    onLoadThinkPlant (id) {
      console.log('onLoadThinkPlant=>' + id)
      this.$router.push('/thinkplants/' + id)
    }
  }
}
</script>
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
