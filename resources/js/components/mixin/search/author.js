/**
 * Created by Edward Lance Lorilla on 12/31/2018.
 */
export default {
    data(){
        return {
            authors:[]
        }
    },
    methods:{
        search_author(query){
            var vm = this
            if (query !== '') {
                vm.onSearchAuthor(query, vm)
            } else {
                vm.loading = false
                vm.authors = []
            }
        },
        onSearchAuthor: _.debounce(function (query, vm) {
            vm.loading = true
            axios.get('/api/authors/search?search=' + query).then(function (q) {
                vm.loading = false
                vm.authors = q.data.data.map(item => {
                    return {value: item.id, label: item.name};
                })
            }).catch(function () {
                vm.loading = false
            })
        }, 350),
    }
}