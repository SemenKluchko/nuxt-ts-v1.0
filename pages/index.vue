<template>
  <div class="todo">
    <todo-input-field />
    <todo-list-wrapper v-if="tasksArr.length" :tasks="tasksArr"/>
    <todo-no-tasks v-else />
  </div>
</template>

<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator'

import TodoInputField from "~/components/Todo/TodoInputField.vue";
import TodoListWrapper from "~/components/Todo/TodoListWrapper.vue";
import TodoNoTasks from "~/components/Todo/TodoNoTasks.vue";
import { TodoModuleComponent } from '~/plugins/mixins'

@Component({
  components: {
    TodoInputField,
    TodoListWrapper,
    TodoNoTasks
  }
})
export default class TodoPage extends Mixins(TodoModuleComponent) {
  mounted() {
    this.TodoModuleInstance.initTasks()
  }

  get tasksArr() {
    return this.TodoModuleInstance.tasks
  }
}
</script>

<style lang="scss" scoped>
.todo {
  &__no-tasks {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
  }
}
</style>
