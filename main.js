const app = Vue.createApp({
    data() {
        return {
            name: 'Marek',
            program: 'Informatyka Stosowana',
            display: false,
            subjects: []
        }
    },
    methods: {
        newsub() {
            this.subjects = [
                {name:'MAT', grade:3},
                {name:'GEO', grade:4}
            ]
        }

    }
})
