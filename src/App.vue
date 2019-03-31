<template lang="pug">
  #app
    #nav
      .navbar
        .container
          .navbar-content Shop
            .button-burger
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper
              ul.navbar-list
                li.navbar-item
                  router-link(to="/") Home
                li.navbar-item
                  router-link(to="/about") About
                li.navbar-item
                  router-link(to="/cart") Cart <em>({{0}})</em>
    router-view
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
