<template>
  <div>
      <v-container fluid fill-height>
          <v-layout align-center justify-center class="textHeader">
            <v-overlay value="true" z-index="-1">
                <v-img 
                    :src="require('@/assets/bg.jpg')"
                    alt="plmBG"
                    gradient="to top right, rgba(16,156,241,.33), rgba(4,193,219,.7)"
                    height="100vh"
                    width="100vw"
                ></v-img>
            </v-overlay>
            <v-flex xs4>
                <v-card
                    width="400px"
                    elevation="12"
                    id="card"
                    hover
                >
                    <v-card-title class="primary white--text font-weight-bold">
                        <v-layout align-center justify-center>
                            <v-flex xs3>
                                <v-avatar icon size="80" color="white" class="elevation-6">
                                    <v-icon icon size="50" color="primary">fa-university</v-icon>
                                </v-avatar>
                            </v-flex>
                            <v-flex xs6 offset-xs1>
                                <div class="headline font-weight-bold white--text">AGENT LOGIN</div>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-container>
                        <v-layout align-center justify-center mt-4>
                            <v-flex xs10>
                                <v-text-field
                                    v-model="username"
                                    dense outlined rounded
                                    label="Username"
                                    append-icon="account_circle"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center justify-center>
                            <v-flex xs10>
                                <v-text-field 
                                    label="Password" 
                                    v-model="password"
                                    :append-icon="toggle ? 'visibility_off' : 'visibility'"
                                    :type="toggle ? 'text' : 'password'"
                                    @click:append="toggle = !toggle"
                                    outlined dense rounded
                                ></v-text-field>    
                            </v-flex>
                        </v-layout>
                        <v-divider/>
                        <v-layout align-center justify-center mt-3>
                            <v-flex xs6>
                                <v-btn
                                    color="primary"
                                    rounded flat
                                    large block
                                    :loading="loading"
                                    :disabled="loading"
                                    @click="login"
                                >
                                    <div class="font-weight-bold">LOGIN</div>
                                    <v-icon>fa-</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container> 
  </div>
</template>

<script>
export default {
    data: () => ({
        toggle: false,
        loading: false
    }),
    methods: {
        login() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$router.push('/dashboard');
            }, 4000);
        }
    },
}
</script>

<style>
    .textHeader {
        z-index: 3;
        margin-top: 1.5em;
    }
    #card {
        position: absolute;
        left: 38%;
        top: 26vh;
        border-radius: 25px;
    }
</style>