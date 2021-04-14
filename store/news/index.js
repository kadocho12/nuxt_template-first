// // import axios from 'axios'
// // import firebase from '@/plugins/firebase'

// export const state = () => ({
//   news: {
//     id: '',
//     date: '',
//     modified: '',
//     slug: '',
//     title: {
//       rendered: '',
//     },
//     content: {
//       rendered: '',
//     },
//     excerpt: {
//       rendered: '',
//     },
//     _embedded: {
//       'wp:featuredmedia': [],
//     },
//   },

//   newses: [],

//   newsesRecent: [],

//   newsesTop: [],
// })

// export const getters = {
//   news: state => {
//     return state.news
//   },
//   newses: state => {
//     return state.newses
//   },
//   newsesRecent: state => {
//     return state.newses.Recent
//   },
//   newsesTop: state => {
//     return state.newses.Top
//   },
// }

// export const actions = {
//   async getNews({ commit }, options) {
//     const res = await
//       this.$axios.get(`/posts?_embed&slug=${options.slug}`)

//     commit('setNews', {
//       data: res[0].data[0],
//     })
//   },
//   async getNewses({ commit }, options) {
//     const length = options && options.length ? options.length : 100,

//     const res = await this.$axios.get(`/posts?_embed&filter[orderby]=modified&per_page=${length}`)

//     commit('setNewses', {
//       data: res[0].data,
//       options: { label: options && options.label ? options.label : '' },
//     })
//   },
// }

// export const mutations = {
//   setNews(state, { data }) {
//     // @ts-ignore
//     state.news = data
//   },
//   setNewses(state, { data, options }) {
//     const label  = options.label || 'newses'

//     // @ts-ignore
//     state[label] = data
//   },
// }
