import  Persona  from "./Persona";

export default class Empleados extends Persona{

    salario : number;

    constructor (nombre:string,apellidos:string,dni:string,salario:number,edad?:number){

        super(nombre,apellidos,dni,edad);
        this.salario = salario;

    }

    toTexto():void{
        console.log(this.salario);
    }

}