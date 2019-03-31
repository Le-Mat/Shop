<template lang="pug">
  h1 Please, choice you'r products :
    .container
      .row
        .col-xs-12.col-md-4(v-for="card in cards" :key="card.id")
          .ui-card.ui-card--shadow-always
            p.ui-title-2.center {{card.name}}
            p.ui-title-3 {{card.cost}}
            .row
              .col-xs-4
                span.label.label--primary Сколько
              .col-xs-3
              .col-xs-4
                span.ui-label.ui-label--primary Выбрать

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
          cost: '500$'
        },
        {
          id: 2,
          name: 'gift',
          cost: '700$'

        },
        {
          id: 3,
          name: 'car',
          cost: '900$'
        }
      ],
      idCounter: 3
    }
  }
}
</script>
