const expect = require('chai').expect;
const assert = require('chai').assert;
const {Paciente} = require('../src/Paciente');
const {Bascula} = require('../src/Bascula');

describe('Integration Suite -- Integración Paciente-Bascula',function(){
    describe('Paciente-Bascula - Test Case 1' ,function(){
        var objPaciente,objBascula;
        it('Consstuctor new Paciente()',function(){
            objPaciente=new Paciente('Pedro','Ruiz del Castillo','16/02/1983');
            const saludo=objPaciente.saludar();
            assert.isString(saludo);
        });
        it('Constructor new Bascula()',function(){
            objBascula=new Bascula();
            objBascula.anotarPeso(95.5,1.83);
            expect(objBascula.obtenerNumeroAnotaciones()).to.be.equal(1);
        });
        it('objPaciente.calcularIMC()',function(){
            expect(objPaciente.calcularIMC()).to.be.equal(-1);
        });
        it('objPaciente.modificarBascula(objBascula)',function(){
            objPaciente.modificarBascula(objBascula);
            expect(objPaciente.calcularIMC()).to.be.equal('28.52');
        });
    });
});