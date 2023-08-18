<template>
    <div class="pills">
        <PillComponent
            v-for="item in groupedWords"
            :word="item.word"
            :amount="item.amount"
            :key="item.word"
        />
    </div>
</template>

<script>
import PillComponent from "./PillComponent.vue";
export default {
    components: {
        PillComponent,
    },
    data: function () {
        return {
            groupedWords: [
                { word: "i", amount: 547 },
                { word: "you", amount: 478 },
                { word: "it", amount: 10 },
            ],
        };
    },
};
</script>

<style scoped>
.pills {
    display: flex;
}
</style>
