<script setup>
// 此方法需要localhost或者file模式或者https打开才行
import { onMounted, ref } from 'vue';

const hasMediaDevices = ref('')

onMounted(() => {
    const video = document.querySelector('#video');
    const canvas = document.querySelector('#canvas');
    const startButton = document.querySelector('#startbutton');

    // 启动摄像头
    async function startCamera() {
        if (navigator.mediaDevices) {
            hasMediaDevices.value = navigator.mediaDevices
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true
            });
            video.srcObject = stream;
            video.play();
        } else {
            hasMediaDevices.value = 'no media devices'
        }

    }

    // 拍照
    function takePhoto() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
    }

    // 启动摄像头
    startCamera();

    // 在按钮上绑定拍照事件
    startButton.addEventListener('click', takePhoto);
})
</script>
<template>
    <div>
        <button id="startbutton">Take photo</button>
        <video id="video"></video>
        <canvas id="canvas"></canvas>
        <span>hasMediaDevices: {{ hasMediaDevices }}</span>
    </div>
</template>