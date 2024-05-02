const app = Vue.createApp({
    data() {
        return {
            nomedousuario: '',
            password: '',
            exibirFormulario: false,
            novoUsuario: {
                nome: '',
                email: '',
                telefone: '',
                senha: ''
            },
            cadastroRealizado: false
        }
    },
    methods: {
        formulario() {
            this.exibirFormulario = !this.exibirFormulario;
        },
        cadastrar() {
            this.cadastroRealizado = true;
            
            
        }
    }
});

app.mount('#app');
