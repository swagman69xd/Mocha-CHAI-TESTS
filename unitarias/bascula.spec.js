const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

const {Bascula} = require('../src/Bascula');

describe('Main Suite -- Pruebas Unitarias Clase Bascula',function(){
    describe('Constructor Báscula -- Test Case 1' ,function(){
        const objetoPrueba=new Bascula();
        it('obtenerNumeroAnotaciones() == 0',function(){
            assert.deepEqual(objetoPrueba.obtenerNumeroAnotaciones(),0, "El número de anotaciones deben ser cero");
        });
        it('obtenerPesoMaximo() = 0',function(){
            expect(objetoPrueba.obtenerPesoMaximo(),'El peso máximo esperado es cero').to.be.equal(0);
        });
        it('obtenerPesoMinimo() = 0',function(){
            objetoPrueba.obtenerPesoMinimo().should.to.be.equal(0);
        });
        it('obtenerPesoMedio() = 0',function(){
            expect(objetoPrueba.obtenerPesoMedio()).to.be.equal(0);
        });
    });

    describe('Clase Báscula -- Test Case 2' ,function(){
        const objetoPrueba=new Bascula();
        it('obtenerNumeroAnotaciones() == 0',function(){
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(0);
        });
        it('obtenerTablaPesosHTML().isString()',function(){
            assert.isString(objetoPrueba.obtenerTablaPesosHTML());
        });
    });
    
    describe('Clase Báscula -- Test Case 3' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(70)',function(){
            objetoPrueba.anotarPeso(70);
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(1);
        });
        it('obtenerPesoMaximo() = 70',function(){
            expect(objetoPrueba.obtenerPesoMaximo()).to.be.equal(70);
        });
        it('obtenerPesoMinimo() = 70',function(){
            expect(objetoPrueba.obtenerPesoMinimo()).to.be.equal(70);
        });
        it('obtenerPesoMedio() = 70.0',function(){
            expect(objetoPrueba.obtenerPesoMedio()).to.be.equal('70.0');
        });      
    });
    
    describe('Clase Báscula -- Test Case 4' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(70, 30)',function(){
            objetoPrueba.anotarPeso(70);
            objetoPrueba.anotarPeso(30);
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(2);
        });
        it('obtenerPesoMaximo() = 70',function(){
            expect(objetoPrueba.obtenerPesoMaximo()).to.be.equal(70);
        });
        it('obtenerPesoMinimo() = 30',function(){
            expect(objetoPrueba.obtenerPesoMinimo()).to.be.equal(30);
        });
        it('obtenerPesoMedio() = 50.0',function(){
            expect(objetoPrueba.obtenerPesoMedio()).to.be.equal('50.0');
        });  
    });
    
    describe('Clase Báscula -- Test Case 5' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(85, 95, 91)',function(){
            objetoPrueba.anotarPeso(85);
            objetoPrueba.anotarPeso(95);
            objetoPrueba.anotarPeso(91);

            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(3);
        });
        it('obtenerPesoMaximo() = 95',function(){
            expect(objetoPrueba.obtenerPesoMaximo()).to.be.equal(95);
        });
        it('obtenerPesoMinimo() = 85',function(){
            expect(objetoPrueba.obtenerPesoMinimo()).to.be.equal(85);
        });
        it('obtenerPesoMedio() = 90.3',function(){
            expect(objetoPrueba.obtenerPesoMedio()).to.be.equal('90.3');
        });
    });

    describe('Clase Báscula -- Test Case 6' ,function(){
        const objetoPrueba=new Bascula();
        it('anotarPeso(85, 95, 91-1.83)',function(){
            objetoPrueba.anotarPeso(85);
            objetoPrueba.anotarPeso(95);
            objetoPrueba.anotarPeso(91,1.83);
            expect(objetoPrueba.obtenerNumeroAnotaciones()).to.be.equal(3);
        });
        it('calcularIMC() = 27.17',function(){
            expect(objetoPrueba.calcularIMC()).to.be.equal('27.17');
        });
    });
    describe('Clase Báscula: describirIMC(imc) -- Test Case 7' ,function(){
        it('describirIMC(0) devuelve una cadena',function(){
            assert.isString(Bascula.describirIMC(0), "El método debe devolver una cadena"); 
        });
        it('describirIMC(1) = <16.00: Infrapeso (delgadez severa)',function(){
           Bascula.describirIMC(1).should.to.be.equal("<16.00: Infrapeso (delgadez severa)"); 
        });
        it('describirIMC(16.5) = 16.00 – 16.99: Infrapeso (delgadez moderada)',function(){
            Bascula.describirIMC(16.5).should.to.be.equal("16.00 – 16.99: Infrapeso (delgadez moderada)"); 
        });
        it('describirIMC(17.5) = 17.00 - 18.49: Infrapeso (delgadez aceptable)',function(){
            Bascula.describirIMC(17.5).should.to.be.equal("17.00 - 18.49: Infrapeso (delgadez aceptable)"); 
        });
        it('describirIMC(19) = 18.50 - 24.99: Peso normal',function(){
            Bascula.describirIMC(19).should.to.be.equal("18.50 - 24.99: Peso normal"); 
        });
        it('describirIMC(25) = 25.00 - 29.99: Sobrepeso',function(){
            Bascula.describirIMC(25).should.to.be.equal("25.00 - 29.99: Sobrepeso"); 
        });
        it('describirIMC(33) = 30.00 - 34.99: Obeso (Tipo I)',function(){
            Bascula.describirIMC(33).should.to.be.equal("30.00 - 34.99: Obeso (Tipo I)"); 
        });
        it('describirIMC(40) = 35.00 - 40.00: Obeso (Tipo II)',function(){
            Bascula.describirIMC(40).should.to.be.equal("35.00 - 40.00: Obeso (Tipo II)"); 
        });
        it('describirIMC(40.5) = >40.00: Obeso (Tipo III)',function(){
            Bascula.describirIMC(40.5).should.to.be.equal(">40.00: Obeso (Tipo III)"); 
        });
    });
});

