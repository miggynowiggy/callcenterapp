<template>
  <v-app>
    <v-navigation-drawer 
        v-if="showNav"
        permanent
        app
        link
        class="elevation-6"
        color="primary"
        dark
        width="230px"
    >
        <v-list-item class="white--text dark">
            <v-list-item-content>
                <v-list-item-title class="headline font-weight-bold">
                    Call Center<br> 
                    Management App
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="px-3"/>

        <digiClock class="pl-3"/>
        
        <v-divider class="mt-2"/>

        <v-layout align-center justify-center pa-3 my-3>
            <v-flex xs5>
                 <v-avatar icon color="white" size="80" class="elevation-3">
                    <v-img :src="avatarImg"/>
                </v-avatar> 
            </v-flex>
            <v-flex xs7 ml-2>
                <v-layout>
                    <span class="font-weight-bold">Juan Dela Cruz</span>
                </v-layout>
            </v-flex>
        </v-layout>

        <v-list
            dense 
            nav
        >
            <v-list-item
                v-for="item in items" 
                :key="item.name"
                :to="{name: item.link}"
                link
                exact
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    {{ item.name }}
                </v-list-item-title>
            </v-list-item>
            
            <v-divider></v-divider>
            <v-spacer></v-spacer>

            <v-list-item
                :to="{name: 'Settings'}"
                link
                exact
            >
                <v-list-item-icon>
                    <v-icon>settings</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Settings
                </v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list-item
                :to="{name: 'Login'}"
                link
                exact
            >
                <v-list-item-icon>
                    <v-icon>fa-sign-out-alt</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Logout
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    
    <v-content>
      <router-view class="pa-3"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import digiClock from '@/components/digiClock.vue';
import Vue from 'vue';
import zingchartVue from 'zingchart-vue';

Vue.component('zingchart', zingchartVue);

export default {
  name: 'App',

  components: {
    digiClock
  },

  data: () => ({
    items: [
        {name: 'Dashboard', icon: 'dashboard', link: 'Home'},
        {name: 'Accounts', icon: 'supervised_user_circle', link: 'Accounts'},
        //{name: 'Logout', icon: 'fa-sign-out-alt', link: 'Login'}
    ] 
  }),
  methods: {

  },
  computed: {
      avatarImg() {
        return require('@/assets/avatar.png');
      },
      showNav() {
        let URL = this.$route.name;
        console.log(URL);
        return URL === 'Login' ? false : true;
      }
  }
};
</script>
