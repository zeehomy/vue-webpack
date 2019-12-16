<template>
  <div :class="['todo-item', todo.completed ? 'completed' : null ]">
    <input type="checkbox"
      class="toggle"
      v-model="todo.completed"
    />
    <label>{{todo.content}}</label>
    <button class="destory"
      @click="deleteTodo"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    deleteTodo() {
      
    }
  }
};
</script>

<style lang="stylus" scoped>
  
</style>