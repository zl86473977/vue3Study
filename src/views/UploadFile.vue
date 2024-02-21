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
</script>
<template>
    <div>
        <input type="file" accept="image/*" capture="camera">
        <img v-show="imgUrl !== ''" :src="imgUrl" style="width:100px;height:100px;">
    </div>
</template>