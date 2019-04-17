<template>
  <div class="header">
    <nav class="navbar navbar-light navbar-expand-lg">
      <div class="container">
		  <router-link class="navbar-brand" to="/">Vehicle Manager</router-link>
		  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
		        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Features</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Pricing</a>
		      </li>
		    </ul>
		  </div> -->
		</div>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'Vehicles',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* .header {
    background-image: url(https://this.deakin.edu.au/wp-content/uploads/2017/07/hero_car-e1500958751686.gif);
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
		height: 100px;
} */

.navbar-light .navbar-brand {
    color: #ffffff94;
    font-size: 1.55rem;
    font-weight: bold;
}



</style>
