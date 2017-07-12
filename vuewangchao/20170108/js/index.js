var vm = new Vue({
	el:'#example',
	data: {
		message: '我爱你❤️'
	},
	computed:{
		reversedMessage:function(){
			return this.message.split('').reverse().join('');
		}
	},
	created: function () {// `this` 指向 vm 实例
		console.log('a is: ' + this.a)
	}
})


Vue.component('todo-item', {
	template: '\
	<li>\
	  {{ title }}\
	  <button v-on:click="$emit(\'remove\')">X</button>\
	</li>\
	',
	props: ['title']
})
new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: [
		  'Do the dishes',
		  'Take out the trash',
		  'Mow the lawn'
		]
	},
	methods: {
		addNewTodo: function () {
		  this.todos.push(this.newTodoText)
		  this.newTodoText = ''
		}
	}
})