<template>
  <div id="single-spa-application:balance"></div>
<!-- <div id="pagarme-pilot">
    <shadow-root>
      <link rel="stylesheet" href="//localhost:3002/style.css" />
      <div id="single-spa-application:balance"></div>
    </shadow-root>
  </div> -->
</template>

<script>
import { unregisterApplication, registerApplication } from 'single-spa'

const mounted = () => {
  const remoteImport = url => System.import(url)

  registerApplication({
    name: 'balance',
    app: () => remoteImport('balance'),
    activeWhen: '/',
    customProps: {
      sessionId: '8a66f8101b8430f921948e27da39d0be6a86a8848c6504781011b5dcaac1'
    }
  })
}

const beforeDestroy = () => {
  unregisterApplication('balance')
}

export default {
  name: 'BalancePage',
  mounted,
  beforeDestroy,
}
</script>
