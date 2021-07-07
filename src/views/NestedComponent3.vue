<template>
    <div>
        <ChildComponent :num="num1" :isSelected="isSelected1"  :arr="arr1"/>
        <!-- 숫자를  수자로, 벌룬을 벌룬으로, 배열을 배열로 쓰고 싶으면 :붙여준다. -->
    </div>
</template>
<script>
import ChildComponent from '../components/ChildComponent';
export default {
    name: "",
    components: {ChildComponent},
    data() {
        return {
            num1: 5,
            isSelected1: true,
            arr1: [1,2,3,4],
            // 숫자로 전달하고 싶으면 그냥 쓰면되고 , 위에서 는 앞에 :붙이면 숫자로 전달
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>