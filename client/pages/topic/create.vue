<template>
  <div class="">
    <form class="md-layout-row md-gutter" @submit.prevent="submit">
      <md-card class="md-flex-50 md-flex-small-100">
        <md-card-header>
          <div class="md-title">🆕 新话题</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout-row md-layout-wrap md-gutter">
            <div class="md-flex md-flex-small-100">
              <md-field>
                <label for="first-name">标题</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="title" :disabled="sending" />
              </md-field>
            </div>
          </div>
          <div class="md-layout-row md-layout-wrap md-gutter">
            <div class="md-flex md-flex-small-100">
              <md-radio v-model="category" value="vscode" class="md-primary">Vscode</md-radio>
              <md-radio v-model="category" value="atom" class="md-primary">Atom</md-radio>
              <md-radio v-model="category" value="sublime" class="md-primary">Sublime Text</md-radio>
            </div>
          </div>
        </md-card-content>

        <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" /> -->
        <mavon-editor v-model="content" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">发布</md-button>
        </md-card-actions>
      </md-card>

      <!-- <md-snackbar :md-active.sync="">新话题创建成功!</md-snackbar> -->
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    content: 'hello',
    title: '',
    sending: false,
    category: 'vscode',
  }),
  methods: {
    submit () {

    },
  },
}
</script>

<style lang="scss" scoped>

</style>
