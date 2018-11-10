<template>
    <div class="home">
        <h2>首页</h2>
    </div>
</template>
<script>
import {getUserList} from '@/api';
export default {
    data() {
        return {}
    },
    mounted(){
        let params = {
            params:{query:'',pagenum:1,pagesize:1}
            };
        getUserList(params).then(res=>{
            console.log(res);
        })
    }
}
    
</script>
<style>

</style>
