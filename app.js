const app = Vue.createApp({
    data(){
        return {
            enteredValue: '',
            tasks: [],
            tListIsVisible: true
        };
    },
    computed: {
        btnCap() {
            return this.tListIsVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        togList() {
            this.tListIsVisible = !this.tListIsVisible;
        }
    }
}).mount("#assignment");