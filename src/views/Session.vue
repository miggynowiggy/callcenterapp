	<template>
	<div>
		<div>
			<v-layout align-start justify-start ml-6 mt-4 wrap>
				<v-flex xs5 mt-6>
					<account-table @showDetails="passDetails"></account-table>
				</v-flex>
				<v-flex xs6 ml-12 mt-6>
					<account-details :account="accountDetails"/>
				</v-flex>
			</v-layout>
		</div>
		<div id="container">
			<v-card
				elevation="15"
				color="secondary lighten-4"
				outlined
				id="borderCard"
			>
				<v-container class="justify-center align-center">
					<v-layout align-center justify-start my-3>
						<v-flex xs3 ml-3>
							<v-avatar size="110" class="elevation-4">
								<v-img :src="require('../assets/phoneAvatar.png')"/>
							</v-avatar>
						</v-flex>
						<v-flex xs7>
							<div class="title error--text font-weight-bold text-center">ONGOING CALL</div>
							<div class="headline font-weight-bold text-center black--text lighten-4">Anthony Dimalibot Saan</div>
							<div class="subtitle-1 grey--text text-center font-italic">Acct No: 6283-9687-8984</div>
						</v-flex>
					</v-layout>

					<v-layout align-center justify-center px-3 mt-5>
						<v-flex xs4>
							<v-btn
								color="secondary"
								rounded depressed
								dark small
								@click="openTransferCall"
							>
								<span>TRANSFER CALL</span>
								<v-icon right small>fa-exchange-alt</v-icon> 
							</v-btn>
						</v-flex>
						<v-flex xs4 ml-5>
							<v-btn
								color="primary"
								rounded
								dark small depressed
								@click="$router.push('/session')"
							> 
								<span>RECORD CALL</span>
								<v-icon right small>fa-phone</v-icon> 
							</v-btn>
						</v-flex>
						
						<v-flex xs4 ml-5>
							<v-btn
								color="error"
								rounded depressed
								dark small
								@click="$router.push('/session')"
							> 
								<span>END CALL</span>
								<v-icon right small>fa-phone</v-icon> 
							</v-btn>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</div>
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
		data: () => ({
			accountDetails: {}
		}),
		methods: {
			passDetails(item) {
				this.accountDetails = item;
			}
		}
	}
	</script>

	<style>
		#container {
			z-index: 1;
			position: -webkit-sticky;
			position: sticky;
			bottom: 1rem;
			width: 40%;
		}   
		#borderCard {
			border-radius: 25px;
		}
		#displays {
			position: absolute;
			top: -30px;
		}
	</style>