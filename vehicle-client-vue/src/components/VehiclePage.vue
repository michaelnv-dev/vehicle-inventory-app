<template>
  <div class="single-vehicle">
  	<div v-if="loaded">
	   	<div class="card">
	      <div class="card-header up-card">
	        Vehicle details
	      </div>
	      <div class="card-body">
	      	<p >ID: {{vehicleId}}</p>
	        <p >Vehicle Name: {{vehicleName}}</p>
	        <p >Vehicle Type: {{vehicleType}}</p>
	        <p >Date created: {{new Date(vehicleTimestamp * 1000) | moment('MM/DD/YYYY')}}</p>
	        <p >Last connection: {{ new Date(vehicleConn * 1000) | moment('MM/DD/YYYY')}}</p>
	        <router-link :to="'/'" class="btn btn-primary"> Back </router-link>
	      </div>
		</div>
    </div>
    <div v-else> 
    	<h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import db from '@/db';
import axios from 'axios';

export default {
  name: 'VehiclePage',
  data () {
    return {
    	vehicleId:'',
    	vehicleName: '',
    	vehicleType: '',
    	vehicleTimestamp: '',
    	vehicleConn: '',
    	loaded: false
    }
  },
  beforeCreate (){
axios.get('http://18.223.149.16:3000/vehicles/' + this.$route.params.id)
        .then(response => {
					this.vehicleId = this.$route.params.id;
	        this.vehicleName = response.data.name;
	        this.vehicleType = response.data.type;
	        this.vehicleTimestamp = response.data.timestamp;
	        this.vehicleConn = response.data.last_successful_connection;
	        this.loaded = true;
        });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

</style>
