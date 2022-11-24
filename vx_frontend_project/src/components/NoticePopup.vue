<template>
    <div class="popup">
      <div class="popup-inner">
        <slot />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="date"
            :counter="10"
            :rules="dateRules"
            label="Date"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="subject"
            :rules="subjectRules"
            label="Subject"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="publisher"
            :rules="publisherRules"
            label="Publisher"
            required
          ></v-text-field>

          <v-text-field
            v-model="content"
            :rules="contentRules"
            label="Content"
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
      date: "",
      dateRules: [
        (v) => !!v || "Date is required in DD/MM/YYYY format",
        // (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      subject: "",
      subjectRules: [
        (v) => !!v || "Subject is required (Maximum 100 Characters)",
        (v) => (v && v.length <= 200) || "Name must be less than 200 characters",
      ],
      publisher: "",
      publisherRules: [
        (v) => !!v || "Publisher Name is required",
        (v) => (v && v.length <= 50) || "Publisher Name must be less than 50 characters",
      ],
      content: "",
      contentRules: [
        (v) => !!v || "Content is required (Maximum 1000 Characters)",
        (v) => (v && v.length <= 1000) || "Name must be less than 1000 characters",
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