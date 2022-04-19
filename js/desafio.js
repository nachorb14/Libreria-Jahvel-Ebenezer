class Benny_Hinn {
    constructor(nombre, precio, editorial, año, paginas) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.editorial = editorial.toUpperCase();
        this.año = año;
        this.paginas = paginas;
        this.sold = false;
    }
}

const librosBennyHinn = [];

librosBennyHinn.push(new Benny_Hinn('Ángeles Y Demonios', 1195, 'Peniel', 2011, 218));
librosBennyHinn.push(new Benny_Hinn('Buenos Días Espíritu Santo', 2250, 'Grupo Nelson', 1990, 205));
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
}

const librosBillJohnson = [];

librosBillJohnson.push(new Bill_Johnson('Cuando El Cielo Invade La Tierra', 1135, 'Peniel', 2008, 231));
librosBillJohnson.push(new Bill_Johnson('Cuando El Cielo Invade La Tierra Teens', 930, 'Peniel', 2020, 171));
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
}

const librosIsaacPitre = [];

librosIsaacPitre.push(new Isaac_Pitre('El Adn Divino', 450, 'Peniel', 2014, 111));
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
}

const librosItielArroyo = [];

librosItielArroyo.push(new Itiel_Arroyo('Amar Es Para Valientes', 1450, 'E625', 2020, 152));
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
}

const librosJimGeorge = [];

librosJimGeorge.push(new Jim_George('Un Papá Conforme Al Corazón De Dios', 1330, 'Portavoz', 2015, 223));
librosJimGeorge.push(new Jim_George('Un Esposo Conforme Al Corazón De Dios', 450, 'Portavoz', 2004, 246));
librosJimGeorge.push(new Jim_George('Conoce Tu Biblia Desde La A Hasta La Z', 1480, 'Portavoz', 2018, 247));
librosJimGeorge.push(new Jim_George('Las 50 Enseñanzas Mas Importantes De La Biblia', 1380, 'Portavoz', 2017, 220));
librosJimGeorge.push(new Jim_George('Guia De Un Jovén Para Las Buenas Decisiones', 1330, 'Portavoz', 2017, 176));
librosJimGeorge.push(new Jim_George('La Influencia De Un Hombre De Dios', 430, 'Portavoz', 2013, 205));
librosJimGeorge.push(new Jim_George('Un Hombre Conforme Al Corazón De Dios', 700, 'Portavoz', 2005, 240));
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
}

const librosJoshMcDowell = [];

librosJoshMcDowell.push(new Josh_McDowell('Inspirada Por Dios', 1255, 'Mundo Hispano', 2016, 242));
librosJoshMcDowell.push(new Josh_McDowell('Papás Comprometidos', 970, 'Mundo Hispano', 2015, 208));
librosJoshMcDowell.push(new Josh_McDowell('Mas Que Un Carpintero', 550, 'Unilit', 2012, 247));
librosJoshMcDowell.push(new Josh_McDowell('Evidencia Que Demanda Un Veredicto', 4340, 'Mundo Hispano', 2019, 1008));
librosJoshMcDowell.push(new Josh_McDowell('¿Tolerancia o Intolerancia?', 1600, 'Unilit', 2018, 235));
librosJoshMcDowell.push(new Josh_McDowell('El Verdadero Amor Espera', 1460, 'CLC', 2017, 304));
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
}

const librosJuniorZapata = [];

librosJuniorZapata.push(new Junior_Zapata('El Papá Imperfecto', 1020, 'Hoja Del Sur', 2011, 174));
librosJuniorZapata.push(new Junior_Zapata('Agorafobia', 1330, 'Vida', 2009, 145));
librosJuniorZapata.push(new Junior_Zapata('Elvis, Pitágoras Y La Historia De Dios', 1890, 'Vida Publishers', 2013, 218));
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
}

const librosKathrynKulhman = [];

librosKathrynKulhman.push(new Kathryn_Kuhlman('El Poder Mas Grande Del Mundo', 895, 'Peniel', 2008, 142));
librosKathrynKulhman.push(new Kathryn_Kuhlman('Jesucristo Nuestro Sanador', 1060, 'Peniel', 2007, 188));
librosKathrynKulhman.push(new Kathryn_Kuhlman('El Toque Del Maestro', 350, 'Peniel', 2009, 110));
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
}

const librosLucasLeys = [];

librosLucasLeys.push(new Lucas_Leys('Guia De Supervivencia Para Universitarios', 970, 'E625', 2020, 152));
librosLucasLeys.push(new Lucas_Leys('Diferente', 1400, 'Vida', 2015, 190));
librosLucasLeys.push(new Lucas_Leys('La Batalla De Las Drogas', 1095, 'Vida', 2013, 103));
librosLucasLeys.push(new Lucas_Leys('Liderazgo Generacional', 1330, 'E625', 2017, 217));
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
}

const librosMattRedman = [];

librosMattRedman.push(new Matt_Redman('Postrados En Adoración', 250, 'Peniel', 2005, 120));
librosMattRedman.push(new Matt_Redman('Lo Que Todo Adorador Debe Saber', 980, 'Peniel', 2004, 156));
librosMattRedman.push(new Matt_Redman('El Adorador Insaciable', 400, 'Peniel', 2011, 124));
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
}

const librosPaoloLacota = [];

librosPaoloLacota.push(new Paolo_Lacota('Como Comenzar Tu Ministerio Con Pasos Firmes', 1210, 'E625', 2018, 168));
librosPaoloLacota.push(new Paolo_Lacota('Como Salvar Tu Matrimonio Antes De Casarte', 1230, 'E625', 2017, 192));
librosPaoloLacota.push(new Paolo_Lacota('Los Mas Buscados', 680, 'Certeza', 2014, 127));
librosPaoloLacota.push(new Paolo_Lacota('Imagineria', 1220, 'E625', 2021, 192));
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
}

const librosRonLuce = [];

librosRonLuce.push(new Ron_Luce('Amigos Sin Beneficios', 1210, 'Unilit', 2011, 175));
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
}

const librosStephenArterburn = [];

librosStephenArterburn.push(new Stephen_Arterburn('Un Matrimonio Aun Mejor', 525, 'Unilit', 2017, 111));
librosStephenArterburn.push(new Stephen_Arterburn('Tome Control De Lo Que Lo Controla', 970, 'Casa Creación', 2007, 123));
librosStephenArterburn.push(new Stephen_Arterburn('Ser Cristiano', 1150, 'Peniel', 2008, 240));
librosStephenArterburn.push(new Stephen_Arterburn('La Batalla De Cada Hombre', 750, 'Unilit', 2013, 247));
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
}

const librosTimothyJorgensen = [];

librosTimothyJorgensen.push(new Timothy_Jorgensen('Aviva El Fuego De Tu Don', 1025, 'Peniel', 2013, 287));
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
}

const librosYiyeAvila = [];

librosYiyeAvila.push(new Yiye_Avila('La Ciencia De La Oración', 1110, 'Unilit', 1994, 145));
librosYiyeAvila.push(new Yiye_Avila('El Valle De Los Huesos Secos', 875, 'Unilit', 1996, 48));
console.log(librosYiyeAvila);

const productos = [
    {id: 1, nombre: 'angeles y demonios', autor:'benny hinn', precio: 1195, editorial: 'Peniel', año: 2011, paginas: 218,},
    {id: 2, nombre: 'buenos dias espiritu santo', autor:'benny hinn', precio: 2250, editorial: 'Grupo Nelson', año: 1990, paginas: 205,},
    {id: 3, nombre: 'cuando el cielo invade la tierra', autor:'bill johnson', precio: 1135, editorial: 'Peniel', año: 2008, paginas: 231,},
    {id: 4, nombre: 'cuando el cielo invade la tierra teens', autor:'bill johnson', precio: 930, editorial: 'Peniel', año: 2020, paginas: 171,},
    {id: 5, nombre: 'la firma de Jesus', autor:'brennan manning', precio: 1040, editorial: 'Peniel', año: 2014, paginas: 251,},
    {id: 6, nombre: 'todo es gracia', autor:'brennan manning', precio: 960, editorial: 'Peniel', año: 2016, paginas: 204,},
    {id: 7, nombre: 'el prodigo', autor:'brennan manning', precio: 975, editorial: 'Peniel', año: 2017, paginas: 320,},
    {id: 8, nombre: 'sobre todo', autor:'brennan manning', precio: 360, editorial: 'Peniel', año: 2018, paginas: 108,},
    {id: 9, nombre: 'el latido del corazon del rabi', autor:'brennan manning', precio: 875, editorial: 'Peniel', año: 2017, paginas: 127,},
    {id: 10, nombre: 'el abrazo de abba', autor:'brennan manning', precio: 955, editorial: 'Peniel', año: 2015, paginas: 207,},
    {id: 11, nombre: 'leon y cordero', autor:'brennan manning', precio: 1115, editorial: 'Peniel', año: 2017, paginas: 239,},
    {id: 12, nombre: 'asuntos internos', autor:'dante gebel', precio: 1330, editorial: 'Vida', año: 2011, paginas: 152,},
    {id: 13, nombre: 'destinado al exito', autor:'dante gebel', precio: 1485, editorial: 'Vida', año: 2009, paginas: 208,},
    {id: 14, nombre: 'el amor en los tiempos del facebook', autor:'dante gebel', precio: 1250, editorial: 'Vida', año: 2016, paginas: 204,},
    {id: 15, nombre: 'el codigo del campeon', autor:'dante gebel', precio: 1330, editorial: 'Vida', año: 2007, paginas: 184,},
    {id: 16, nombre: 'las arenas del alma', autor:'dante gebel', precio: 1785, editorial: 'Vida', año: 2017, paginas: 182,},
    {id: 17, nombre: 'marea baja', autor:'dante gebel', precio: 1545, editorial: 'Harper Collins', año: 2017, paginas: 237,},
    {id: 18, nombre: 'pasion de multitudes', autor:'dante gebel', precio: 1620, editorial: 'Vida', año: 2009, paginas: 224,},
    {id: 19, nombre: 'los mejores mensajes de dante gebel', autor:'dante gebel', precio: 1380, editorial: 'Vida', año: 2008, paginas: 192,},
    {id: 20, nombre: 'el adn divino', autor:'isaac pitre', precio: 450, editorial: 'Peniel', año: 2014, paginas: 111,},
    {id: 21, nombre: 'amar es para valientes', autor:'itiel arroyo', precio: 1450, editorial: 'E625', año: 2020, paginas: 152,},
    {id: 22, nombre: 'un papa conforme al corazon de Dios', autor:'jim george', precio: 1330, editorial: 'Portavoz', año: 2015, paginas: 223,},
    {id: 23, nombre: 'un esposo conforme al corazon de Dios', autor:'jim george', precio: 450, editorial: 'Portavoz', año: 2004, paginas: 246,},
    {id: 24, nombre: 'conoce tu biblia desde la a hasta la z', autor:'jim george', precio: 1480, editorial: 'Portavoz', año: 2018, paginas: 247,},
    {id: 25, nombre: 'las 50 enseñanzas mas importantes de la biblia', autor:'jim george', precio: 1380, editorial: 'Portavoz', año: 2017, paginas: 220,},
    {id: 26, nombre: 'guia de un joven para las buenas decisiones', autor:'jim george', precio: 1330, editorial: 'Portavoz', año: 2017, paginas: 176,},
    {id: 27, nombre: 'la influencia de un hombre de Dios', autor:'jim george', precio: 430, editorial: 'Portavoz', año: 2013, paginas: 205,},
    {id: 28, nombre: 'un hombre conforme al corazon de Dios', autor:'jim george', precio: 700, editorial: 'Portavoz', año: 2005, paginas: 240,},
    {id: 29, nombre: 'inspirada por Dios', autor:'josh mcdowell', precio: 1255, editorial: 'Mundo Hispano', año: 2016, paginas: 242,},
    {id: 30, nombre: 'papas comprometidos', autor:'josh mcdowell', precio: 970, editorial: 'Mundo Hispano', año: 2015, paginas: 208,},
    {id: 31, nombre: 'mas que un carpintero', autor:'josh mcdowell', precio: 550, editorial: 'Unilit', año: 2012, paginas: 247,},
    {id: 32, nombre: 'evidencia que demanda un veredicto', autor:'josh mcdowell', precio: 4340, editorial: 'Mundo Hispano', año: 2019, paginas: 1008,},
    {id: 33, nombre: '¿tolerancia o intolerancia?', autor:'josh mcdowell', precio: 1600, editorial: 'Unilit', año: 2018, paginas: 235,},
    {id: 34, nombre: 'el verdadero amor espera', autor:'josh mcdowell', precio: 1460, editorial: 'CLC', año: 2017, paginas: 304,},
    {id: 35, nombre: 'la conexion de la mente', autor:'joyce meyer', precio: 1700, editorial: 'Faith Word', año: 2015, paginas: 242,},
    {id: 36, nombre: 'conozca a Dios intimamente', autor:'joyce meyer', precio: 1580, editorial: 'Casa Creación', año: 2015, paginas: 368,},
    {id: 37, nombre: 'las siete cosas que te roban el gozo', autor:'joyce meyer', precio: 1825, editorial: 'Faith Word', año: 2004, paginas: 233,},
    {id: 38, nombre: 'el poder de la determinacion', autor:'joyce meyer', precio: 365, editorial: 'Peniel', año: 2005, paginas: 125,},
    {id: 39, nombre: 'confianza inquebrantable', autor:'joyce meyer', precio: 1695, editorial: 'Faith Word', año: 2014, paginas: 230,},
    {id: 40, nombre: 'usted puede comenzar de nuevo', autor:'joyce meyer', precio: 1480, editorial: 'Faith Word', año: 2014, paginas: 205,},
    {id: 41, nombre: 'como profundizar su relacion con Dios', autor:'joyce meyer', precio: 450, editorial: 'Peniel', año: 2013, paginas: 125,},
    {id: 42, nombre: 'el campo de batalla de la mente', autor:'joyce meyer', precio: 1760, editorial: 'Faith Word', año: 2011, paginas: 257,},
    {id: 43, nombre: 'el papa imperfecto', auotr:'junior zapata', precio: 1020, editorial: 'Hoja Del Sur', año: 2011, paginas: 174,},
    {id: 44, nombre: 'agorafobia', auotr:'junior zapata', precio: 1330, editorial: 'Vida', año: 2009, paginas: 145,},
    {id: 45, nombre: 'elvis, pitagoras y la historia de Dios', auotr:'junior zapata', editorial: 1890, editorial: 'Vida Publishers', año: 2013, paginas: 218,},
    {id: 46, nombre: 'el poder mas grande del mundo',autor:'kathryn kuhlman', precio: 895, editorial: 'Peniel', año: 2008, paginas: 142,},
    {id: 47, nombre: 'jesucristo nuestro sanador',autor:'kathryn kuhlman', precio: 1060, editorial: 'Peniel', año: 2007, paginas: 188,},
    {id: 48, nombre: 'el toque del maestro',autor:'kathryn kuhlman', precio: 350, editorial: 'Peniel', año: 2009, paginas: 110,},
    {id: 49, nombre: 'guia de supervivencia para universitarios', autor:'lucas leys', precio: 970, editorial: 'E625', año: 2020, paginas: 152,},
    {id: 50, nombre: 'diferente', autor:'lucas leys', precio: 1400, editorial: 'Vida', año: 2015, paginas: 190,},
    {id: 51, nombre: 'la batalla de las drogas', autor:'lucas leys', precio: 1095, editorial: 'Vida', año: 2013, paginas: 103,},
    {id: 52, nombre: 'liderazgo generacional', autor:'lucas leys', precio: 1330, editorial: 'E625', año: 2017, paginas: 217,},
    {id: 53, nombre: 'postrados en adoracion', autor:'matt redman', precio: 250, editorial: 'Peniel', año: 2005, paginas: 120,},
    {id: 54, nombre: 'lo que todo adorador debe saber', autor:'matt redman', precio: 980, editorial: 'Peniel', año: 2004, paginas: 156,},
    {id: 55, nombre: 'el adorador insaciable', autor:'matt redman', precio: 400, editorial: 'Peniel', año: 2011, paginas: 124,},
    {id: 56, nombre: 'como comenzar tu ministerio con pasos firmes', autor:'paolo lacota', precio: 1210, editorial: 'E625', año: 2018, paginas: 168,},
    {id: 57, nombre: 'como salvar tu matrimonio antes de casarte', autor:'paolo lacota', precio: 1230, editorial: 'E625', año: 2017, paginas: 192,},
    {id: 58, nombre: 'los mas buscados', autor:'paolo lacota', precio: 680, editorial: 'Certeza', año: 2014, paginas: 127,},
    {id: 59, nombre: 'imagineria', autor:'paolo lacota', precio: 1220, editorial: 'E625', año: 2021, paginas: 192,},
    {id: 60, nombre: 'amigos sin beneficios', autor:'ron luce', precio: 1210, editorial: 'Unilit', año: 2011, paginas: 175,},
    {id: 61, nombre: 'un matrimonio aun mejor', autor:'stephen arterburn', precio: 525, editorial: 'Unilit', año: 2017, paginas: 111,},
    {id: 62, nombre: 'tome control de lo que lo controla', autor:'stephen arterburn', precio: 970, editorial: 'Casa Creacion', año: 2007, paginas: 123,},
    {id: 63, nombre: 'ser cristiano', autor:'stephen arterburn', precio: 1150, editorial: 'Peniel', año: 2008, paginas: 240,},
    {id: 64, nombre: 'la batalla de cada hombre', autor:'stephen arterburn', precio: 750, editorial: 'Unilit', año: 2013, paginas: 247,},
    {id: 65, nombre: 'aviva el fuego de tu don', autor:'timothy jorgensen', precio: 1025, editorial: 'Peniel', año: 2013, paginas: 287,},
    {id: 66, nombre: 'la ciencia de la oracion', autor:'yiye avila', precio: 1110, editorial: 'Unilit', año: 1994, paginas: 145,},
    {id: 67, nombre: 'el valle de los huesos secos', autor:'yiye avila', precio: 875, editorial: 'Unilit', año: 1996, paginas: 48,}
]

// Utilización de SOME para saber si el libro que busca está en la libreria
const nombre = prompt('¿Este libro existe?').toLowerCase() 
const existe = productos.some(p => p.nombre.toLowerCase() === nombre)

if(existe == true) {
    console.log('Este libro existe!');
} else {
    console.log('Este libro no existe!');
}

// Filtro para acomodar a los libros que cuestan menos de $1000 en orden alfabético
const baratos = productos.filter(p => p.precio < 1000)

baratos.sort((a, b) => {
    if(a.nombre > b.nombre) return 1
    if(a.nombre < b.nombre) return -1

    return 0
})

console.log('Baratos: ', baratos)

// Filtro para acomodar a los libros que cuestan menos de $1000 en orden alfabético
const caros = productos.filter(p => p.precio > 1000)

caros.sort((a, b) => {
    if(a.nombre > b.nombre) return 1
    if(a.nombre < b.nombre) return -1

    return 0
})

console.log('Caros:', caros)