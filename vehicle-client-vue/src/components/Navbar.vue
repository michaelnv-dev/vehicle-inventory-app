<template>
  <div class="header">
    <nav class="navbar navbar-light navbar-expand-lg">
      <div class="container">
		  <router-link class="navbar-brand" to="/">Vehicle Manager</router-link>
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


.navbar-light .navbar-brand {
    color: #ffffff94;
    font-size: 1.55rem;
    font-weight: bold;
}



</style>
