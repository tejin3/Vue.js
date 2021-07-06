<template>
    <div>
        <modal-layout>
            <template v-slot:header>
                <!-- 같은 이름 찾아서 바꿈 -->
                <h1>모달 팝업 타이틀</h1>
            </template>
            <template v-slot:main>
                <!-- 같은 이름 찾아서 바꿈 -->
                <p>모달 컨텐츠 1</p>
                <p>모달 컨텐츠 2</p>
                <p>모달 컨텐츠 3</p>

            </template>
            <template v-slot:footer>
                <button>닫기</button>
            </template>
        <!-- 위치 상관없고 이름으로 찾아들어간다 -->
        </modal-layout>
        <!-- ui조차도 재 정의해서 쓸 수 있다. -->
    </div>
</template>
<script>
import ModalLayout from '../components/SlotModalLayout.vue';
export default {
    name: "",
    components: {"modal-layout": ModalLayout},
    // 뒤에것을 앞의 이름으로 쓸수 있게한다.
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    beforeCreate(){},
    created() {},
    beforeMount(){},
    beforeUpdate(){},
    updated(){},
    mounted() {},
    beforeUnmount(){},
    unmounted() {},
    methods: {}
}
</script>