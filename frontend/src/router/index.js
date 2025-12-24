import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Packages from '../views/Packages.vue'
import AddPackage from '../views/AddPackage.vue'
import EditPackage from '../views/EditPackage.vue'
import ViewPackage from '../views/ViewPackage.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/packages', name: 'packages', component: Packages },
  { path: '/add-package', name: 'add-package', component: AddPackage },
  { path: '/edit-package/:id', name: 'edit-package', component: EditPackage },
  { path: '/package/:id', name: 'view-package', component: ViewPackage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router