<template>
    <div class="container">
        <h1>Listado Paises</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Municipios</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pais,index) in paises" :key="index">
                    <th scope="row">{{ index+1}}</th>
                    <th>{{ pais.pais_codi }}</th>
                    <th>{{ pais.pais_nomb }}</th>
                    <th>{{ pais.muni_nomb }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'Pais',
    data(){
        return{
        paises: []
    }
},
mounted(){
    axios
    .get('http://127.0.0.1:8000/api/paises')
    .then(response =>(this.paises=response.data.paises))
},
}

</script>