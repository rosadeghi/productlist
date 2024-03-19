<style lang="scss" scoped></style>
<template>
    <div class="card">
        <h4>مرتب سازی </h4>
        <ul>
            <li>
                <div class="flex items-center ps-3">
                    <input id="list-radio-license" type="radio" v-model="descCount" value="desc" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-license"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">تعداد:کم به زیاد
                    </label>
                </div>
            </li>
            <li>
                <div class="flex items-center ps-3">
                    <input id="list-radio-id" type="radio" v-model="ascCount" value="asc" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-id"
                        class="disable w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">تعداد:زیاد
                        به کم</label>
                </div>
            </li>
            <li>
                <div class="flex items-center ps-3">
                    <input id="list-radio-military" type="radio" v-model="descLevel" value="upRate" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-military"
                        class="disable w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">رتبه:زیاد
                        به کم</label>
                </div>
            </li>
            <li>
                <div class="flex items-center ps-3">
                    <input id="list-radio-passport" type="radio" v-model="ascLevel" value="lowRate" name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="list-radio-passport"
                        class="disable w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">رتبه:کم به
                        زیاد</label>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
const descCount =ref('') 
const ascCount =ref('')
const descLevel =ref('')
const ascLevel =ref('')

const emit = defineEmits(['descCount','ascCount','descLevel','ascLevel'])
watch(descCount,(newVal : string)=>{
    console.log(newVal);
    emit('descCount', newVal)
})

watch(ascCount,(newVal : string)=>{
    console.log(newVal);
    emit('ascCount', newVal)
})

watch(descLevel,(newVal : string)=>{
    console.log(newVal);
    emit('descLevel', newVal)
})

watch(ascLevel,(newVal : string)=>{
    console.log(newVal);
    emit('ascLevel', newVal)
})
</script>
