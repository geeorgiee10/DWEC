

window.onload = function() {


    const app = Vue.createApp({
        data() {
         return {
            text: '',
            elementos: [
               
            ]
         }
        },
        methods: {
            anadir() {
               nuevaNota = {
                    id: "",
                    titulo: this.text,
                    completada: false,
                    prioridad: 0,
                    horaCreacion: new Date().getTime(),
                    tiempoPasado: 0
                }
              this.elementos.push(nuevaNota);
              this.text = "";
              this.almacenar();
            },
            almacenar(){
                localStorage.setItem('elementos', JSON.stringify(this.elementos));
            },
            vaciar() {
                this.elementos = [];
                this.almacenar();
            },
            borrar(index) {
                this.elementos.splice(index,1),
                this.almacenar();
            },
            cargar(){
                const datosGuardados = localStorage.getItem('elementos');
                if (datosGuardados)
                    this.elementos = JSON.parse(datosGuardados);
            },
            completar(index){
                this.elementos[index].completada = !this.elementos[index].completada;
                this.almacenar();
            },
            cambiarPrioridad(index, num){
                this.elementos[index].prioridad = num;
                this.ordenar();
                this.almacenar();
            },
            ordenar(){
                this.elementos.sort((a,b) => b.prioridad - a.prioridad);
            },
            tareasCompletadas(){
                return this.elementos.filter(tarea => tarea.completada == false).length;
            },
            borrarCompletadas(){
                this.elementos = this.elementos.filter(tarea => tarea.completada == false);
                this.almacenar();
            },
            fecha(){
                this.elementos.forEach(element => {
                    let fechaAhora = new Date().getTime();
                    let diferencia = Math.floor((fechaAhora - element.horaCreacion) / 1000);
                    if (diferencia < 3600) {
                        let minutos = Math.floor(diferencia / 60);
                        element.tiempoPasado = minutos;
                    }
                }); 
                
            }
        },
        mounted(){
            this.cargar();
            this.ordenar();
            setInterval(() => {
                this.fecha();
            }, 60000);
        }
    })
       
    app.mount('#container')
}
