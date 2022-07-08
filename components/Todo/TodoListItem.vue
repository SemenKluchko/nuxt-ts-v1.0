<template>
    <v-list-item
      :class="{
            'green lighten-5': task.completed,
          }"
      @click="doneTask(task.id)"
    >
      <template #default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.completed"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.completed }"
          >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action >
          <v-btn icon @click="TodoModuleInstance.deleteTask(task.id)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>

</template>

<script lang="ts">
import {  Mixins, Component, Prop  } from 'vue-property-decorator';
import {TodoModuleComponent} from "~/plugins/mixins";
@Component
export default class TodoListItem extends Mixins(TodoModuleComponent) {
  @Prop() readonly task!: object

    doneTask(id: number): void {
      this.TodoModuleInstance.toggleTask(id);
    }
}
</script>

<style scoped>

</style>
