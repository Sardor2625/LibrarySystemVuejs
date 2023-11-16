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
                            <th>ema il</th>
                            <th>first name</th>
                            <th>Last name</th>
                            <th>Avatar</th>
                            <!-- <th>Count</th> -->
                            <!-- <th> <b-button class="btn btn-primary" size="sm">Refresh</b-button></th> -->

                        </tr>

                    </thead>
                    <tbody v-if="this.students.length > 0">
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.id }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.first_name }}</td>
                            <td>{{ student.last_name }}</td>
                            <td>{{ student.avatar }}</td>
                        </tr>
                    </tbody>
                    <!-- <tbody v-else>
                        <tr>
                            <td colspan="6">Loading</td>
                        </tr>
                    </tbody> -->
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

        // this.getStudents();
        // console.log('i am here')
    },
    methods: {
        getbooks() {
            axios.get('https://reqres.in/api/users?page=2').then(res => {
                this.students = res.data.data
                //   console.log( this.students)
            });
        }
    },
}
</script>