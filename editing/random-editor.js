Vue.component('random-modifier-editor', {
    props: ['modifier'],
    methods: {
        add: function() {
            this.modifier.content.push('');
            this.shadow.push(this.instant++);
        },
        remove: function(index) {
            this.modifier.content.splice(index, 1);
            this.shadow.splice(index, 1);
        },
    },
    data: function() {
        return {
            shadow: [],
            instant: 0,
        };
    },
    created: function() {
        for (this.instant = 0; this.instant < this.modifier.content.length; this.instant++) {
            this.shadow.push(this.instant);
        }
    },
    template: `
        <transition-group name="value-holder" class="outer-divs" tag="div">
            <div v-for="(id, index) in shadow" :key="id">
                <input v-model="modifier.content[index]">
                <button @click="remove(index)">-</button>
                <br>
            </div>

            <div :key="-1">
                <button @click="add">add</button>
            </div>
        </transition-group>
    `,
});