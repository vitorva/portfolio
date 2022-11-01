<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" /></div>
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/mail.svg" width="30" height="30" />
      <img alt="Vue logo" class="logo" src="@/assets/github.svg" width="30" height="30" />
    </div>
    <!--
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
-->
  </header>

  <div class="content">

    <div class="box box-top">
      <h1>Welcome .</h1>

      <p>My name is Vitor Vaz Afonso. I’m a software enginner from Switzerland.

        I recently graduated from HEIG-VD (Bachelor of Applied Science). I have always been
        passionate about technology and development.
      </p>
    </div>

    <div class="box box-bottom">
      <h1>Projects</h1>
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin-right: 20px;
}

.content {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.box {
  width: 100%;
  border-color: #d9d9d9b2;
}


/*
.box-top::before {
  border-top: 3px solid black;
}
*/


.box-top::before {
  border-top: solid #d9d9d9b2;
  content: '';
  display: block;
  margin-right: 35%;
}

.box-bottom::after {
  border-bottom: solid #d9d9d9b2;
  content: '';
  display: block;
  margin-left: 35%;
}

@media (min-width: 1024px) {

  .content {
    flex-wrap: nowrap;
  }

  .box {
    width: 45%;
    height: 500px;
  }

  .box-top {
    border-top: solid;
  }

  .box-bottom {
    border-bottom: solid;
  }


  .box-top::before {
    content: none;
  }

  .box-bottom::after {
    content: none;
  }
}
</style>
