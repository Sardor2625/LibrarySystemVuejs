<template>
	<main>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Manage The Students
                </h4>
               
            </div>
            <div class="card-body ">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Student id</th>
                            <th>Student Info</th>
                            <th>Title of the book</th>
                            <th>Duraction</th>
                            <th>Status
								<!-- <div class="btn-group" role="group" id="toolBtns">
  <button class="btn" type="button" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }">Btn1</button>
  <button class="btn" type="button" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }">Btn2</button>
  <button class="btn" type="button" @click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }">Btn3</button></div>
</div> -->
							</th>
							
                        </tr>
                    </thead>
                    <tbody v-if="this.students.length > 0">
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.id }}</td>
                            <td>{{ student.info }}</td>
                            <td>{{ student.book }}</td>
                            <td>{{ student.duraction }}</td>
                            <td>{{ student.status }}</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">Loading</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'students',
    data() {
        return {
            students: []
        }
    },
    mounted() {

        this.getStudents();
        // console.log('i am here')
    },
    methods: {
        getbooks() {
            axios.get('').then(res => {
                this.students = res.data.data
                //   console.log( this.students)
            });
        }
    },
// 	var vm = new Vue({
// 	 el: '#toolBtns',
// 	 data: {
//  		activeBtn:''
// 	 }
//  });
}
</script>

<style>
.active{
  background-color:red;
}
</style>