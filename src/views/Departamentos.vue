<template>
    <div class="container">
        <h1>Listado Departamentos</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Pais</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(departamento,index) in departamentos" :key="index">
                    <th scope="row">{{ index+1}}</th>
                    <th>{{ departamento.depa_codi }}</th>
                    <th>{{ departamento.depa_nomb }}</th>
                    <th>{{ departamento.pais_nomb }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'Departamento',
    data(){
        return{
        departamentos: []
    }
},
mounted(){
    axios
    .get('http://127.0.0.1:8000/api/departamentos')
    .then(response =>(this.departamentos=response.data.departamentos))
},
}

</script>