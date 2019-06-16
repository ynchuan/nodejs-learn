Vue.component('example', {
    template: `
        <div>
            <div v-if="show" v-for="(item, index) in list">{{item}}</div>
        </div>
    `,
    data() {
        return {
            show: true,
            list: [1,2,3,4,5],
        };
    }
});
