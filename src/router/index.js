/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompaniesPage from '@/components/Companies'
import ProgrammesPage from '@/components/Programmes'
import ProgrammePage from '@/components/Programme'
import AntimicrobialsPage from '@/components/Antimicrobials'
import AntimicrobialPage from '@/components/Antimicrobial'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/companies',
			name: 'Companies',
			component: CompaniesPage
		},
		{
			path: '/programmes',
			name: 'Programmes',
			component: ProgrammesPage
		},
		{
			path: '/programmes/:programme',
			name: 'Programme',
			component: ProgrammePage
		},
		{
			path: '/antimicrobials',
			name: 'Antimicrobials',
			component: AntimicrobialsPage
		},
		{
			path: '/antimicrobials/:antimicrobial',
			name: 'Antimicrobial',
			component: AntimicrobialPage
		}
	]
})
