<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
div#app {
    background-image: url("/static/img/hero_car-e1500958751686.gif");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 170px;
}

.card-header.up-card {
    background-color: #1e1f20c2;
    color: white;
}

.card {
    border: 1px solid gba(0, 0, 0, 0.24);
}
</style>
