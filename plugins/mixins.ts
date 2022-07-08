import { Vue, Component } from 'vue-property-decorator';
import { getModule } from "vuex-module-decorators";
import todoModule from "~/store/todo";


@Component
export class TodoModuleComponent extends Vue {
  TodoModuleInstance = getModule(todoModule, this.$store);
}



