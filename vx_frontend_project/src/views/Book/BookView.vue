<script>
    import SideBar from '@/components/SideBar.vue';
    import StudentTableVue from '@/components/StudentTable.vue';
    import { defineComponent } from 'vue';

    // Components

    //import FooterView from "../components/FooterView.vue";

    export default defineComponent({
    // name: 'BookView',

    components: {
        //FooterView,
        SideBar,
        StudentTableVue
    },
    });

    

    

</script>




<template>
    <SideBar />
    <h2 class="title">Book Details</h2>
    <dir class="table"><StudentTableVue /></dir>
    <div class="add-btn">
        <a style="text-decoration: none" href="/addbook">
        <v-btn
              color="warning"
              dark
            >
              Add New Book
        </v-btn>
        </a>
    </div>
    
</template>






<style scoped>
    .title{
        position: absolute;
        font-size: 40px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        top: 40px;
        left: 350px;
    }

    .table{
        position: absolute;
        left: 300px;
        top: 150px;
    }

    .add-btn{
        position: absolute;
        top: 60px;
        left: 1200px;
    }
</style>