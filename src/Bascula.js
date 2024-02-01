class Bascula {

    constructor() {

        this.pesos = [];
        this.alturas = [];
        this.fechas = [];
        this.anotaciones = 0;
    }

    obtenerNumeroAnotaciones() {
        return this.anotaciones;
    }


    anotarPeso(peso, altura = 1, fecha = new Date(Date.now()).toLocaleDateString()) {

        if (!peso) {
            return false;
        } else {
            this.pesos.push(peso);
            this.alturas.push(altura);
            this.fechas.push(fecha);
            this.anotaciones++;
        }
    }


    obtenerPesoMaximo() {
        return this.pesos.length === 0 ? 0 : Math.max(...this.pesos);
    }

    obtenerPesoMinimo() {
        return this.pesos.length === 0 ? 0 : Math.min(...this.pesos);
    }

    calcularIMC() {
        if (this.pesos.length === 0 || this.alturas.length === 0) {
            return 0;
        }

        const ult_peso = this.pesos[this.pesos.length - 1];
        const ult_altura = this.alturas[this.alturas.length - 1];
        const imc = ult_peso / Math.pow(ult_altura, 2);
        return imc.toFixed(2); 
    }

    obtenerPesoMedio() 
    {
        if (this.pesos.length === 0) {
            return 0;
        } else {
            const sumaPesos = this.pesos.reduce((acumulado, peso) => acumulado + peso, 0);
            return (sumaPesos / this.pesos.length).toFixed(1);
        }
    }


    static describirIMC(imc) {
        if (imc < 16) return "<16.00: Infrapeso (delgadez severa)";
        else if (imc < 17) return "16.00 – 16.99: Infrapeso (delgadez moderada)";
        else if (imc < 18.5) return "17.00 - 18.49: Infrapeso (delgadez aceptable)";
        else if (imc < 25) return "18.50 - 24.99: Peso normal";
        else if (imc < 30) return "25.00 - 29.99: Sobrepeso";
        else if (imc < 35) return "30.00 - 34.99: Obeso (Tipo I)";
        else if (imc <= 40) return "35.00 - 40.00: Obeso (Tipo II)";
        else return ">40.00: Obeso (Tipo III)";
    }


    obtenerTablaPesosHTML() {
        let html = "<table>";

        let cabecera = `
                <thead>
                  <tr>
                   <th>Peso</th>
                   <th>Altura</th>
                   <th>Fecha</th>
                </thead>
        `

        let body = "<tbody>";


        for (let i = 0; i < this.pesos.length; i++) {
            body += `
              <tr>
                <td>${this.pesos[i]}</td>
                <td>${this.alturas[i]}</td>
                <td>${this.fechas[i]}</td>
             </tr>
            
            `
        }
        body += `</tbody>`;
        html += cabecera + body;
        html += `</table>`;
        return html;
    }

}

module.exports = { Bascula };






