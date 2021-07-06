<template>
    <div>
        <table>
            <tr>
                <th :key="i" v-for="(title, i) in header">{{title}}</th>
            </tr>
        </table>
        <tbody>
            <tr :key="i" v-for="(tr,i) in body">
                <td :key="j" v-for="(td, j) in tr">{{td}}</td>                
            </tr>
        </tbody>
    </div>
</template>
<script>
export default {
   props: {
       header: {
           type:Array,
           default: function(){
               return [];
           }
       },
        body:{
           type:Array,
           default: function(){
               return [];
           }
       },

   }
}
</script>