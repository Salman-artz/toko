<template>
  <div class='container'>
    <div class='container'>
    <ul class="nav navbar-nav">
              <li class="active"><a href="#">MY STORE <span class="sr-only">(current)</span></a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li class="active nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/profile">Profile</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/kategori">Kategori</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/promo">Promo</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
       
    </ul>
    </div>
  <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>
