<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import adminDashboard from './admin'

  export default {
    name: 'dashboard',
    components: { adminDashboard },
    data() {
      return {
        currentRole: 'adminDashboard'
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    }
  }
</script>
