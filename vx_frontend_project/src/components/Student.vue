<script>
import { mdiDelete } from "@mdi/js";
import Popup from "./Popup.vue";
import { ref } from "vue";

export default {
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    };

    return {
      popupTriggers,
      Popup,
      TogglePopup,
    };
  },
  data: () => ({
    icons: {
      mdiDelete,
    },
  }),
  components: {
    Popup,
  },
};
</script>

<template>
  <div style="overflow-x: auto">
    <table>
      <tr>
        <th>Student Name</th>
        <th>Email Address</th>
        <th>Contact number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr>
        <td>B.G.P.S.Bodhinayaka</td>
        <td>pudarabodhinayaka@gmail.com</td>
        <td>94766923712</td>
        <td>
          <v-btn @click="() => TogglePopup('buttonTrigger')" depressed color="success"> Edit </v-btn>
          <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup = "() => TogglePopup('buttonTrigger')"></Popup>
        </td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>
      <tr>
        <td>H.S.Dissanayake</td>
        <td>dissanayaka@gmail.com</td>
        <td>94757789754</td>
        <td><v-btn depressed color="success"> Edit </v-btn></td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>
      <tr>
        <td>K.P.Ranatunge</td>
        <td>ranatunge@gmail.com</td>
        <td>94723736789</td>
        <td><v-btn depressed color="success"> Edit </v-btn></td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>

      <tr>
        <td>O.P.Kariyawasam</td>
        <td>kariyawasam@gmail.com</td>
        <td>94772635673</td>
        <td><v-btn depressed color="success"> Edit </v-btn></td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>
      <tr>
        <td>L.M.Wanigasuriya</td>
        <td>wanigasuriya@gmail.com</td>
        <td>94773837772</td>
        <td><v-btn depressed color="success"> Edit </v-btn></td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>

      <tr>
        <td>I.H.Perera</td>
        <td>Perera@gmail.com</td>
        <td>9476373687</td>
        <td><v-btn depressed color="success"> Edit </v-btn></td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>
      <tr>
        <td>U.N.Munasinghe</td>
        <td>munasinghe@gmail.com</td>
        <td>94732725267</td>
        <td><v-btn depressed color="success"> Edit </v-btn></td>
        <td><v-btn depressed color="error"> Delete </v-btn></td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background-color: #005567;
  color: white;
  font-size: 1.2rem;
}

th,
td {
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
