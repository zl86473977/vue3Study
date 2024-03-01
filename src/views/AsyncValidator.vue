<script setup>
import Validator from 'async-validator';
const form = [
    {
        id: 'input1',
        name: '输入框1',
        value: '',
        required: true,
        config: {}
    },
    {
        id: 'radio2',
        name: '单选框1',
        value: undefined,
        required: true,
        config: {}
    }
]
const list = [{
    input1: form[0].value || '1',
    radio2: form[1].value || 0
}, {
    input1: form[0].value || '0',
    radio2: form[1].value || 0
}]
const descriptor = {
    input1: {
        type: 'string',
        required: true,
        message: '请输入',
    },
    radio2: {
        type: 'number',
        required: true,
        message: '请选择',
    }
}
const validator = new Validator(descriptor);
const validErrorCol = new Set();
function validNow() {
    for (let i = 0; i < list.length; i++) {
        validator.validate(list[i], (errors, fields) => {
            if (errors) {
                console.log(i, errors, fields);
                errors.forEach(item => validErrorCol.add(item.field))
            }
        })
    }
    console.log(validErrorCol.size);
    console.log(...validErrorCol);
}

</script>
<template>
    <div>
        <button @click="validNow">Valid Now</button>
    </div>
</template>