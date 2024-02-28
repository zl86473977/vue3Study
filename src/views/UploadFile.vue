<script setup>
// 此方法在safari浏览器有效, 在via浏览器无效会闪退
// 此方法会调用camera然后获取到拍摄的图片
import { onMounted, ref } from 'vue';
const imgUrl = ref('')


onMounted(() => {
    var input = document.querySelector("input[type=file]");
    input.addEventListener("change", function (e) {
        console.log('---change---', e);
        var file = e.target.files[0];
        console.log('---file---', file);

        var reader = new FileReader();
        reader.onload = function (e) {
            var dataURL = e.target.result;
            console.log('onload', dataURL);
            // 在此处对 dataURL 进行操作，例如显示图片
            imgUrl.value = dataURL
        };
        reader.readAsDataURL(file);
    });
})

const inputUpload = ref()
const errMsg = ref('')
function handleUpload() {
    if (inputUpload) {
        inputUpload.value.click()
    } else {
        errMsg.value = "--------------error-------------"
    }
}
</script>
<template>
    <div>
        <input ref="inputUpload" type="file" accept="image/*" capture
            style="position: absolute; top: -9999px; left: -9999px">
        <img v-show="imgUrl !== ''" :src="imgUrl" style="width:100px;height:100px;">
        <button @click="handleUpload">这是自定义的点击上传按钮</button>
        <div>{{ errMsg }}</div>
    </div>
</template>