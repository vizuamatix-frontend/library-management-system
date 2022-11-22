<script>
    import SideBar from '@/components/SideBar.vue';
    import { defineComponent } from 'vue';


    export default defineComponent({
    name: 'HomeView',

    components: {
        //FooterView,
        SideBar
    },
    });
</script>

<template>
    <SideBar />
    <h2 class="title">Add New Book</h2>
    <div class="goback">
        <a style="text-decoration: none" href="/bookview">
        <v-btn
              color="primary"
              
            >
              Go Back
        </v-btn>
        </a>
    </div>
    <v-form>
        <v-row>
            <v-col>
            <v-text-field
              label="Book Name"
              placeholder="Book Name"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Author Name"
              placeholder="Author Name"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              class="des"
              label="Description"
              placeholder="Description"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
    </v-form>
    <div class="add-btn1">
        <v-btn
              color="warning"
              dark
            >
              Add New Book
        </v-btn>
    </div>
</template>

<style>
    .title{
        position: absolute;
        font-size: 40px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        top: 40px;
        left: 350px;
    }

    .v-text-field{
        position: relative;
        width: 700px;
        left: 200px;
        padding-top: 8px;
    }
    .des{
        height: 300px;
    }

    .add-btn1{
        position: absolute;
        top: 650px;
        left: 1000px;
    }
    .goback{
        position: absolute;
        left: 1300px;
        top: 50px;
    }
</style>