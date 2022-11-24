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
    <h2 class="title">Add New Notice</h2>
    <div class="goback">
        <a style="text-decoration: none" href="/noticesview">
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
              label="Date"
              placeholder="DD/MM/YYYY"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Subject"
              placeholder="Subject"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Publisher"
              placeholder="Write the pubisher name here.."
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              class="des"
              label="content"
              placeholder="Type Your Messege Here.."
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
              Submit
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
        top: 750px;
        left: 800px;
    }
    .goback{
        position: absolute;
        left: 1300px;
        top: 50px;
    }
</style>