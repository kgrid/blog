<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <div class="title">
          <NavLink
            :link="$themeConfig.nav[0].link"
            class="home-link"
          >{{ $site.title }}
          </NavLink>
        </div>
        <div class="header-right-wrap">
          <ul class="nav" v-if="$themeConfig.nav">
            <li class="nav-item" v-for="item in $themeConfig.nav">
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
          <SearchBox/>
        </div>
      </div>
    </header>
    <MobileHeader />
  </section>
</template>

<script>
  import MobileHeader from './MobileHeader.vue'
  import SearchBox from '@SearchBox'

  export default {
    components: { MobileHeader, SearchBox },
  }
</script>

<style lang="stylus">
  @import '~@app/style/config'
  #header
    z-index 12
    position fixed
    top 0
    width 100vw
    box-sizing border-box
    // background lighten(#3eaf7c, 90%)
    background-color #FFF
    padding 0.7rem 1.5rem
    margin auto
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05) */
    transition: all 1s cubic-bezier(.25, .8, .25, 1)
    border-bottom 1px solid $borderColor
    ol, ul
      list-style none
      margin 0
      padding 0

    &:hover
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.1);

  // border-bottom 5px solid lighten(#3eaf7c, 50%)

  .header-wrapper
    display flex
    line-height 40px
    height 40px

    .title
      /*flex 0 0 200px*/
      color inherit
      font-size 1.3rem
      margin 0
      /* letter-spacing 2px */
      display block

      a
        color inherit
        text-decoration none

    .header-right-wrap
      flex 1
      display flex
      justify-content flex-end

      .nav
        flex 0 0 auto
        display flex
        margin 0
        align-items end


        .nav-item
          flex 1
          margin-left 20px

          a
            font-size 0.9rem
            // color lighten(#3eaf7c, 30%)
            text-decoration none
            transition color .3s

      .search-box
        margin-left 20px

        input
          border-radius 2rem
          transition all .5s
          border: 1px solid #cecece

          &:hover
            border 1px solid $accentColor
            box-shadow 0 0 5px $accentColor

        .suggestions
          border 1px solid #000
          top: 40px
          right 0

          a
            color #000
            text-decoration none

            &.focused
              color $accentColor

  @media (max-width: $MQMobile)

    #header
      display none

    .header-wrapper
      flex-direction column

      .header-right-wrap
        display none
</style>
