<template>
    <h2>{{title}}</h2>
    <div class="new-prod-container">
        <!-- new 아이템 탭메뉴 -->
        <div class="new-prod-tab">
            <ul>
                <li>
                    <a href="#">ALL</a>
                </li>
                <li>
                    <a href="#">WOMAN</a>
                </li>
                <li>
                    <a href="#">MAN</a>
                </li>
                <li>
                    <a href="#">KIDS</a>
                </li>
            </ul>
        </div>
        <div class="new-prod-cont">
            <ul>
                <item-list v-for="item in 20"></item-list>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data(){
            return {
                title: 'NEW'
            }
        }
    }
</script>

<style>

</style>