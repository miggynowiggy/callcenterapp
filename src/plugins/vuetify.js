import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'md' || 'fa'
    },
    theme: {
        themes: {
            light: {
                primary: '#109CF1',
                secondary: '#FFB946',
                accent: '#323C47',
            }
        }
    }
});
