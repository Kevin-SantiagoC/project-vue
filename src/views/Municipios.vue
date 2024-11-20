<template>
    <div class="container">
        <h1>Listado Municipios</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Departamentos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(municipio,index) in municipios" :key="index">
                    <th scope="row">{{ index+1}}</th>
                    <th>{{ municipio.muni_codi }}</th>
                    <th>{{ municipio.muni_nomb }}</th>
                    <th>{{ municipio.depa_nomb }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'Municipio',
    data(){
        return{
        municipios: []
    }
},
mounted(){
    axios
    .get('http://127.0.0.1:8000/api/municipios')
    .then(response =>(this.municipios=response.data.municipios))
},
}

</script>