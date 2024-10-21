

export default class Persona{
    private nombre:string;
    private apellidos:string;
    readonly dni : string;
    private edad?:number;


    constructor (nombre:string,apellidos:string,dni:string,edad?:number){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni= dni;

        if(edad==undefined){
            this.edad=0;
        }else{
            this.edad = edad;
        }
        
    }

    set setNombre(nombre:string){
        this.nombre=nombre;

    }

    get getNombre(){
        return this.nombre;
    }

    getJSON():string{
        return JSON.stringify(new Persona(this.nombre,this.apellidos,this.dni,this.edad));
    }

    getJSONoBject(json:string):Persona{

        return JSON.parse(json) as Persona;

    }

    toTexto(){
        console.log(`${this.nombre} ${this.apellidos} , con DNI : ${this.dni}`)
    }

}