<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <app-main></app-main>
    <footbar></footbar>
  </div>
</template>

<script>
  import {Navbar, AppMain, Footbar} from './components'

  export default {
    name: 'layout',
    components: {
      Navbar,
      AppMain,
      Footbar
    }
  }
</script>
