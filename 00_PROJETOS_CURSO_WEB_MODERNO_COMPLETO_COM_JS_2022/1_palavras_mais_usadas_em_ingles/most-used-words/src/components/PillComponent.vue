<template>
    <div class="pill">
        <span class="word">{{ word }}</span>
        <span class="amount">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    props: ["word", "amount"],
};
</script>

<style scoped>
.pill {
    margin: 10px;
    height: 55px;
    width: fit-content;
    border-radius: 35px;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    background-color: red;
}

.pill .word {
    margin-left: 15px;
}

.pill .amount {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: red;
    background-color: #ffffff;
    margin: 10px;
    padding: 5px;
    font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>