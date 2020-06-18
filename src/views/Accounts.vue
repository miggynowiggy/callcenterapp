<template>
  <div>
    <v-layout align-start justify-start ml-3 mt-10>
      <v-flex xs5>
        <account-table @showDetails="passDetails"/>
      </v-flex>
      <v-flex xs6 ml-11>
        <account-details :account="accountDetails"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AccountTable from '../components/AccountTable.vue';
import AccountDetails from '../components/AccountDetails.vue';

export default {
  
  components: {
    AccountTable,
    AccountDetails,
  },  
  data() {
      return {
          accountDetails: {},
      }
  },
  methods: {
      passDetails(item) {
        this.accountDetails = item;
      },

  },
}
</script>

<style>

</style>