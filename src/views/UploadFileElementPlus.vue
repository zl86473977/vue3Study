<template>
  <el-upload-leo
    action="https://run.mocky.io/v3/3aa761d7-b0b3-4a03-96b3-6168d4f7467b"
    :show-file-list="false"
    list-type="picture-card"
    :accept="'image/*'"
    :before-upload="handleBeforeUpload"
    @success="handleAvatarSuccess"
    @error="handleError"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />

    <span v-else>+</span>
  </el-upload-leo>
  <div>success {{ imageUrl }}</div>
  <div>error {{ errorInfo }}</div>
</template>

<script setup>
import { ref } from "vue";
import { ElUpload as ElUploadLeo } from "element-plus";

const imageUrl = ref("");
const errorInfo = ref("");

function handleBeforeUpload(file) {
    // 可以在这里验证图片大小、类型等信息
    return true; // 返回true则允许上传，false则阻止上传
}

function handleAvatarSuccess(response, uploadFile) {
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
};

function handleError(error) {
  errorInfo.value = error;
}
</script>

<style>
.avatar {
  width: 140px;
  height: 140px;
  object-fit: contain;
}
</style>

<style></style>
