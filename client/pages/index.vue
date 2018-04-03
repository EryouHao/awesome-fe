<template>
  <section class="home">
    <div class="content">
      <div class="child-content">
        <nuxt-child/>
      </div>
    </div>
    <div class="sidebar">
      导航
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
}
.content {
  flex: 1;
  background: #fff;
}
.child-content {
  padding: 8px 0 24px;
  flex: 1;
}
.sidebar {
  width: 320px;
  // background: #000;
}
</style>
