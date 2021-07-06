<template>
    <div>
        <child-2 @send-message="sendMessage" />
        <!-- 이름 마음대로 정할 수 있다 @~~ @~~~~ -->
    </div>
</template>
<script>
import Child2 from '../components/Child2.vue';

export default {
    name: "",
    components: {Child2},
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendMessage(data){
            console.log(data);
        }
    }
}
</script>