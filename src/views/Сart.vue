<template lang="pug">
  .wrapper
    h1(v-show="!hello") Notihng!
    table.ui-table(v-show="hello")
      thead
        tr
          th
            span Product
          th
            span number
          th
            span cost
          th
            span total
      tbody
        tr(v-for="purchase in purchases ")
          td
            span.ui-text-regular {{purchase.name}}
          td
            span.ui-text-regular {{purchase.num}}
          td
            span.ui-text-regular {{purchase.cost}}
          td
            span.ui-text-regular {{purchase.total}}

</template>

<script>
export default {
  data () {
    return {
      hello: false
    }
  },
  computed: {
    purchases () {
      let purchase = this.$store.getters.purchase
      if (purchase.length > 0) this.hello = true
      return purchase
    }
  }
}
</script>

<style scoped lang="stylus">
  .col-xs-12
    border 1px SOLID darkgray
</style>
