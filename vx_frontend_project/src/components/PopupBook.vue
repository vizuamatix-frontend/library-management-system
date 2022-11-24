<template>
    <div class="popup">
      <div class="popup-inner">
        <slot />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="author"
            :rules="authorRules"
            label="Author"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="more"
            :rules="moreRules"
            label="More Details"
            required
          ></v-text-field>
          <v-container class="btn-container">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate, TogglePopup()"
            >
              Confirm
            </v-btn>
  
            <v-btn color="error" class="mr-4" @click="TogglePopup()">
              Cancel
            </v-btn>
          </v-container>
        </v-form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["TogglePopup"],
    data: () => ({
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      author: "",
      authorRules: [
        (v) => !!v || "Author name is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      more: "",
      moreRules: [
        (v) => !!v || "More Details  is not required",
        (v) =>
          (v && v.length <= 10) || "Contact no must be less than 11 characters",
      ],
    }),
  };
  </script>
  
  <style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
  
    display: flex;
    align-items: center;
    justify-content: center;
    .popup-inner {
      background: white;
      padding: 32px;
    }
  }
  
  .v-text-field {
    left: 0;
  }
  
  .btn-container{
    text-align: center;
  }
  </style>
  