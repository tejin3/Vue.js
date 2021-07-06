<template>
    <div>
        <ChildComponent :num="3" :isSelected="isSelected"     :arr="arr"
        />
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
            isSelected: true,
            arr: [1,2,3,4],
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