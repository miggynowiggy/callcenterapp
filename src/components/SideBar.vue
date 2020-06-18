<template>
  <v-card
    width="250px"
    height="100vh"
  >
    <v-navigation-drawer 
        permanent
        app
        link
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline primary--text font-weight-bold">
                    Call Center<br> 
                    Management App
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list
            dense 
            nav
        >
            <v-list-item
                v-for="item in items" 
                :key="item.name"
                :to="{name: item.link}"
                link
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

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>settings</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Settings
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {name: 'Dashboard', icon: 'dashboard', link: 'Home'},
                {name: 'Accounts', icon: 'supervised_user_circle', link: 'Accounts'},
                {name: 'Chats', icon: 'question_answer', link: 'Chats'}
            ]    
        }
    },
    methods: {
        
    },
    computed: {
        
    },
}
</script>

<style>

</style>