<template>
  <v-card>
    <v-card-title>
      ThinkPlants
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.content }}</td>
        <td class="text-xs-left">{{ props.item.ispublic }}</td>
        <td class="text-xs-left">{{ props.item.tag }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Title',
            align: 'left',
            sortable: false,
            value: 'title'
          },
          { text: 'Content', value: 'content' },
          { text: 'IsPublic', value: 'ispublic' },
          { text: 'Tag', value: 'tag' }
        ],
        items: this.$store.getters.loadedThinkPlants
      }
    },
    computed: {
      thinkplants () {
        console.log('ThinkPlants => thinkplants')
        return this.$store.getters.loadedThinkPlants
      }
    }
  }
</script>
