<template>
  <div>
      <v-card
        class="elevation-6"
      >
          <v-card-title class="display-1 font-weight-bold primary white--text">
              Bank Account Directory
          </v-card-title>
          
          <v-layout align-center justify-start mt-5 ml-3>
            <v-flex xs10>
                <v-text-field
                    v-model="search"
                    outlined
                    dense
                    rounded
                    placeholder="Enter any details of the account to be searched..."
                    append-icon="search"
                ></v-text-field>
            </v-flex>    
          </v-layout>

          <v-divider/>

          <v-container>
              <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
              >
                <template v-slot:body="{ items }">
                    <tbody>
                        <tr
                            v-for="item in items" :key="item.num"
                            :class="[item.status === 'Frozen' || item.status === 'Terminated' ? 'red lighten-4' : '']"
                            @click="displayRow(item)"
                        >
                            <td>
                                {{ item.firstName }} {{ item.middleName.charAt(0) }} {{ item.lastName }}
                            </td>
                            <td>
                                {{ item.num }}
                            </td>
                            <td>
                                {{ item.type }}
                            </td>
                            <td>
                                {{ item.expDate }}
                            </td>
                            <td>
                                {{ item.status }}
                            </td>
                        </tr>
                    </tbody>
                </template>
              </v-data-table>
          </v-container>
      </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Name',
                align: 'left',
                sortable: 'true',
                value: 'name'
            },
            { text: 'Account Number', sortable: 'true', value: 'num' },
            { text: 'Account Type', value: 'type' },
            { text: 'Expiry Date', value: 'expDate' },
            { text: 'Status', value: 'status' }
        ],
        items: [
            {
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
    }),
    methods: {
        displayRow(item) {
            console.log(item);
            this.$emit('showDetails', item);
        }
    },
    computed: {

    }
}
</script>

<style>

</style>