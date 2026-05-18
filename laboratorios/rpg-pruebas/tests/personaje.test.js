const Personaje = require('../src/personaje');


describe('Personaje', () =>{

    // test #1 vida Máxima
    test('personaje creado con vida completa', () => {
    const heroe = new Personaje('triple te', 100, 100, 100);
    // heroe.vidaMaxima(100);
    expect(heroe.vidaActual).toBe(100); 
    });


    // test #2 recibir daño - reduce la vida correctamente
    test('recibe daño correctamente', () => {
        const heroe = new Personaje('nigga', 100, 15, 30);

        heroe.recibirDanio(30);

        expect(heroe.vidaActual).toBe(70);
    });

    // test #3 recibir daño con valor letal - kill
    
    test('recibe daño letal, vida en 0', () => {
        const heroe = new Personaje('grezia', 100, 60, 23);
        heroe.recibirDanio(100);
        expect(heroe.vidaActual).toBe(0);
    });

    // test #4 
    test('daño negativo lanza un error', () =>{
        const heroe = new Personaje('Oscar', 100, 12, 2);

        // heroe.recibirDanio( -5 );

        expect(() => heroe.recibirDanio(-5).toThrow());
    });

    // test #5 curar aumenta la vida correctamente 

    test('currar aumenta la vida correctamente', () => {
        const heroe = new Personaje('Germán', 100, 12, 35);

        heroe.recibirDanio(67);

        heroe.curar(20)

        expect(heroe.vidaActual).toBe(53);
    });

    // test #6 curar nunca excede la vida máxima

    test('curar nunca excede la vida máxima', () => {
        const heroe = new Personaje('we', 100, 12, 35);

        heroe.recibirDanio(67);

        heroe.curar(632)

        expect(heroe.vidaActual).toBe(100);

    });

    // test #7 esta vivo retorna true si vida < 0

    test('esta vivo retorna true si vida > 0',() => {
        const heroe = new Personaje('leo', 100, 12, 42);
       
        expect(heroe.estaVivo).toBeTruthy();
    });

    
});


