<template>

  <div>
    <h1>To Do List</h1>
    <input type="text" v-model='todo'/>
    <button @click='add()'>+ Add</button>
    <ul>
      <li v-for="(item, key) in list" :key='key'>
        <input type="checkbox" value='{true}' @click='finish(key)' />{{item}}
        <button @click='del(key)'>Delete</button></li>
    </ul>
    <ol>
      <li v-for="item in finishedList" :key='item'>{{item}}</li>
    </ol>
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
    add () {
      console.log('add')
      if (this.todo !== '') {
        this.list.push(this.todo)
        this.todo = ''
      }
    },
    finish (index) {
      this.finishedList.push(this.list[index])
      this.list.splice(index, 1)
    },
    del (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
