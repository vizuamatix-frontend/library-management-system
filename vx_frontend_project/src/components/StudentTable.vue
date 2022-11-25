<script>
import PopupBook from "./PopupBook.vue";
import { ref } from "vue";

// import {
//     mdiDelete
//   } from '@mdi/js'

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
      PopupBook,
      TogglePopup,
    };
  },
  components: {
    PopupBook,
  },
  data(){
      // icons: {
      //   mdiDelete
      // },
      return {
      books: [
        {
          name: "Listen to Your Heart: The London Adventure",
          author: "Ruskin Bond",
          more: "94763534256",
        },
        {
          name: "Business of Sports: The Winning Formula for Success",
          author: "Vinit Karnik",
          more: "94763534256",
        },
        {
          name: "A Place Called Home",
          author: "Preeti Shenoy",
          more: "94763534256",
        },
        {
          name: "The Struggle for Police Reforms in India",
          author: "Ex-IPS Prakash Singh",
          more: "94763534256",
        },
        {
          name: "Leaders, Politicians, Citizens",
          author: "Rasheed Kidwai",
          more: "94763534256",
        },
        {
          name: "Crunch Time: Narendra Modi’s National Security Crises",
          author: "Dr Sreeram Chauliahas",
          more: "94763534256",
        },
        {
          name: "Tiger of Drass: Capt. Anuj Nayyar, 23, Kargil Hero",
          author: "Meena Nayyar & Himmat Singh Shekhawat",
          more: "94732725267",
        },
        {
          name: "Hear Yourself",
          author: "Indian Author Prem Rawat",
          more: "94732725267",
        },
      ],
      };
    },
};
</script>

<template>
    <div style="overflow-x: auto;">
  <table>
    <tr>
      <th>Book Name</th>
      <th>Author Name</th>
      <th>View More Detail</th>
      <th>Edit Book Detail</th>
      <th>Delete</th>
    </tr>
    <tr v-for="book in books" :key="book.id">
        <td>{{ book.name }}</td>
        <td>{{ book.author }}</td>
        <!-- <td><v-btn depressed color="primary">View</v-btn></td> -->
        <td>{{ book.more }}</td>
        <td>
          <v-btn
            @click="() => TogglePopup('buttonTrigger')"
            depressed
            color="success"
          >
            Edit
          </v-btn>
          <PopupBook
            v-if="popupTriggers.buttonTrigger"
            :TogglePopup="() => TogglePopup('buttonTrigger')"
          ></PopupBook>
        </td>
        <td><v-btn depressed color="error">Delete</v-btn></td>
      </tr>
    
    <!-- <tr>
      <td>Leaders, Politicians, Citizens</td>
      <td>Rasheed Kidwai</td>
      <td><v-btn
        depressed
        color="primary"
      >
        View
      </v-btn></td>
      <td><v-btn
      depressed
      color="success"
    >
      Edit
    </v-btn></td>
      <td><v-btn
      depressed
      color="error"
    >
      Delete
    </v-btn></td>
      
    </tr> -->

    


  </table>
</div>
</template>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
        }
    th {
        background-color: aqua;
    }

    th, td {
        text-align: left;
        padding: 10px;
    }

    tr:nth-child(even) {background-color: #f2f2f2;}

</style>