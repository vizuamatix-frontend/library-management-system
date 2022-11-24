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
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
  methods: {
    removeElement: function(index) {
      this.notices.splice(index, 1);
    }
  }
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
      <tr v-for="notice in notices" :key="notice.id">
        <td>{{ notice.date }}</td>
        <td>{{ notice.subject }}</td>
        <td>{{ notice.publish_by }}</td>
        <td>
          <v-btn
            @click="() => TogglePopup('buttonTrigger')"
            depressed
            color="success"
          >
            View
          </v-btn>
          <NoticePopup
            v-bind:notice="notices"
            v-if="popupTriggers.buttonTrigger"
            :TogglePopup="() => TogglePopup('buttonTrigger')"
          ></NoticePopup>
        </td>
        <td><v-btn depressed color="error" v-on:click="removeElement(key)"> Delete </v-btn></td>
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