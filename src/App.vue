<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <div><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" /></div>
    </RouterLink>
    <div>
      <a href="mailto: vitor.vazafonso@gmail.com"><img alt="Vue logo" class="logo" src="@/assets/mail.svg" width="30"
          height="30" /></a>

      <a href="https://github.com/vitorva"><img alt="Vue logo" class="logo" src="@/assets/github.svg" width="30"
          height="30" /></a>

    </div>
  </header>

  <div class="content">

    <div class="box box-top">
      <RouterView />
    </div>

    <div class="box box-bottom">
      <h1>Projects</h1>

      <div class="project-title">
        <RouterLink to="/journeys">
          <p>Journeys</p>
        </RouterLink>
        <RouterLink to="/uon-vs-code">
          <p>UON VSCode</p>
        </RouterLink>
        <RouterLink to="/songify">
          <p>Songify</p>
        </RouterLink>
        <RouterLink to="/restApi">
          <p>Rest API</p>
        </RouterLink>
        <RouterLink to="/easy-toolz">
          <p>EasyToolz</p>
        </RouterLink>
      </div>
    </div>
  </div>

  <footer>
    <p>VITOR VAZ AFONSO ©2022</p>
  </footer>
</template>



<style scoped>
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

a:hover {
  font-size: larger;
  color: darkgrey
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin-right: 20px;
}

.content {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.box {
  width: 100%;
  border-color: #d9d9d9b2;
}

footer {
  display: flex;
  justify-content: flex-end;
}


.box-top {
  padding-left: 10px;
  min-height: 200px;
}

.box-bottom {
  padding-left: 10px;
}

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

.project-title {
  border-left: solid #d9d9d9b2;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  margin-bottom: 50px;
  margin-left: 10px;
}

@media (min-width: 1024px) {

  footer {
    margin-right: 3%;
  }

  .content {
    flex-wrap: nowrap;
  }

  .box {
    width: 45%;
    height: 400px;
  }

  .box-top {
    border-top: solid;
    border-color: #d9d9d9b2;
  }


  .box-bottom {
    border-bottom: solid;
    border-color: #d9d9d9b2;
    min-height: 400px;
  }


  .box-top::before {
    content: none;
  }

  .box-bottom::after {
    content: none;
  }
}
</style>
