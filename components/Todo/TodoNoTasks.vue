<template>
  <div class="todo__no-tasks">
    <v-icon size="100" color="primary">mdi-check</v-icon>
    <div class="text-h5 primary--text">No tasks</div>
  </div>
</template>

<script lang="ts">
import {  Vue, Component } from 'vue-property-decorator';
@Component
export default class TodoNoTasks extends Vue {

}
</script>

<style scoped>

</style>
