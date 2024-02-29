<template>
    <view class="content">
        <pa-cell title="单个日期" is-link @click="visible = true" />
        <pa-calendar
            v-model:show="visible"
            type="single"
            @confirm="onConfirm"
        />
    </view>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    onLoad() {},
    methods: {},
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
