<script>
//import Popup from "./Popup.vue";
import NoticePopup from "./NoticePopup.vue";
import { ref } from "vue";

export default {
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      NoticePopup,
      TogglePopup,
    };
  },
  components: {
    NoticePopup,
    //Popup,
  },
  data() {
    return {
        notices: [
        {
          date: "11/23/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/20/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/15/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/10/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/09/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
        {
          date: "11/09/2022",
          subject: "guidelines for library premises",
          publish_by: "Jhon Doe - Librarian",
        },
      ],
    };
  },
};
</script>

<template>
  <div style="overflow-x: auto">
    <table>
      <tr>
        <th>Date</th>
        <th>Subject</th>
        <th>Publisher</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="notices in notices" :key="notices.id">
        <td>{{ notices.date }}</td>
        <td>{{ notices.subject }}</td>
        <td>{{ notices.publish_by }}</td>
        <td>
          <v-btn
            @click="() => TogglePopup('buttonTrigger')"
            depressed
            color="success"
          >
            View
          </v-btn>
          <NoticePopup
            v-if="popupTriggers.buttonTrigger"
            :TogglePopup="() => TogglePopup('buttonTrigger')"
          ></NoticePopup>
        </td>
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