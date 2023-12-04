class GatoConBotas {

    constructor() {
        this.pantalla = 0;
        this.juego = new juego(sprite);
        this.botas = new imagenMoviente(-500, 10);
        this.sombrero = new imagenMoviente(500, 10);
        this.botonInicio = new boton(50, 600, "Iniciar");
        this.botonReiniciar = new boton(50, 600, "Reiniciar");
        this.botonCreditos = new boton(550, 600, "Creditos");
        this.botonMenu = new boton(550, 600, "Menu");
        this.botonSiguiente = new boton(550, 600, "Siguiente");
        this.LlamadoS = new botonesLlamado(0, 120, 280, 190);
        this.LlamadoM = new botonesLlamado(500, 120, 240, 190);
        this.cajaDeTexto = new Texto();
        this.agrado = 0;
        this.frame = 0;
        this.pausa = false;
        this.esteTexto = 0;
    }

    dibujar(imagen,script) {
        switch (this.pantalla) {
            case 0:
                push();
                image(imagen[1], 0, 0, width, height);
                image(imagen[0][this.frame], 30, 0, width, height);
                fill(0);
                textSize(60);
                text(script[this.agrado][0], 130, 50, 600, 100);
                this.botonInicio.dibujar();
                this.botonCreditos.dibujar();
                pop();
                break;
            case 1:
                image(imagen[2], 0, 0, width, height);
                if (this.esteTexto > 0) {
                    image(imagen[3][this.frame], 0, 0, width, height);
                }
                if (this.esteTexto > 1) {
                    image(imagen[4][this.frame], 0, 0, width, height);
                }
                if (this.esteTexto > 2) {
                    image(imagen[5][this.frame], 0, 0, width, height);
                    this.botonSiguiente.dibujar();
                }
                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 1]);
                break;
            case 2:
                image(imagen[6], 0, 0, width, height);
                image(imagen[7][this.frame], 0, 0, width, height);
                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 5]);
                if (this.esteTexto > 2) {
                    this.botonSiguiente.dibujar();
                }
                break;
            case 3:
                image(imagen[8], 0, 0, width, height);
                image(imagen[9][this.frame], 0, 0, width, height);
                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 9]);
                if (this.esteTexto > 7) {
                    this.botonSiguiente.dibujar();
                }
                break;
            case 4:
                this.botas.dibujar(imagen[10][this.frame]);
                this.sombrero.dibujar(imagen[11][this.frame]);
                if (this.botas.checkTerminado() && this.botas.checkTerminado())
                    this.botonSiguiente.dibujar();
                break;
            case 5:
                image(imagen[12][this.frame], 0, 0, width, height);
                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 18]);
                if (this.esteTexto > 0) {
                    this.botonSiguiente.dibujar();
                }
                break;
            case 6:
                image(imagen[13][this.frame], 0, 0, width, height);
                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 20]);
                if (this.esteTexto > 0) {
                    this.botonSiguiente.dibujar();
                }
                break;
            case 7:
                push();
                background(0, 10);
                fill(255);
                textSize(20);
                text("Tu objetivo es que mientras te muevas tienes que agarrar, a tu elección, trigo y/o zanahorias, mientras esquivas piedras en el camino, te puedes mover de lado a lado con las flechas del teclado", 100, 100, 600, 600);
                this.botonSiguiente.dibujar();
                pop();
                break;
            case 8:
                this.juego.dibujar()
                if (this.pausa) {
                    push();
                    fill(0, 70);
                    rect(0, 0, width, height);
                    fill(255);
                    text("Pausa", width / 2, height / 2);
                    pop();
                }
                break;
            case 9:
                if (this.juego.checkJuegoPerdido()) {
                    image(imagen[18], 0, 0, width, height);
                    this.cajaDeTexto.dibujar("El gato se choco con tantas piedras que se desmayo, el plan fallo antes que comenzara, queres intentar de nuevo?");
                    this.botonMenu.dibujar();
                    this.botonReiniciar.dibujar();
                } else {
                    if (this.juego.DevolverPuntajeTrigo() == 0 && this.juego.DevolverPuntajeZanahoria() == 0) {
                        image(imagen[19], 0, 0, width, height);
                        this.cajaDeTexto.dibujar("El gato no agarro nada, medio redundante ¿no?, queres intentar de nuevo?");
                        this.botonMenu.dibujar();
                        this.botonReiniciar.dibujar();
                    } else {
                        let resultado = this.juego.DevolverPuntajeTrigo() - this.juego.DevolverPuntajeZanahoria();
                        switch (true) {

                            case resultado <= -20:
                                image(imagen[14], 0, 0, width, height);
                                this.cajaDeTexto.dibujar("El gato agarro tantas zanahorias hasta el punto del cansancio, aun asi no pudo atraer a ningun conejo, quieres intentar de nuevo?");
                                this.botonMenu.dibujar();
                                this.botonReiniciar.dibujar();
                                break;
                            case resultado > -20 && resultado <= 0:
                                image(imagen[15], 0, 0, width, height);
                                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 22]);
                                if (this.esteTexto > 0) {
                                    this.botonSiguiente.dibujar();
                                }
                                break;
                            case resultado > 0 && resultado < 20:
                                image(imagen[16], 0, 0, width, height);
                                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 22]);
                                if (this.esteTexto > 0) {
                                    this.botonSiguiente.dibujar();
                                }
                                break;
                            case resultado >= 20:
                                image(imagen[17], 0, 0, width, height);
                                this.cajaDeTexto.dibujar(script[this.agrado][this.esteTexto + 22]);
                                if (this.esteTexto > 0) {
                                    this.botonSiguiente.dibujar();
                                }
                                break;
                        }

                    }
                }
                break;

            case 10:
                let lugar = round(map(mouseX, 0, 600, 1, 5));
                let lugar2 = constrain(lugar, 1, 5)
                image(imagen[22], 0, 0, width, height);
                image(imagen[23][this.frame], 0, 0, width, height);
                this.cajaDeTexto.dibujar(script[this.agrado][24],25,100);
                this.LlamadoS.dibujar(imagen[26][this.frame], imagen[27][this.frame]);
                this.LlamadoM.dibujar(imagen[24][this.frame], imagen[25][this.frame]);
                image(imagen[27 + lugar2][this.frame], 0, 0, width, height);
                break;
            case 11:
                push();
                image(imagen[33][this.agrado], 0, 0, width, height);
                textAlign(CENTER, CENTER);
                textSize(40);
                text(script[this.agrado][25], 400, 100);
                this.botonReiniciar.dibujar();
                this.botonMenu.dibujar();
                pop();
                break;
            case 20:
                push();
                image(imagen[1], 0, 0, width, height);
                if (this.botonMenu.mouse()) {
                    image(imagen[21][this.frame], 0, 0, width, height);
                } else {
                    image(imagen[20][this.frame], 0, 0, width, height);
                }
                this.botonMenu.dibujar();
                textSize(60);
                fill(0);
                text("Autor: Charles Perrault", 50, 80);
                fill(255);
                text("Programacion e Ilustraciones: Lisandro Rojas 94036/7", 50, 150, 500, 400);
                pop();

                break;

        }
    }

    actualizar() {
        if (frameCount % 30 == 0) {
            this.frame++;
        }
        if (this.frame == 2) {
            this.frame = 0;
        }
        switch (this.pantalla) {

            case 0:
                this.botonInicio.actualizar();
                this.botonCreditos.actualizar();
                break;

            case 1:
                if (this.esteTexto > 2) {
                    this.botonSiguiente.actualizar();
                }
                break;

            case 2:
                if (this.esteTexto > 2) {
                    this.botonSiguiente.actualizar();
                }
                break;

            case 3:
                if (this.esteTexto > 7) {
                    this.botonSiguiente.actualizar();
                }
                break;

            case 4:
                this.botas.actualizar(imagen[10][this.frame]);
                this.sombrero.actualizar(imagen[11][this.frame]);
                if (this.botas.checkTerminado() && this.botas.checkTerminado())
                    this.botonSiguiente.actualizar();
                break;

            case 5:
                if (this.esteTexto > 0) {
                    this.botonSiguiente.actualizar();
                }
                break;

            case 6:
                if (this.esteTexto > 0) {
                    this.botonSiguiente.actualizar();
                }
                break;

            case 7:
                this.botonSiguiente.actualizar();
                break

            case 8:
                if (!this.pausa) {
                    this.juego.actualizar()
                }
                if (this.juego.checkJuegoPerdido()) {
                    this.pantalla = 9;
                } else if (this.juego.finDelJuego()) {
                    this.pantalla = 9;
                    let resultado = this.juego.DevolverPuntajeTrigo() - this.juego.DevolverPuntajeZanahoria();
                    switch (true) {

                        case resultado > 0 && resultado < 20:
                            this.agrado++;
                            break;
                        case resultado >= 20:
                            this.agrado += 2;
                            break;
                    }
                }
                break;
            case 9:
                if (this.juego.checkJuegoPerdido()) {
                    this.botonMenu.actualizar();
                    this.botonReiniciar.actualizar();
                } else {
                    if (this.juego.DevolverPuntajeTrigo() == 0 && this.juego.DevolverPuntajeZanahoria() == 0) {
                        this.botonMenu.actualizar();
                        this.botonReiniciar.actualizar();
                    } else {
                        let resultado = this.juego.DevolverPuntajeTrigo() - this.juego.DevolverPuntajeZanahoria();
                        switch (true) {

                            case resultado <= -20:
                                this.botonMenu.actualizar();
                                this.botonReiniciar.actualizar();
                                break;
                            case resultado > -20:
                                if (this.esteTexto > 0) {
                                    this.botonSiguiente.dibujar();
                                }
                                break;
                        }

                    }
                }
                break;
            case 10:
                this.LlamadoS.actualizar();
                this.LlamadoM.actualizar();
                break;
            case 11:
                this.botonReiniciar.actualizar();
                this.botonMenu.actualizar();
                break;
            case 20:
                this.botonMenu.actualizar();
                break;
        }
    }

    mouse() {
        switch (this.pantalla) {
            case 0:
                if (this.botonInicio.mouse()) {
                    this.pantalla = 1;
                }
                if (this.botonCreditos.mouse()) {
                    this.pantalla = 20;
                }
                break;
            case 1:
                if (this.esteTexto < 3) {
                    this.esteTexto++;
                } else {
                    if (this.botonSiguiente.mouse()) {

                        this.pantalla = 2;
                        this.esteTexto = 0;
                    }
                }
                break;
            case 2:

                if (this.esteTexto < 3) {
                    this.esteTexto++;
                } else {
                    if (this.botonSiguiente.mouse()) {

                        this.pantalla = 3;
                        this.esteTexto = 0;
                    }
                }
                break;

            case 3:
                if (this.esteTexto < 8) {
                    this.esteTexto++;
                } else {
                    if (this.botonSiguiente.mouse()) {

                        this.pantalla = 4;
                        this.esteTexto = 0;
                    }
                }
                break;

            case 4:
                if (this.botas.checkTerminado() && this.botas.checkTerminado()) {
                    if (this.botonSiguiente.mouse()) {
                        this.pantalla = 5;
                        this.botas.reset();
                        this.sombrero.reset();
                    }
                }
                break;

            case 5:
                if (this.esteTexto < 1) {
                    this.esteTexto++;
                } else {
                    if (this.botonSiguiente.mouse()) {

                        this.pantalla = 6;
                        this.esteTexto = 0;
                    }
                }
                break;

            case 6:
                if (this.esteTexto < 1) {
                    this.esteTexto++;
                } else {
                    if (this.botonSiguiente.mouse()) {

                        this.pantalla = 7;
                        this.esteTexto = 0;
                    }
                }
                break;

            case 7:
                if (this.botonSiguiente.mouse()) {
                    this.pantalla = 8;
                }
                break;

            case 8:

                break;

            case 9:
                if (this.juego.checkJuegoPerdido()) {
                    if (this.botonMenu.mouse()) {
                        this.pantalla = 0;
                        this.juego.reiniciar();
                    }
                    if (this.botonReiniciar.mouse()) {
                        this.pantalla = 8;
                        this.juego.reiniciar();
                    }
                } else {
                    if (this.juego.DevolverPuntajeTrigo() == 0 && this.juego.DevolverPuntajeZanahoria() == 0) {
                        if (this.botonMenu.mouse()) {
                            this.pantalla = 0;
                            this.juego.reiniciar();
                        }
                        if (this.botonReiniciar.mouse()) {
                            this.pantalla = 8;
                            this.juego.reiniciar();
                        }
                    } else {
                        let resultado = this.juego.DevolverPuntajeTrigo() - this.juego.DevolverPuntajeZanahoria();
                        if (resultado <= -20) {
                            if (this.botonMenu.mouse()) {
                                this.pantalla = 0;
                                this.juego.reiniciar();
                            }
                            if (this.botonReiniciar.mouse()) {
                                this.juego.reiniciar();
                                this.pantalla = 8;
                            }
                        } else {
                            if (this.esteTexto < 1) {
                                this.esteTexto++;
                            } else {
                                if (this.botonSiguiente.mouse()) {

                                    this.pantalla = 10;
                                    this.esteTexto = 0;
                                }
                            }
                            break;
                        }
                    }

                }
                break;
            case 10:
                if (this.LlamadoS.mouse()) {
                    this.agrado++
                    this.pantalla = 11;
                }
                if (this.LlamadoM.mouse()) {

                    this.pantalla = 11;
                }
                break;
            case 11:
                if (this.botonMenu.mouse()) {
                    this.pantalla = 0;
                    this.juego.reiniciar();
                }
                if (this.botonReiniciar.mouse()) {
                    this.pantalla = 1;
                    this.juego.reiniciar();
                }
                break;
            case 20:
                if (this.botonMenu.mouse()) {
                    this.pantalla = 0;
                }
                break;
        }
    }

    keyPresion() {
        if (this.pantalla == 8) {
            this.juego.keyApretado();
            if (keyCode == ESCAPE) {
                this.pausa = !this.pausa;
            }

        }

    }

    keyLibre() {
        if (this.pantalla == 8) {
            this.juego.keyLibre();
        }
    }
}
