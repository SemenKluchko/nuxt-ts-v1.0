<template>
  <v-list class="pt-0" flat>
    <todo-list-item  v-for="task in tasks" :key="task.id" :task="task"/>
  </v-list>
</template>

<script lang="ts">
import { Mixins, Component, Prop } from 'vue-property-decorator';
import { TodoModuleComponent } from '~/plugins/mixins'
import TodoListItem from '~/components/Todo/TodoListItem.vue'

@Component({
  components: {
    TodoListItem
  }
})
export default class TodoListWrapper extends Mixins(TodoModuleComponent) {
  @Prop() readonly tasks!: object[]
}
</script>

<style scoped>

</style>
