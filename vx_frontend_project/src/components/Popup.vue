<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-label>Name</v-text-label>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          required
        >{{students[0].name}}</v-text-field>
        <v-text-label>Email</v-text-label>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          required
        >{{students[0].email}}</v-text-field>
        <v-text-label>Phone Number</v-text-label>
        <v-text-field
          v-model="phoneNumber"
          :rules="phoneNumberRules"
          required
        >{{students[0].contact_no}}</v-text-field>
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
  props: ["TogglePopup", "students"],
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phoneNumber: "",
    phoneNumberRules: [
      (v) => !!v || "Contact no is required",
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

.btn-container {
  text-align: center;
}
</style>
