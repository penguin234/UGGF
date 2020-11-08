Vue.component('result-viewer', {
    props: ['modifiers'],
    data: function() {
        return {
            res: '',
        };
    },
    methods: {
        generate: function() {
            let res = '';
            for (let index in this.modifiers) {
                res += Generate(this.modifiers[index]);
                //res += ' ';
            }
            this.res = res;
        },
    },
    created: function() {
        this.generate();
    },
    watch: {
        type: function(val) {
            if (this.modifier) {
                this.modifier.type = this.type;
            }
        },
        modifier: function(val) {
            this.type = val.type;
        },
    },
    template: `
        <div>
            <span> {{res}} </span>
            <button @click="generate"> refresh </button>
        </div>
    `,
});