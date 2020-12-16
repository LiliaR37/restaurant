document.addEventListener('DOMContentLoaded', () => {


    /** Obtiene el hero con las imagenes */
    const imagenHero = document.querySelector('.hero');

    /** Arreglo de imagenes con fondo */
    const imagenes = ['hero.jpg', 'hero2.jpg'];

    /**Inicializadores */
    let i = 0;
    let tiempo = 0;
    setInterval(() => {
        imagenHero.style.backgroundPositionY = '-' + tiempo + 'px';
        
        if (tiempo > 40) {
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

            if (i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }
        }

        tiempo += 1;
    }, 100);

});

