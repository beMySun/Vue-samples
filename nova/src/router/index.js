import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/pages/Entry'
import NewGeneration from '@/pages/newGeneration/'
import PtsDriver1 from '@/pages/newGeneration/ptsDriver/step1'
import PtsDriver2 from '@/pages/newGeneration/ptsDriver/step2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Entry
    },
    {
      path: '/newgeneration',
      name: 'newGeneration',
      component: NewGeneration,
      children: [
        {
          path: 'ptsdriver/step1',
          component: PtsDriver1,
          name: 'newGenerationptsDriver'
        },
        {
          path: 'ptsdriver/step2',
          component: PtsDriver2
        }
      ]
    }
  ]
})

