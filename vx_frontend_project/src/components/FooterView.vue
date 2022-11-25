<template>
    <v-footer>
        <v-card
          elevation="0"
          rounded="0"
          width="100%"
          class="bg-black text-center"
        >
          <v-card-text>
            <v-btn
              class="mx-4"
              icon="fas fa-comment"
              variant="plain"
              color="white"
            ></v-btn>
            <v-btn
              class="mx-4"
              icon="fas fa-university"
              variant="plain"
              color="white"
            ></v-btn>
            <v-btn
              class="mx-4"
              icon="fas fa-wifi"
              variant="plain"
              color="white"
            ></v-btn>
            <v-btn
              class="mx-4"
              icon="fas fa-podcast"
              variant="plain"
              color="white"
            ></v-btn>
          </v-card-text>
  
          <v-card-text class="text-white">
            @ {{ new Date().getFullYear() }} —
            <strong>BookRoom Library All Rights Reserved</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .v-footer {
    position: absolute;
    margin-top: 700px;
    padding: 0px 0px 0px 0px !important;
    height: 0px;
    width:1700px;
  }

  .text-white{
    position: relative;
    text-align: center;
    margin-right: 100px;
  }
  </style>
