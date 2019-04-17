<template>
  <div class="vehicles">
    <h3></h3>
    <div class="card">
      <div class="card-header up-card">Add a new vehicle</div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">

          <div class="form-group">
            <label>Name</label>
            <input
              v-model="vehicleData.name"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            >
          </div>
          <div class="form-group">
            <label>Type</label>
            <select v-model="vehicleData.type" class="form-control ml-sm-2 mr-sm-4 my-2">
              <option >SUV</option>
              <option>Truck</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div class="form-group form-input-el">
            <label>Connection date</label>
            <datepicker placeholder="Select Date" v-model="vehicleData.conn" class="form-control ml-sm-2 mr-sm-4 my-2"></datepicker>
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">Vehicle List</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Type</th>
                <th>Connection</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vehicle in sortedVehicles" v-bind:key="vehicle._id">
                <template v-if="editId == vehicle._id">
                  <td>
                    <input v-model="editVehicleData.timestamp" disabled type="text">
                  </td>
                  <td>
                    <input v-model="editVehicleData.name" type="text">
                  </td>
                  <td>
                    <input v-model="editVehicleData.type" type="text">
                  </td>
                  <td>
                    <datepicker placeholder="Select Date" v-model="editVehicleData.conn"></datepicker>
                    <!-- <input v-model="editVehicleData.conn" type="text"> -->
                  </td>
                  <td>
                    <span class="icon">
                      <i @click="onEditSubmit(vehicle._id)" class="fa fa-check"></i>
                    </span>
                    <span class="icon">
                      <i @click="onCancel" class="fa fa-ban"></i>
                    </span>
                  </td>
                </template>
                <template v-else>
                  <td>{{new Date(vehicle.timestamp * 1000) | moment('MM/DD/YYYY')}}</td>
                  <td>{{vehicle.name}}</td>
                  <td>{{vehicle.type}}</td>
                  <td>{{new Date(vehicle.last_successful_connection * 1000) | moment('MM/DD/YYYY')}}</td>
                  <td>
                    <a href="#" class="icon">
                      <i v-on:click="onDelete(vehicle._id)" class="fa fa-trash"></i>
                    </a>
                    <a href="#" class="icon">
                      <i v-on:click="onEdit(vehicle)" class="fa fa-pencil"></i>
                    </a>
                    <router-link
                      :to="{
                      name:'VehiclePage', 
                      params:{id: vehicle._id}
                    }"
                      class="icon"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import db from "@/db";
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'
export default {
  name: "Vehicles",
  data() {
    return {
      editId: "",
      vehicleData: {
        name: "",
        type: "SUV",
        conn: ""
      },
      editVehicleData: {
        id: "",
        name: "",
        type: "",
        timestamp: "",
        conn: ""
      },
      vehicles: []
    };
  },
  components: {
    Datepicker
  },
  created() {
    this.getVehicles();
  },
  computed: {
    sortedVehicles() {
      return this.vehicles.slice().sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    }
  },
  methods: {
    convertor(date) {
      return moment(date).format('MM/DD/YYYY');
    },

    getVehicles() {
        axios.get('http://18.223.149.16:3000/vehicles')
        .then(response => {
          this.vehicles = response.data;
        });
    },
    onSubmit() {
      this.vehicleData.conn = (new Date(this.vehicleData.conn).getTime() / 1000);
      axios.post('http://18.223.149.16:3000/vehicles/', this.vehicleData).then(response => {
          this.vehicleData.conn = "";
          this.vehicleData.name = "";
          this.vehicleData.type = "SUV";
          this.getVehicles();
        });

      // db.collection("vehicles")
      //   .add(this.vehicleData)
      //   .then(this.getVehicles);
      
    },

    onDelete(id) {
      axios.delete('http://18.223.149.16:3000/vehicles/' + id).then(response => {
          this.getVehicles();
        });
    },
    onEdit(vehicle) {
      this.editId = vehicle._id;
      this.editVehicleData.name = vehicle.name;
      this.editVehicleData.type = vehicle.type;
      this.editVehicleData.timestamp = this.convertor(new Date(vehicle.timestamp * 1000));
      this.editVehicleData.conn = this.convertor(new Date(vehicle.last_successful_connection * 1000));
    },
    onCancel() {
      this.editId = "";
      this.editVehicleData.name = "";
      this.editVehicleData.type = "";
      this.editVehicleData.timestamp = "";
      this.editVehicleData.conn = "";
    },
    onEditSubmit(id) {
      this.editVehicleData.conn = (new Date(this.editVehicleData.conn).getTime() / 1000);
      axios.put('http://18.223.149.16:3000/vehicles/' + id,  {name:this.editVehicleData.name, type:this.editVehicleData.type, last_successful_connection:this.editVehicleData.conn}).then(response => {
          this.editId = "";
          this.editVehicleData.name = "";
          this.editVehicleData.type = "";
          this.editVehicleData.timestamp = "";
          this.editVehicleData.conn = "";
          this.getVehicles();
        });
      
      // db.collection("vehicles")
      //   .doc(id)
      //   .set(this.editVehicleData)
      //   .then(this.getVehicles);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}

.footer{
  height: 40px;
}

.table-responsive {
    overflow-x: unset;
}

.mt-5 {
    margin-top: 4rem !important;
}

.card.mt-5 {
    border: 1px solid rgba(0, 0, 0, 0.30);
}

form label {
    font-weight: 600;
    /* font-size: 20px; */
}

.form-input-el input {
      border: none !important;
}
</style>
