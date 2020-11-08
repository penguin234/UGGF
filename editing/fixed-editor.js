Vue.component('fixed-modifier-editor', {
    props: ['modifier'],
    template: `
        <div>
            <input type="text" v-model="modifier.content">
        </div>
    `,
});