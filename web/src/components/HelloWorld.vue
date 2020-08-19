<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <div v-text="msg" :class="{'red':flag, 'blue':!flag}"></div> <!-- 綁定數據的另一種方法, :class的使用 -->
    <input v-model="msg" :style="{width:'300px'}" /> <!-- vue雙向數據綁定， model改變會影響view, view改變返過來會影響model -->

    <h2>Essential Links</h2>

    <br />
    <h3 ref="h3">{{obj.name}}</h3>

    <br />
    <ul>
      <li v-for="(item, key) in list1" :key="key" :class="{'red' : key==0, 'blue' : key==1}"> <!-- v-for循環需要帶:key, :class的使用 -->
        {{item}}
      </li>
    </ul>

    <ol>
      <li v-for="item in list2" :key="item.name">{{item.name}}</li>
    </ol>

    <div v-bind:title="title">{{title}}</div> <!-- 綁定屬性 -->
    <img :src="imgUrl" /> <!-- v-bind綁定屬性時可省略 -->

    <div v-html="htmlStr" :style="{color:'yellow'}"></div> <!-- v-html綁定html內容, :style的使用 -->

    <button v-on:click="getMsg()">Get Msg</button>

    <button v-on:click="setMsg()">Set Msg</button>

    <input type="text" ref="userInfo" />

    <button v-on:click="getUserInfo()">Get User Info</button>
    <button @click="getUserInfo()">Get User Info</button> <!-- v-on 的簡寫@-->

    <button data-id='1019' @click="eventFn($event)">Event</button> <!-- $event獲取事件信息 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () { /* 業務邏輯里面定義的數據 */
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Title Test',
      flag: false,
      imgUrl: 'https://jilaniabdullah8.files.wordpress.com/2013/07/manokhan-2205036.jpg?w=264&h=352',
      obj: {
        name: 'Paul'
      },
      list1: ['1', '2', '3'],
      list2: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' }
      ],
      htmlStr: '<h3>H3 Title</h3>'
    }
  },
  methods: { /* 自定義方法 */
    getMsg: function () { /* 方法寫法一 */
      console.log(this.msg)
    },
    setMsg () { /* 方法寫法二 */
      this.msg = 'Hello Wolrd.'
    },
    getUserInfo () {
      let userInfo = this.$refs.userInfo /* 獲取ref定義的Dom節點 */
      console.log(userInfo.value)
      this.$refs.h3.style.color = 'red'
    },
    eventFn (e) {
      console.log(e)
      console.log(e.srcElement.dataset.id) /* 獲取自定義屬性的值 */
      let eventObj = e.srcElement /* 獲取DOM節點 */
      eventObj.style.color = 'red'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
