class Benny_Hinn {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.sold = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosBennyHinn = [];

librosBennyHinn.push(new Benny_Hinn('Ángeles Y Demonios', 1195, 'Peniel', 2011, 218));
librosBennyHinn.push(new Benny_Hinn('Buenos Días Espíritu Santo', 2250, 'Grupo Nelson', 1990, 205));

for(const libroBennyHinn of librosBennyHinn) {
    libroBennyHinn.addIVA();
}

console.log(librosBennyHinn);

class Bill_Johnson {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.sold = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosBillJohnson = [];

librosBillJohnson.push(new Bill_Johnson('Cuando El Cielo Invade La Tierra', 1135, 'Peniel', 2008, 231));
librosBillJohnson.push(new Bill_Johnson('Cuando El Cielo Invade La Tierra Teens', 930, 'Peniel', 2020, 171));

for(const libroBillJohnson of librosBillJohnson) {
    libroBillJohnson.addIVA();
}

console.log(librosBillJohnson);

class Brennan_Manning {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.sold = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosBrennanManning = [];

librosBrennanManning.push(new Brennan_Manning('La Firma De Jesús', 1035.50, 'Peniel', 2014, 251));
librosBrennanManning.push(new Brennan_Manning('Todo Es Gracia', 955, 'Peniel', 2016, 204));
librosBrennanManning.push(new Brennan_Manning('El Pródigo', 975, 'Peniel', 2017, 320));
librosBrennanManning.push(new Brennan_Manning('Sobre Todo', 360, 'Peniel', 2018, 108));
librosBrennanManning.push(new Brennan_Manning('El Latido Del Corazón Del Rabí', 875, 'Peniel', 2017, 127));
librosBrennanManning.push(new Brennan_Manning('El Abrazo De Abba', 955, 'Peniel', 2015, 207));
librosBrennanManning.push(new Brennan_Manning('León Y Cordero', 1115, 'Peniel', 2017, 239));
librosBrennanManning.push(new Brennan_Manning('Destellos De Jesús', 1095, 'Peniel', 2003, 186));

for(const libroBrennanManning of librosBrennanManning) {
    libroBrennanManning.addIVA();
}

console.log(librosBrennanManning);

class Dante_Gebel {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.sold = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosDanteGebel = [];

librosDanteGebel.push(new Dante_Gebel('Asuntos Internos', 1330, 'Vida', 2011, 152));
librosDanteGebel.push(new Dante_Gebel('Destinado Al Éxito', 1485, 'Vida', 2009, 208));
librosDanteGebel.push(new Dante_Gebel('El Amor En Los Tiempos Del Facebook', 1250, 'Vida', 2016, 204));
librosDanteGebel.push(new Dante_Gebel('El Código Del Campeón', 1330, 'Vida', 2007, 184));
librosDanteGebel.push(new Dante_Gebel('Las Arenas Del Alma', 1785, 'Vida', 2017, 182));
librosDanteGebel.push(new Dante_Gebel('Marea Baja', 1545, 'Harper Collins', 2017, 237));
librosDanteGebel.push(new Dante_Gebel('Pasión De Multitudes', 1620, 'Vida', 2009, 224));
librosDanteGebel.push(new Dante_Gebel('Los Mejores Mensajes De Dante Gebel', 1380, 'Vida', 2008, 192));

for(const libroDanteGebel of librosDanteGebel) {
    libroDanteGebel.addIVA();
}

console.log(librosDanteGebel);

class Isaac_Pitre {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosIsaacPitre = [];

librosIsaacPitre.push(new Isaac_Pitre('El Adn Divino', 450, 'Peniel', 2014, 111));

for(const libroIsaacPitre of librosIsaacPitre) {
    libroIsaacPitre.addIVA();
}

console.log(librosIsaacPitre);

class Itiel_Arroyo {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosItielArroyo = [];

librosItielArroyo.push(new Itiel_Arroyo('Amar Es Para Valientes', 1450, 'E625', 2020, 152));

for(const libroItielArroyo of librosItielArroyo) {
    libroItielArroyo.addIVA();
}

console.log(librosItielArroyo);

class Jim_George {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosJimGeorge = [];

librosJimGeorge.push(new Jim_George('Un Papá Conforme Al Corazón De Dios', 1330, 'Portavoz', 2015, 223));
librosJimGeorge.push(new Jim_George('Un Esposo Conforme Al Corazón De Dios', 450, 'Portavoz', 2004, 246));
librosJimGeorge.push(new Jim_George('Conoce Tu Biblia Desde La A Hasta La Z', 1480, 'Portavoz', 2018, 247));
librosJimGeorge.push(new Jim_George('Las 50 Enseñanzas Mas Importantes De La Biblia', 1380, 'Portavoz', 2017, 220));
librosJimGeorge.push(new Jim_George('Guia De Un Jovén Para Las Buenas Decisiones', 1330, 'Portavoz', 2017, 176));
librosJimGeorge.push(new Jim_George('La Influencia De Un Hombre De Dios', 430, 'Portavoz', 2013, 205));
librosJimGeorge.push(new Jim_George('Un Hombre Conforme Al Corazón De Dios', 700, 'Portavoz', 2005, 240));

for(const libroJimGeorge of librosJimGeorge) {
    libroJimGeorge.addIVA();
}

console.log(librosJimGeorge);

class Josh_McDowell {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosJoshMcDowell = [];

librosJoshMcDowell.push(new Josh_McDowell('Inspirada Por Dios', 1255, 'Mundo Hispano', 2016, 242));
librosJoshMcDowell.push(new Josh_McDowell('Papás Comprometidos', 970, 'Mundo Hispano', 2015, 208));
librosJoshMcDowell.push(new Josh_McDowell('Mas Que Un Carpintero', 550, 'Unilit', 2012, 247));
librosJoshMcDowell.push(new Josh_McDowell('Evidencia Que Demanda Un Veredicto', 4340, 'Mundo Hispano', 2019, 1008));
librosJoshMcDowell.push(new Josh_McDowell('¿Tolerancia o Intolerancia?', 1600, 'Unilit', 2018, 235));
librosJoshMcDowell.push(new Josh_McDowell('El Verdadero Amor Espera', 1460, 'CLC', 2017, 304));

for(const libroJoshMcDowell of librosJoshMcDowell) {
    libroJoshMcDowell.addIVA();
}

console.log(librosJoshMcDowell);

class Joyce_Meyer {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosJoyceMeyer = [];

librosJoyceMeyer.push(new Joyce_Meyer('La Conexión De La Mente', 1700, 'Faith Word', 2015, 242));
librosJoyceMeyer.push(new Joyce_Meyer('Conozca A Dios Intimamente', 1580, 'Casa Creación', 2015, 368));
librosJoyceMeyer.push(new Joyce_Meyer('Las Siete Cosas Que Te Roban El Gozo', 1825, 'Faith Word', 2004, 233));
librosJoyceMeyer.push(new Joyce_Meyer('El Poder De La Determinación', 365, 'Peniel', 2005, 125));
librosJoyceMeyer.push(new Joyce_Meyer('Confianza Inquebrantable', 1695, 'Faith Word', 2014, 230));
librosJoyceMeyer.push(new Joyce_Meyer('Usted Puede Comenzar De Nuevo', 1480, 'Faith Word', 2014, 205));
librosJoyceMeyer.push(new Joyce_Meyer('Cómo Profundizar Su Relación Con Dios', 450, 'Peniel', 2013, 125));
librosJoyceMeyer.push(new Joyce_Meyer('El Campo De Batalla De La Mente', 1760, 'Faith Word', 2011, 257));

for(const libroJoyceMeyer of librosJoyceMeyer) {
    libroJoyceMeyer.addIVA();
}

console.log(librosJoyceMeyer);

class Junior_Zapata {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosJuniorZapata = [];

librosJuniorZapata.push(new Junior_Zapata('El Papá Imperfecto', 1020, 'Hoja Del Sur', 2011, 174));
librosJuniorZapata.push(new Junior_Zapata('Agorafobia', 1330, 'Vida', 2009, 145));
librosJuniorZapata.push(new Junior_Zapata('Elvis, Pitágoras Y La Historia De Dios', 1890, 'Vida Publishers', 2013, 218));

for(const libroJuniorZapata of librosJuniorZapata) {
    libroJuniorZapata.addIVA();
}

console.log(librosJuniorZapata);

class Kathryn_Kuhlman {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosKathrynKulhman = [];

librosKathrynKulhman.push(new Kathryn_Kuhlman('El Poder Mas Grande Del Mundo', 895, 'Peniel', 2008, 142));
librosKathrynKulhman.push(new Kathryn_Kuhlman('Jesucristo Nuestro Sanador', 1060, 'Peniel', 2007, 188));
librosKathrynKulhman.push(new Kathryn_Kuhlman('El Toque Del Maestro', 350, 'Peniel', 2009, 110));

for(const libroKathrynKulhman of librosKathrynKulhman) {
    libroKathrynKulhman.addIVA();
}

console.log(librosKathrynKulhman);

class Lucas_Leys {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosLucasLeys = [];

librosLucasLeys.push(new Lucas_Leys('Guia De Supervivencia Para Universitarios', 970, 'E625', 2020, 152));
librosLucasLeys.push(new Lucas_Leys('Diferente', 1400, 'Vida', 2015, 190));
librosLucasLeys.push(new Lucas_Leys('La Batalla De Las Drogas', 1095, 'Vida', 2013, 103));
librosLucasLeys.push(new Lucas_Leys('Liderazgo Generacional', 1330, 'E625', 2017, 217));

for(const libroLucasLeys of librosLucasLeys) {
    libroLucasLeys.addIVA();
}

console.log(librosLucasLeys);

class Matt_Redman {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosMattRedman = [];

librosMattRedman.push(new Matt_Redman('Postrados En Adoración', 250, 'Peniel', 2005, 120));
librosMattRedman.push(new Matt_Redman('Lo Que Todo Adorador Debe Saber', 980, 'Peniel', 2004, 156));
librosMattRedman.push(new Matt_Redman('El Adorador Insaciable', 400, 'Peniel', 2011, 124));

for(const libroMattRedman of librosMattRedman) {
    libroMattRedman.addIVA();
}

console.log(librosMattRedman);

class Paolo_Lacota {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosPaoloLacota = [];

librosPaoloLacota.push(new Paolo_Lacota('Como Comenzar Tu Ministerio Con Pasos Firmes', 1210, 'E625', 2018, 168));
librosPaoloLacota.push(new Paolo_Lacota('Como Salvar Tu Matrimonio Antes De Casarte', 1230, 'E625', 2017, 192));
librosPaoloLacota.push(new Paolo_Lacota('Los Mas Buscados', 680, 'Certeza', 2014, 127));
librosPaoloLacota.push(new Paolo_Lacota('Imagineria', 1220, 'E625', 2021, 192));

for(const libroPaoloLacota of librosPaoloLacota) {
    libroPaoloLacota.addIVA();
}

console.log(librosPaoloLacota);

class Ron_Luce {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosRonLuce = [];

librosRonLuce.push(new Ron_Luce('Amigos Sin Beneficios', 1210, 'Unilit', 2011, 175));

for(const libroRonLuce of librosRonLuce) {
    libroRonLuce.addIVA();
}

console.log(librosRonLuce);

class Stephen_Arterburn {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosStephenArterburn = [];

librosStephenArterburn.push(new Stephen_Arterburn('Un Matrimonio Aun Mejor', 525, 'Unilit', 2017, 111));
librosStephenArterburn.push(new Stephen_Arterburn('Tome Control De Lo Que Lo Controla', 970, 'Casa Creación', 2007, 123));
librosStephenArterburn.push(new Stephen_Arterburn('Ser Cristiano', 1150, 'Peniel', 2008, 240));
librosStephenArterburn.push(new Stephen_Arterburn('La Batalla De Cada Hombre', 750, 'Unilit', 2013, 247));

for(const libroStephenArterburn of librosStephenArterburn) {
    libroStephenArterburn.addIVA();
}

console.log(librosStephenArterburn);

class Timothy_Jorgensen {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosTimothyJorgensen = [];

librosTimothyJorgensen.push(new Timothy_Jorgensen('Aviva El Fuego De Tu Don', 1025, 'Peniel', 2013, 287));

for(const libroTimothyJorgensen of librosTimothyJorgensen) {
    libroTimothyJorgensen.addIVA();
}

console.log(librosTimothyJorgensen);

class Yiye_Avila {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.vendido = false;
    }

    addIVA() {
        this.precio = this.precio * 1.21;
    }
}

const librosYiyeAvila = [];

librosYiyeAvila.push(new Yiye_Avila('La Ciencia De La Oración', 1110, 'Unilit', 1994, 145));
librosYiyeAvila.push(new Yiye_Avila('El Valle De Los Huesos Secos', 875, 'Unilit', 1996, 48));

for(const libroYiyeAvila of librosYiyeAvila) {
    libroYiyeAvila.addIVA();
}

console.log(librosYiyeAvila);