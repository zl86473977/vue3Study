<script setup>
import { ref } from 'vue';

const latitude = ref() // 经度
const longitude = ref() // 纬度
const loading = ref(false)

function loadPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        console.log("该设备不支持地理定位");
    }
}

function showLocation(position) {
    console.log('position', position);
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
    loading.value = false;
    // getAddressWeb()
    getAddressServe()
}
const address = ref('')

// https://api.map.baidu.com/reverse_geocoding/v3/?ak=5Zkub2FbiFuxF5Z2xLEjyNCcllBrAMyV&output=json&coordtype=wgs84ll&location=31.6894,119.9294
// const ak = '5Zkub2FbiFuxF5Z2xLEjyNCcllBrAMyV' // 浏览器端
// function getAddressWeb() {
//     // 创建地理编码实例      
//     var myGeo = new BMapGL.Geocoder();
//     // 根据坐标得到地址描述    
//     myGeo.getLocation(new BMapGL.Point(longitude.value, latitude.value), (result) => {
//         if (result) {
//             address.value = result.address
//         }
//     });
// }

const ak = 'H4cBTeDhccVSxpoHfyvGyI63mR45dAnO' // 服务器端
function getAddressServe() {
    fetch(`/baidu?location=${latitude.value},${longitude.value}&output=json&coordtype=wgs84ll&ak=${ak}`).then(resp => resp.json()).then(res => {
        console.log(res);
        address.value = res.result.formatted_address;
    })
}
</script>
<template>
    <div>
        <button v-if="!loading" @click="loadPosition">加载地理位置</button>
        <div v-else>加载中</div>
        <div>经度latitude：{{ latitude }}</div>
        <div>纬度longitude：{{ longitude }}</div>
        <div>解析地址为： {{ address }}</div>
    </div>
</template>