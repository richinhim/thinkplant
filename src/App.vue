<template>
  <v-app>
    <v-navigation-drawer temporary light absolute v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Think Planting</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'view_agenda', title: 'Create think', link: '/thinkplant/new'},
        {icon: 'view_list', title: 'Planting Thinks', link: '/thinkplants'},
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: 'signin'}
      ]
    }
  },
  name: 'App'
}
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
