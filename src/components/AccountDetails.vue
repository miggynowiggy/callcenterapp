<template>
  <div>
      <v-card>
          <v-card-title class="error white--text">
              Account Details
          </v-card-title>
          <v-container class="pa-5">
              <v-layout align-center justify-start>
                  <v-flex xs5>  
                      <div class="headline primary--text font-weight-bold">Personal Information</div>
                  </v-flex>
              </v-layout>

              <v-layout align-center justify-start wrap mt-3>
                  <v-flex xs3>
                      <v-btn
                        color="error"
                        small depressed rounded
                        :disabled="!account.num"
						@click="showConfirm = true"
                      >
                          Close Account
                          <v-icon small right>fa-trash</v-icon>
                      </v-btn>
                  </v-flex>
                  <v-flex xs3 ml-8>
                      <v-btn
                        @click="toggleEdit"
                        :class="[editForm ? 'error' : 'success']"
                        small depressed rounded
                        :disabled="!account.num"
                      >
                          <span v-if="!editForm">
                              EDIT DETAILS
                              <v-icon right small>fa-edit</v-icon>
                          </span>
                          <span v-else>
                              CANCEL EDIT
                              <v-icon right small>fa-times-circle</v-icon>
                          </span>
                      </v-btn>
                  </v-flex>
                  <v-flex xs5 ml-3>
                      <v-btn
                        color="secondary"
                        small depressed rounded
                        :disabled="!account.num"
                        @click="transferDialog = true"
                      >
                          <span >Transfer Account Details</span>
                          <v-icon small right>fa-exchange-alt</v-icon>
                      </v-btn>
                  </v-flex>
                  <v-flex xs5 mt-3>
                      <v-btn
                        color="primary"
                        small depressed rounded
                        :disabled="!account.num"
                        @click="reportDialog = true"
                      >
                          <span >View Reports and Stats</span>
                          <v-icon small right>fa-eye</v-icon>
                      </v-btn>
                  </v-flex>
                  <v-flex xs5 mt-3>
                      <v-btn
                        color="blue-grey" dark
                        small depressed rounded
                        :disabled="!account.num"    
                        @click="moneyDialog = true"
                      >
                          <span >TRANSFER MONEY</span>
                          <v-icon small right>fa-money-bill</v-icon>
                      </v-btn>
                  </v-flex>
                  
              </v-layout>

              <v-divider class="mt-4"></v-divider>

              <v-layout align-center justify-start wrap mt-4>
                  <v-flex xs12>
                      <div class="body-1 ml-2 font-weight-bold">
                        Account Number:
                        <span class="font-italic error--text">{{ account.num }}</span>
                      </div>
                      
                  </v-flex>
              </v-layout>

              <v-layout align-center justify-start mt-4 wrap>
                  <v-flex xs12 my-2>
                      <div class="body-1 ml-2 font-weight-bold">Account Name</div>
                  </v-flex>
                  <v-flex xs3>
                      <v-text-field
                        v-model="account.lastName"
                        dense outlined rounded
                        label="Last Name"
                        :disabled="!editForm"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs3 ml-5>
                      <v-text-field
                        v-model="account.firstName"
                        dense outlined rounded
                        label="First Name"
                        :disabled="!editForm"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs3 ml-5>
                      <v-text-field
                        v-model="account.middleName"
                        dense outlined rounded
                        label="Middle Name"
                        :disabled="!editForm"
                      ></v-text-field>
                  </v-flex>
              </v-layout>

              <v-layout align-center justify-start mt-3 wrap> 
                <v-flex xs10>
                    <v-textarea
                        v-model="account.address"
                        outlined rounded dense
                        label="Account's Address"
                        :disabled="!editForm"
                    ></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout align-center justify-start mt-3 wrap> 
                <v-flex xs10>
                    <v-textarea
                        v-model="account.branch"
                        outlined rounded dense
                        label="Branch Address"
                        :disabled="!editForm"
                    ></v-textarea>
                </v-flex>
              </v-layout>
              
              <v-layout align-center justify-start mt-2 wrap>
                <v-flex xs10>
                    <v-select
                        v-model="account.type"
                        :items="types"
                        label="Account Type"
                        :disabled="!editForm"
                    ></v-select>
                </v-flex>
              </v-layout>

              <v-layout align-center justify-start mt-2 wrap>
                <v-flex xs10>
                    <v-select
                        v-model="account.status"
                        :items="status"
                        label="Account Status"
                        :disabled="!editForm"
                    ></v-select>
                </v-flex>
              </v-layout>

              <v-layout align-center justify-start mt-2 wrap>
                <v-flex xs10>
                    <v-select
                        v-model="account.maritalStatus"
                        :items="maritalStatus"
                        label="Civil Status"
                        :disabled="!editForm"
                    ></v-select>
                </v-flex>
              </v-layout>
          </v-container>
      </v-card>

     <v-dialog
        v-model="showConfirm"
        persistent
        width="350px"
      >
          <v-card>
            <v-card-title class="error white--text">
                CONFIRM ACCOUNT CLOSURE
				<v-spacer/>
				<v-icon right button @click="showConfirm = !showConfirm">fa-close</v-icon>
            </v-card-title>
			<v-card-text class="subheading mt-4">
				Are you sure you want to close this account?
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					rounded depressed
					color="error"
				>
					CLOSE ACCOUNT
				</v-btn>
				<v-btn
					rounded outlined
					@click="showConfirm = false"
					class="ml-4 mr-3"
				>
					CANCEL
				</v-btn>
			</v-card-actions>
          </v-card>
      </v-dialog>

      <v-dialog
        v-model="reportDialog"
        width="1350px"
      >
        <v-card>
            <v-card-title class="primary white--text font-weight-bold title">
                REPORTS AND STATS
                <v-spacer></v-spacer>
                <v-icon icon color="white" @click="reportDialog = false">close</v-icon>
            </v-card-title>
            <v-container mt-3>
                <v-layout align-center justify-center>
                    <v-flex xs6>
                        <v-card>
                            <v-card-title class="primary white--text font-weight-bold headline">
                                Income and Withdrawal Chart
                            </v-card-title>
                            <v-layout align-center justify-center>
                                <v-flex xs11>
                                    <zingchart :data="chartData"></zingchart>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 offset-xs1>
                        <v-card>
                            <v-card-title class="primary white--text font-weight-bold headline">
                                Expenditure Breakdowns
                            </v-card-title>
                            <v-layout align-start justify-center>
                                <v-flex xs12>
                                    <zingchart :data="chartData2" class="expenses"></zingchart>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout align-start justify-start mt-5>
                    <v-flex xs10>
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
                                        <div v-if="n % 3 == 0">Deposit - 6283-9687-8984 - Anthony Dimalibot Saan</div>
                                        <div v-else>Withdraw - 6283-9687-8984 - Anthony Dimalibot Saan</div>
                                    </v-flex>
                                    <v-flex xs12 my-1>
                                        <v-divider></v-divider>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                    <v-flex xs2 ml-4>
                        <v-layout align-start>
                            <v-card>
                                <v-card-title class="success white--text">TOTAL DEPOSIT</v-card-title>
                                <v-container>
                                    <v-layout>
                                       <div class="font-weight-bold">PHP 60,000</div>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-layout>
                        <v-layout mt-8 align-start>
                            <v-card>
                                <v-card-title class="success white--text">PREDICTION</v-card-title>
                                <v-container>
                                    <v-layout>
                                        <div class="error--text subtitle-1 font-weight-bold">Account should be terminated soon.</div>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center mt-6>
                    <v-btn block rounded color="error" @click="reportDialog = false">
                        CLOSE
                        <v-icon right>close</v-icon>
                    </v-btn>
                </v-layout>
            </v-container>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="transferDialog"
        width="400px"
      >
          <v-card>
              <v-card-title class="secondary white--text font-weight-bold">
                  TRANSFER ACCOUNT DETAILS
              </v-card-title>
              <v-container>
                  <v-layout align-center justify-center wrap>
                      <v-flex xs12>
                          <div class="text-center font-italic font-weight-bold">Enter Account Number to which the details will be transferred...</div>
                      </v-flex>
                      <v-flex xs12 mt-3>
                        <v-autocomplete
                            outlined
                            rounded
                            dense color="secondary"
                            v-model="agent"
                            :items="items"
                            item-text="text"
                            item-value="num"
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs3>
                          <v-btn
                            outlined
                            rounded
                            color="black"
                            @click="transferDialog = false"
                          >
                              CANCEL
                          </v-btn>
                      </v-flex>
                      <v-flex xs3 offset-xs1>
                          <v-btn
                            depressed
                            rounded
                            color="secondary"
                            @click="confirmTransferDetails"
                          >
                              TRANSFER
                          </v-btn>
                      </v-flex>
                  </v-layout>
              </v-container>
          </v-card>
      </v-dialog>

      <v-dialog
        v-model="moneyDialog"
        width="425px"
      >
          <v-card>
              <v-card-title class="blue-grey white--text font-weight-bold">
                  MONEY TRANSFER
              </v-card-title>
              <v-container>
                  <v-layout align-center justify-center wrap>
                      <v-flex xs12>
                          <div class="text-center font-italic font-weight-bold">Enter Reciepients Account Number</div>
                      </v-flex>
                      <v-flex xs12 mt-3>
                        <v-autocomplete
                            v-model="selected"
                            outlined
                            rounded
                            dense color="blue-grey"
                            :items="items"
                            item-text="text"
                            item-value="text"
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs12 v-show="selected">
                          <v-layout align-center justify-center px-2>
                              <v-flex xs3>
                                  <v-avatar size="80">
                                      <v-img src="../assets/10.png"></v-img>
                                  </v-avatar>
                              </v-flex>
                              <v-flex xs10>
                                  <div>
                                      {{ selected }}
                                  </div>
                              </v-flex>
                          </v-layout>
                      </v-flex>
                      <v-divider></v-divider>
                      <v-flex xs3 mt-5>
                          <v-btn
                            outlined
                            rounded
                            color="black"
                            @click="moneyDialog = false"
                          >
                              CANCEL
                          </v-btn>
                      </v-flex>
                      <v-flex xs5 offset-xs1 mt-5>
                          <v-btn
                            depressed
                            rounded dark
                            color="blue-grey"
                            :disabled="!selected"
                            @click="confirmTransfer"
                          >
                              TRANSFER MONEY
                          </v-btn>
                      </v-flex>
                  </v-layout>
              </v-container>
          </v-card>
      </v-dialog>

      <v-overlay
        :value="confirming"
        :color="overlayColor"
        opacity="0.7"
      >
        <v-progress-circular :indeterminate="true" width="7" size="200">
            <div class="font-weight-bold headline">Please wait...</div>
        </v-progress-circular>
      </v-overlay>

      <v-dialog
        v-model="confirmed"
        width="300px"
      >
        <v-card>
            <v-card-title 
                :class="[overlayColor === 'primary' ? 'primary' : 'secondary']"
                class="white--text font-weight-bold headline text-center">{{ dialogHeader }}</v-card-title>
            <v-card-text class="subtitle-1 mt-3">{{dialogMessage}}</v-card-text>
            <v-card-actions class="mt-2">
                <v-btn block :class="[overlayColor === 'primary' ? 'primary' : 'secondary']" depressed @click="confirmed = false">CLOSE</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import zingchartVue from 'zingchart-vue';

export default {
    props: ['account'],
    components: {
        zingchart: zingchartVue,
    },
    data: () => ({
		editForm: false,
        showConfirm: false,
        reportDialog: false,
        transferDialog: false,
        moneyDialog: false,
        verifyAccount: false,
        confirming: false,
        confirmed: false,
        overlayColor: '',
        account: {},
        selected: '',
        types: [
            'Savings',
            'Checking',
            'Credit / Debit',
            'Investment',
            'Dividend/Interest Checking',
            'Money Market',
            'Individual Retirement',
            'Time Deposit',
        ],
        status: [
            'Live',
            'Frozen',
            'Pending',
            'Terminated'
        ],
        maritalStatus: [
            'Single',
            'Married',
            'Divorced',
            'Annuled',
            'Widowed'
        ],
        items: [
            {
                text: '6453-9908-9983 - Mendoza, Juan Miguel',
                lastName: 'Mendoza',
                firstName: 'Juan Miguel',
                middleName: '',
                num: '6453-9908-9983',
                type: 'Savings',
                branch: 'Bacoor City, Cavite',
                address: 'Imus City, Cavite',
                expDate: '10/21/2032',
                status: 'Frozen',
            },
            {
                text: '6453-1132-8654 - Limpin, James ',
                lastName: 'Limpin',
                firstName: 'James',
                middleName: '',
                num: '6453-1132-8654',
                type: 'Credit',
                branch: 'Sampaloc, Manila',
                address: 'BGC, Taguig City',
                expDate: '09/12/2056',
                status: 'Live',
                
            },
            {
                text: '6453-9854-9901 - Bieles, Milkah',
                lastName: 'Bieles',
                firstName: 'Milkah',
                middleName: '',
                num: '6453-9854-9901',
                type: 'Checking',
                branch: 'Legazpi, Makati City',
                address: 'Sampaloc, Manila',
                expDate: '06/18/2069',
                status: 'Pending',
            },
            {
                text: '6453-1324-5768 - Adelante, Joshua',
                lastName: 'Adelante',
                firstName: 'Joshua',
                middleName: '',
                num: '6453-1324-5768',
                type: 'Investment',
                branch: 'Kalaw, Manila',
                address: 'Legazpi Village, Makati',
                expDate: '07/01/2025',
                status: 'Terminated',
            },
            {
                text: '6453-2435-7564 - Reyes, Iyo',
                lastName: 'Reyes',
                firstName: 'Angelo',
                middleName: '',
                num: '6453-2435-7564',
                type: 'Debit',
                branch: 'BGC, Taguig City',
                address: 'Kalaw, Manila',
                expDate: '12/22/2076',
                status: 'Live',
            }
        ],
        chartData: {
            type: "area",
            series: [
                { values: [20000,4000,200500,50000,15000,450000,33000,3400]},
                { values: [500000,300000,210000,180000,590000,50000,280000,33000]},
            ],
            "scale-x": {
                values: "0:10:1",
                "label": {
                    "text": "Date Range",
                    "font-size": "14px",
                    "font-weight": "normal",
                    "offset-x": "10%",
                    "font-angle": 360
                },
            },
            "scale-y": {
                "values": "0:500000:1000",
                "label": {
                    "text": "Amount",
                    "font-size": "8px",
                    "font-weight": "normal",
                    "offset-x": "-10%",
                    "font-angle": 360
                },
            }
        },
        chartData2: {
            type: "ring",
            series: [
                { text: 'Food and Commodities', values: [59]},
                { text: 'Housing', values: [55]},
                { text: 'Education', values: [30]},
                { text: 'Laborers', values: [28]},
                { text: 'Others', values: [15]}
            ],
            plot: {
                'value-box': {
                    placement: 'out',
                    text: '%t\n%npv%',
                    fontFamily: "Open Sans"
                },
                tooltip:{
                    fontSize: '18',
                    fontFamily: "Open Sans",
                    padding: "5 10",
                    text: "%npv%"
                },
            },
        }

    }),
    methods: {
        toggleEdit() {
            this.editForm = !this.editForm;
        },
        confirmTransfer() {
            this.moneyDialog = false;
            this.overlayColor = "primary"
            this.confirming = true;
            setTimeout(() => {
                this.confirming = false;
                this.dialogHeader = "SUCCESS!";
                this.dialogMessage = "Money was transferred successfully to the reciepient."
                
                this.confirmed = true;
            }, 3000);
        },
        confirmTransferDetails() {
            this.transferDialog = false;
            this.overlayColor = "secondary"
            this.confirming = true;
            setTimeout(() => {
                this.confirming = false;
               
                this.dialogHeader = "SUCCESS!";
                this.dialogMessage = "Account Details was transferred successfully to the reciepient."
                this.confirmed = true;
            }, 3000);
        }
    },
    computed: {

    }
}
</script>

<style>
    .expenses {
        width: 300px;
        overflow: hidden;
        margin: 0;
    }
    .expenses svg {
        margin: -80px;
        position: absolute;
        top: 50px;
        left: 25px;
        transform: scale(1.35);
    }
</style>