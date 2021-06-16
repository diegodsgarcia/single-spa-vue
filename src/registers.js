import { registerApplication, start } from 'single-spa'
// import System from 'systemjs/dist/s'
// import 'systemjs/dist/extras/amd'

const remoteImport = url => System.import(url)
// const remoteImport = async url => import(url)

// registerApplication({
//   name: 'sidebar',
//   app: () => System.import('@mfe-example/sidebar'),
//   activeWhen: ({ pathname }) => pathname.startsWith('/'),
// })

// registerApplication({
//   name: 'subspa',
//   app: () => remoteImport('subspa'),
//   activeWhen: ({ pathname }) => pathname.startsWith('/'),
// })

// registerApplication({
//   name: 'balance',
//   app: () => remoteImport('//localhost:3002/mfe-balance.js'),
//   // activeWhen: ({ pathname }) => pathname.startsWith('/'),
//   // activeWhen: ({ pathname }) => true,
//   activeWhen: '/balance',
//   customProps: {
//     sessionId: 'f4579c1378580a41db6c971d3f51481cf2dbfb352fe8607141bc80a24e1a',
//   },
// })

start()
