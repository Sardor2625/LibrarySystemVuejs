<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Books
                </h4>
               
            </div>
            <div class="card-body ">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Publication Year</th>
                            <th>Langauge</th>
                            <th>C.O</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.students.length > 0">
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.no }}</td>
                            <td>{{ student.title }}</td>
                            <td>{{ student.language }}</td>
                            <td>{{ student.c_o }}</td>
                            <td>{{ student.count }}</td>
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
}
</script>