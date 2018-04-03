<template>
  <div class="">
    <form @submit.prevent="submit">
      <v-card>
        <v-card-title>
          <div>
            <h3>🆕 新话题</h3>
            <v-text-field
              label="标题"
              v-model="title"
              required
            ></v-text-field>
            <v-radio-group v-model="category" row>
              <v-radio color="black" value="vscode" label="VScode"></v-radio>
              <v-radio color="black" value="atom" label="Atom"></v-radio>
              <v-radio color="black" value="sublime" label="Sublime Text"></v-radio>
            </v-radio-group>
            <mavon-editor class="topic-editor" v-model="content" />
            <v-card-actions>
              <v-btn type="submit" class="md-primary" :disabled="sending">发布</v-btn>
            </v-card-actions>
          </div>
        </v-card-title>
      </v-card>
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
.v-note-wrapper {
  z-index: 0;
}
</style>
