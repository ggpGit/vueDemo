<template>

  <div>
    <h1>To Do List</h1><br/>
    <h2>Doing List</h2>
    <input type="text" v-model='todo' @keydown='add($event)'/>
    <button @click='add()'>+ Add</button>
    <ul>
      <li v-for="(item, key) in list" v-show="item.checked===false" :key='key'>
        <input type="checkbox" v-model='item.checked' @click='action(key)'/>{{item.title}} <!-- v-model 綁定值 -->
        <button @click='del(key)'>Delete</button></li>
    </ul>
    <h2>Finished List</h2>
    <ul>
      <li v-for="(item, key) in list" v-show="item.checked===true" :key='key'>
        <input type="checkbox" v-model='item.checked' @click='action(key)'/>{{item.title}}<button @click='del(key)'>Delete</button></li>
    </ul>
  </div>

</template>

<script>
export default {
  data () {
    return {
      todo: '',
      list: [],
      finishedList: []
    }
  },
  methods: {
    add (e) {
      if (this.todo !== '' && e.keyCode === 13) {
        this.list.push({title: this.todo, checked: false})
        this.todo = ''
      }
    },
    action (index) {
      this.list[index].checked = !this.list[index]
    },
    del (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
