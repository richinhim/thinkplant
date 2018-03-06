<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Think Plant Description</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Title" v-model="editedItem.title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Content" v-model="editedItem.content" multi-line></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-checkbox
                label="공개여부"
                v-model="editedItem.ispublic"
                >
                </v-checkbox>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Tag" v-model="editedItem.tag"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.content }}</td>
        <td class="text-xs-right">{{ props.item.ispublic }}</td>
        <td class="text-xs-right">{{ props.item.tag }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Content', value: 'content' },
        { text: 'IsPublic', value: 'ispublic' },
        { text: 'Tag', value: 'tag' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        title: '',
        content: '',
        ispublic: true,
        tag: ''
      },
      defaultItem: {
        id: 0,
        title: '',
        content: '',
        ispublic: false,
        tag: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.items = this.$store.getters.loadedThinkPlants
      },

      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
          this.$store.dispatch('updateThinkPlantData', {
            id: this.editedItem.id,
            title: this.editedItem.title,
            content: this.editedItem.content,
            ispublic: this.editItem.ispublic
          })
        }
        this.close()
      }
    }
  }
</script>
