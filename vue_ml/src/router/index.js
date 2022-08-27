import VueRouter from "vue-router"
import MyHome from "../pages/MyHome"
import MyModel from "../pages/MyModel"
import MyNewModel from "../pages/MyNewModel"
import ThisModel from "../pages/ThisModel"

export default new VueRouter({
    routes:[
        {
            name:'MyHome',
            path:'/home',
            component:MyHome
        },
        {
            name:'MyModel',
            path:'/model',
            component:MyModel
        },
        {
            name:'NewModel',
            path:'/newmodel',
            component:MyNewModel
        },
        {
            name:'ThisModel',
            path:'/thismodel',
            component:ThisModel
        }
    ]
})