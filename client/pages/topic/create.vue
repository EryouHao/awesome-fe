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
            <mavon-editor
              ref="mavonEditor"
              class="topic-editor"
              v-model="content"
              @imgAdd="imgAdd"
              @imgDel="imgDel"
            ></mavon-editor>
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
import axios from 'axios'

export default {
  middleware: 'authenticated',
  data: () => ({
    content: 'hello',
    title: '',
    sending: false,
    category: 'vscode',
    imgFile: {},
  }),
  methods: {
    async submit () {
      const form = {
        title: this.title,
        content: this.content,
        category: this.category,
      }
      const { success } = await this.$api.topic.createTopic(form)
      if (success) {
        console.log('文章添加成功')
      }
    },
    imgAdd (pos, file) {
      this.imgFile[pos] = file
      console.log('待上传的文件：', this.imgFile)
      const formData = new FormData()
      formData.append('image', file)
      axios({
        url: '/api/topic/upload',
        method: 'post',
        data: formData,
        // headers: { 'Content-Type': 'multipart/form-data' },
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.$refs.mavonEditor.$img2Url(pos, res.data.url)
        } else {
          console.log(res.data.message)
        }
      }).catch(err => console.log(err))
    },
    imgDel (pos) {
      // delete this.imgFile[pos]
      console.log(this.imgFile)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-note-wrapper {
  z-index: 0;
}
</style>
