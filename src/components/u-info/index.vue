<template>
    <div class="m-info">
        <el-popover
                placement="bottom"
        >
            <template #reference>
                <el-badge :value="3" type="primary" class="item">
                    <el-icon><Bell /></el-icon>
                </el-badge>
            </template>
            <div>
                sssssssssss
            </div>
        </el-popover>


    </div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.m-info{
    width: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s;
    .item{
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}
</style>