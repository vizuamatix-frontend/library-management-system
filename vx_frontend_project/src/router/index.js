import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/Book/BookView.vue";
import StudentView from "../views/Student/StudentView.vue";
import NoticesView from "../views/notices/NoticesView.vue"
import AddBook from "@/views/Book/AddBook.vue";
import AddStudent from "@/views/Student/AddStudent.vue";
import AddNotice from "@/views/notices/AddNotice.vue";
import DashboardView from "@/views/DashboardView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/bookview",
    name: "bookview",
    component: BookView,
  },
  {
    path: "/studentview",
    name: "studentview",
    component: StudentView,
  },
  {
    path: "/addbook",
    name: "addbook",
    component: AddBook,
  },
  {
    path: "/addstudent",
    name: "addstudent",
    component: AddStudent,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },

  //routing for the notices
  {
    path: "/noticesview",
    name: "noticesview",
    component: NoticesView,
  },
  {
    path: "/addnotice",
    name: "addnotice",
    component: AddNotice,
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
