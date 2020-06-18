<template>
  <div class="home">
    <v-layout align-center justify-start mt-3>
      <v-flex xs3>
        <v-card
          color="primary"
          height="120px"
        >
          <v-container>
            <v-layout align-center justify-start mb-4>
              <v-flex xs8 mt-2>
                <div class="white--text font-weight-bold headline">RECIEVED CALLS</div>
                <div class="display-2 white--text ml-3">100</div>
              </v-flex>
              <v-flex xs2 ml-4>
                <v-avatar size="70" color="white" icon class="elevation-6">
                  <v-icon size="40" color="primary">fas fa-phone-alt</v-icon>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs3 ml-5>
        <v-card
          color="secondary"
          outlined
          elevation="2"
          height="120px"
        >
          <v-container>
            <v-layout align-center justify-start mb-4>
              <v-flex xs8 mt-2>
                <div class="white--text lighten-3 font-weight-bold headline">CLOSED DEALS</div>
                <div class="display-2 white--text ml-3">50</div>
              </v-flex>
              <v-flex xs2 ml-4>
                <v-avatar size="70" color="white" icon class="elevation-6">
                  <v-icon size="40" color="secondary">fas fa-handshake</v-icon>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs3 ml-5>
        <v-card
          color="error"
          height="120px"
        >
          <v-container>
            <v-layout align-center justify-start mb-4>
              <v-flex xs8 mt-2>
                <div class="white--text font-weight-bold headline">PENDING CASES</div>
                <div class="display-2 white--text">10</div>
              </v-flex>
              <v-flex xs2 ml-4>
                <v-avatar size="70" color="white" icon class="elevation-6">
                  <v-icon size="40" color="error">fas fa-spinner</v-icon>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider class="my-4"></v-divider>
    <v-container 
      fluid 
      class="fill-height" 
    >
      <v-layout>
        <v-flex xs7 d-flex justify-start>
          <v-layout wrap>
            <v-flex xs12>
              <v-card class="pa-2">
                <v-container>
                  <zingchart :data="chartData"></zingchart>    
                </v-container>  
              </v-card>
              
            </v-flex>
            <v-flex xs12 ml-7 mt-4>
              <v-card>
                <v-card-title class="secondary white--text font-weight-bold">TRANSACTION LOGS</v-card-title>
                <v-container>
                  <v-layout align-center justify-start
                    v-for="n in 8" :key="n" wrap
                  >
                    <v-flex xs4>
                      <div>02/{{ 20 + n }}/2020</div>
                    </v-flex>
                    <v-flex xs8>
                      <div>Call - 535645664 - Anthony Di Kolam</div>
                    </v-flex>
                    <v-flex xs12 my-1>
                      <v-divider></v-divider>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs2 offset-xs1 d-flex align-start justify-start>
          <v-card
            outlined
            elevation="2"
            height="57vh"
            width="200px"
          >
            <v-card-title class="title font-weight-bold success white--text">
              <v-layout>
                <v-flex xs10>
                  TO-DO
                </v-flex>
                <v-flex xs1>
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                       <v-icon color="white" size="20" v-on="on">fa-plus-square</v-icon>
                    </template>
                    <span>Add TO-DO</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-card-title>

            <v-card-text>
              <div
                v-for="i in 10"
                :key="i"
                class="mt-2"
              >
                - Do something here ({{ i }})
                <div>
                  <v-divider class="my-1"></v-divider>
                </div>
              </div> 
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3 ml-6 d-flex align-start justify-end>
          <v-card
            color="grey lighten-4"
            width="260px"
            height="83vh"
            elevation="6"
          >
            <v-card-title class="font-weight-bold primary white--text">CONTACT LIST</v-card-title>
            <v-container>
              <v-layout
                v-for="(name, i) in emails"
                :key="name"
                mt-3
                wrap
                align-center justify-start
              >
                <v-flex xs1>
                  <v-avatar size="20" icon
                    :class="[i % 2 === 0 ? 'green' : 'yellow']"
                  >
                    <v-img :src="avatarURL(i)"/>
                  </v-avatar>
                </v-flex>

                <v-flex xs8 ml-2>
                  <div class="body-2">{{ name }}</div>
                </v-flex>

                
                <v-flex xs1>
                  <v-tooltip top color="error">
                    <template v-slot:activator="{ on }">
                      <v-icon color="error" small v-on="on">fa-phone-alt</v-icon>
                    </template>
                    <span>Call {{ name }}</span>
                  </v-tooltip>
                </v-flex>

                <v-flex xs1 ml-2>
                  <v-tooltip top color="primary">
                    <template v-slot:activator="{ on }">
                     <v-icon color="primary" v-on="on" small>fa-comments</v-icon>
                    </template>
                    <span>Chat {{ name }}</span>
                  </v-tooltip>
                  
                </v-flex>

                <v-flex xs12 my-2>
                  <v-divider/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-layout align-center justify-center mt-6>
      <v-flex xs2>
        <p class="font-italic caption" @click="openDialog">trigger incoming call</p>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      width="400px"
      persistent
    >
      <v-card>
        <v-container align-center>
          <v-layout align-center justify-center mt-4>
            <v-flex xs6>
              <div class="headline error--text font-weight-bold">INCOMING CALL</div>
            </v-flex>
          </v-layout>
          
          <v-layout align-center justify-center mt-7>
            <v-flex xs6>
              <v-avatar size="170" class="elevation-4">
                <v-img :src="require('../assets/phoneAvatar.png')"/>
              </v-avatar>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-7>
            <v-flex xs10>
              <div class="title text-center">Anthony Dimalibot Saan</div>
              <div class="subtitle-1 grey--text text-center font-italic">Acct No: 6283-9687-8984</div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-10 mb-4>
            <v-flex xs6>
              <v-btn
                color="error"
                rounded
                dark
                @click="openTransferCall"
              >
                <span>TRANSFER CALL</span>
                <v-icon right>fa-phone-slash</v-icon> 
              </v-btn>
            </v-flex>
            <v-flex xs6 ml-7>
              <v-btn
                color="success"
                rounded
                dark
                @click="$router.push('/session')"
              > 
                <span>ANSWER CALL</span>
                <v-icon right>fa-phone</v-icon> 
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="transferDialog"
      persistent
      width="400px"
    >
      <v-card>
        <v-card-title class="error white--text font-weight-bold">TRANSFER CALL TO</v-card-title>
        <v-container mt-4>
          <v-layout align-center justify-center wrap>
            <v-flex xs11>
              <v-autocomplete
                outlined
                rounded
                dense
                label="Agent's Email"
                placeholder="Email of the agent to receive the transfer..."
                v-model="agent"
                :items="emails"
              ></v-autocomplete>
            </v-flex>
            <v-flex xs6>
              <v-btn
                color="success"
                @click="transferCall"
              >
                TRANSFER CALL
                <v-icon right>fa-paper-plane</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <v-overlay
      :value="transferWaiting"
      color="grey darken-2"
      dark
      opacity="0.80"
      transition="scale-transition"
    >
      <v-layout align-center justify-center row>
        <v-flex xs5>
          <v-progress-circular 
            size="150" 
            :indeterminate="transferWaiting"
            width="8"  
          >
            <v-icon size="90">fa-exclamation</v-icon>
          </v-progress-circular>
        </v-flex>
      </v-layout>
      
      <v-layout align-center justify-center mt-5>
        <v-flex xs12>
          <div class="title font-weight-bold">
            Please wait as the call is now being transffered...
          </div>
        </v-flex>
      </v-layout>
    </v-overlay>

    <v-overlay
      :value="callConfirmation"
      color="success darken-2"
      opacity="0.80"
      transition="scale-transition"
    >
      <v-layout align-center justify-center>
        <v-flex xs4>
          <v-icon size="100">fa-check-circle</v-icon>
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center mt-5>
        <v-flex xs12>
          <div class="title font-weight-bold">
            Call has been transferred successfully!
          </div>
        </v-flex>
      </v-layout>
    </v-overlay>
  </div>
</template>

<script>
import zingchartVue from 'zingchart-vue';

export default {
  name: 'Home',
  components: {
    zingchart: zingchartVue,
  },
  data() {
    return {
      dialog: false,
      transferDialog: false,
      transferWaiting: false,
      callConfirmation: false,
      agent: '',
      emails: [
        'mendoza@mail.com',
        'limpin@mail.com',
        'reyes@mail.com',
        'adelante@mail.com',
        'bieles@mail.com',
        'iyo@mail.com',
        'miggy@mail.com',
        'joshua@mail.com',
        'milkah@mail.com',
        'james@mail.com'
      ],
      chartData: {
        "type": "area",
        "background-color": "#fff",
        "utc": true,
        "title": {  
            "y": "15px",
            "text": "My Teleco Performance",
            "background-color": "none",
            "font-color": "#05636c",
            "font-size": "24px",
            "height": "25px",
            "adjust-layout":true
        },
        "plotarea": {
            "margin-top":"10%",
            "margin-right":"dynamic",
            "margin-bottom":"dynamic",
            "margin-left":"dynamic",
            "adjust-layout":true
        },
        "labels": [
            {
                "text": "Incoming Calls: %plot-0-value",
                "default-value": "1202",
                "color": "#8da0cb",
                "x": "25%",
                "y": 50,
                "width": 120,
                "text-align": "left",
                "bold": 0,
                "font-size": "14px",
                "font-weight": "bold"
            },
            {
                "text": "Outgoing Calls: %plot-1-value",
                "default-value": "1904",
                "color": "#66c2a5",
                "x": "55%",
                "y": 50,
                "width": 120,
                "text-align": "left",
                "bold": 0,
                "font-size": "14px",
                "font-weight": "bold",
            },
        ],
        "scale-x": {
            "label": {
                "text":"Date Range",
                "font-size": "14px",
                "font-weight": "normal",
                "offset-x": "10%",
                "font-angle": 360
            },
            "item": {
                "text-align": "center",
                "font-color": "#05636c"
            },
            "zooming": 1,
            "max-labels": 12,
            "labels": [
                "Feb<br>19",
                "Feb<br>20",
                "Feb<br>21",
                "Feb<br>22",
                "Feb<br>23",
                "Feb<br>24",
                "Feb<br>25",
                "Feb<br>26",
                "Feb<br>27",
                "Feb<br>28",
                "Feb<br>29",
                "Feb<br>30"
            ],
            "max-items": 12,
            "items-overlap": true,
            "guide": {
                "line-width": "0px"
            },
            "tick": {
                "line-width": "2px"
            },
        },
        "crosshair-x": {
            "line-color":"#fff",
            "line-width":1,
            "plot-label": {
                "visible": false
            }
        },
        "scale-y": {
            "values": "0:2500:500",
            "item": {
                "font-color": "#05636c",
                "font-weight": "normal"
            },
            "label":{
              "text":"Metrics",
              "font-size":"14px"
            },
            "guide": {
                "line-width": "0px",
                "alpha": 0.2,
                "line-style": "dashed"
            }
        },
        "plot": {
            "line-width": 2,
            "marker": {
                "size": 1,
                "visible": false
            },
            "tooltip": {
                "font-family": "Roboto",
                "font-size": "15px",
                "text": "There were %v %t on %data-days",
                "text-align": "left",
                "border-radius":5,
                "padding":10
            }
        },
        "series": [
            {
                "values": [
                    1204,
                    1179,
                    1146,
                    1182,
                    1058,
                    1086,
                    1141,
                    1105,
                    1202,
                    992,
                    373,
                    466
                ],
                "data-days": [
                    "Feb 19",
                    "Feb 20",
                    "Feb 21",
                    "Feb 22",
                    "Feb 23",
                    "Feb 24",
                    "Feb 25",
                    "Feb 26",
                    "Feb 27",
                    "Feb 28",
                    "Feb 29",
                    "Feb 30"
                ],
                "line-color": "#fc8d62",
                "aspect": "spline",
                "background-color": "#fc8d62",
                "alpha-area": ".3",
                "font-family": "Roboto",
                "font-size": "14px",
                "text": "incoming calls"
            },
            {
                "values": [
                    1625,
                    1683,
                    1659,
                    1761,
                    1904,
                    1819,
                    1631,
                    1592,
                    1498,
                    1594,
                    1782,
                    1644
                ],
                "data-days": [
                    "Feb 19",
                    "Feb 20",
                    "Feb 21",
                    "Feb 22",
                    "Feb 23",
                    "Feb 24",
                    "Feb 25",
                    "Feb 26",
                    "Feb 27",
                    "Feb 28",
                    "Feb 29",
                    "Feb 30"
                ],
                "line-color": "#66c2a5",
                "background-color": "#66c2a5",
                "alpha-area": ".3",
                "text": "outgoing calls",
                "aspect": "spline",
                "font-family": "Roboto",
                "font-size": "14px"
            },
        ]
      }
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },

    openTransferCall() {
      this.dialog = false;
      this.transferDialog = true;
    },

    transferCall() {
      this.transferDialog = false;
      this.transferWaiting = true;
      setTimeout(() => {
          this.transferWaiting = false;
          this.callConfirmation = true;
      }, 4000);
      setTimeout(() => {
          this.callConfirmation = false;
      }, 8000);
    },

    avatarURL(n) {
      return `'@/assets/${n + 1}.png'`
    }
  },
}
</script>
