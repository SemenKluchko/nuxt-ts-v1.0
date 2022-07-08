<template>
  <v-text-field
    v-model="taskTitle"
    class="pa-3"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details
    clearable
    clear-icon="mdi-backspace"
    @keyup.enter="addTask"
    @click:append="addTask"
  ></v-text-field>
</template>

<script lang="ts">
import {  Component, Mixins } from 'vue-property-decorator';
import { TodoModuleComponent } from '~/plugins/mixins'
export type text = string;


@Component
export default class TodoInputField extends Mixins(TodoModuleComponent) {

  taskTitle: text = "";

  addTask(): void {
    // eslint-disable-next-line no-useless-return
    if (this.taskTitle.length <= 0) return;
    this.TodoModuleInstance.addTask(this.taskTitle);
    this.taskTitle = "";
  }


}
</script>

<style scoped>

</style>
