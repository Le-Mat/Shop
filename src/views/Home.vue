<template lang="pug">
  h1 Please, choice you'r products :
    h3 Вы выбрали {{counter}} продуктов
    .container
      .row
        .col-xs-12.col-md-4(v-for="card in cards" :key="card.id")
          .ui-card.ui-card--shadow-always
            p.ui-title-2.center {{card.name}}
            p.ui-title-3 {{card.cost}}
            .row
              .col-xs-4
                span.label.label--primary Сколько
                  .counter
                    .col-xs-3.button.button-light(
                      @click="changeNum(1, card.id)") +
                    .col-xs-6.span {{card.num}}
                    .col-xs-3.button.button-light(
                      @click="changeNum(0, card.id)") -
              .col-xs-3
              .col-xs-4
                span.button.button--round.button-primary(@click ="chooseProduct(card.id)") Выбрать

</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      cards: [
        {
          id: 1,
          name: 'potato',
          cost: 8000,
          num: 0
        },
        {
          id: 2,
          name: 'gift',
          cost: 700,
          num: 0

        },
        {
          id: 3,
          name: 'car',
          cost: 90000,
          num: 0
        },
        {
          id: 4,
          name: 'product1',
          cost: 12,
          num: 0
        }
      ],
      idCounter: 3,
      counter: 0
    }
  },
  methods: {
    chooseProduct (id) {
      let purchase = this.$store.getters.purchase
      let counter = purchase.length
      let res = {
        id: counter,
        name: this.cards[id - 1].name,
        num: this.cards[id - 1].num,
        cost: this.cards[id - 1].cost,
        total: this.cards[id - 1].num * this.cards[id - 1].cost
      }
      this.$store.dispatch('purchaseAct', res)
    },
    changeNum (sign, id) {
      if (sign === 1) this.cards[id - 1].num++
      else this.cards[id - 1].num--
      if (this.cards[id - 1].num < 0) this.cards[id - 1].num = 0
    }
  }
}
</script>

<style scoped lang="stylus">
  .counter
    display flex
    margin-top 20px
  .col-md-4
    margin-top 30px
</style>
