/* id="cuatri_1.0.1.1"   1 -> cuatrimestre   0 -> Objeto en el JSON    1-> Fila  */

fetch('/js/Materias.json')
.then(response => response.json())
.then(data => {
    
    document.getElementById("cuatri_1.0.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[0].cuatrimestre;
    document.getElementById("cursada_1.0.1").innerHTML = 'Veces Cursada: ' + data.Materias[0].cursada;
    document.getElementById("materia_1.0.1").innerHTML = ' '               + data.Materias[0].materia;
    document.getElementById("codigo_1.0.1").innerHTML = 'Código: '         + data.Materias[0].codigo;
    document.getElementById("califi_1.0.1").innerHTML = 'Calificación:  '  + data.Materias[0].calificacion;

    document.getElementById("cuatri_2.7.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[7].cuatrimestre;
    document.getElementById("cursada_2.7.1").innerHTML = 'Veces Cursada: ' + data.Materias[7].cursada;
    document.getElementById("materia_2.7.1").innerHTML = ' '               + data.Materias[7].materia;
    document.getElementById("codigo_2.7.1").innerHTML = 'Código: '         + data.Materias[7].codigo;
    document.getElementById("califi_2.7.1").innerHTML = 'Calificación:  '  + data.Materias[7].calificacion;

    document.getElementById("cuatri_3.14.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[14].cuatrimestre;
    document.getElementById("cursada_3.14.1").innerHTML = 'Veces Cursada: ' + data.Materias[14].cursada;
    document.getElementById("materia_3.14.1").innerHTML = ' '               + data.Materias[14].materia;
    document.getElementById("codigo_3.14.1").innerHTML = 'Código: '         + data.Materias[14].codigo;
    document.getElementById("califi_3.14.1").innerHTML = 'Calificación:  '  + data.Materias[14].calificacion;

    document.getElementById("cuatri_4.21.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[21].cuatrimestre;
    document.getElementById("cursada_4.21.1").innerHTML = 'Veces Cursada: ' + data.Materias[21].cursada;
    document.getElementById("materia_4.21.1").innerHTML = ' '               + data.Materias[21].materia;
    document.getElementById("codigo_4.21.1").innerHTML = 'Código: '         + data.Materias[21].codigo;
    document.getElementById("califi_4.21.1").innerHTML = 'Calificación:  '  + data.Materias[21].calificacion;

    document.getElementById("cuatri_5.28.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[28].cuatrimestre;
    document.getElementById("cursada_5.28.1").innerHTML = 'Veces Cursada: ' + data.Materias[28].cursada;
    document.getElementById("materia_5.28.1").innerHTML = ' '               + data.Materias[28].materia;
    document.getElementById("codigo_5.28.1").innerHTML = 'Código: '         + data.Materias[28].codigo;
    document.getElementById("califi_5.28.1").innerHTML = 'Calificación:  '  + data.Materias[28].calificacion;

    document.getElementById("cuatri_6.35.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[35].cuatrimestre;
    document.getElementById("cursada_6.35.1").innerHTML = 'Veces Cursada: ' + data.Materias[35].cursada;
    document.getElementById("materia_6.35.1").innerHTML = ' '               + data.Materias[35].materia;
    document.getElementById("codigo_6.35.1").innerHTML = 'Código: '         + data.Materias[35].codigo;
    document.getElementById("califi_6.35.1").innerHTML = 'Calificación:  '  + data.Materias[35].calificacion;

    document.getElementById("cuatri_7.42.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[42].cuatrimestre;
    document.getElementById("cursada_7.42.1").innerHTML = 'Veces Cursada: ' + data.Materias[42].cursada;
    document.getElementById("materia_7.42.1").innerHTML = ' '               + data.Materias[42].materia;
    document.getElementById("codigo_7.42.1").innerHTML = 'Código: '         + data.Materias[42].codigo;
    document.getElementById("califi_7.42.1").innerHTML = 'Calificación:  '  + data.Materias[42].calificacion;

    document.getElementById("cuatri_8.49.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[49].cuatrimestre;
    document.getElementById("cursada_8.49.1").innerHTML = 'Veces Cursada: ' + data.Materias[49].cursada;
    document.getElementById("materia_8.49.1").innerHTML = ' '               + data.Materias[49].materia;
    document.getElementById("codigo_8.49.1").innerHTML = 'Código: '         + data.Materias[49].codigo;
    document.getElementById("califi_8.49.1").innerHTML = 'Calificación:  '  + data.Materias[49].calificacion;

    document.getElementById("cuatri_9.56.1").innerHTML = 'Cuatrimestre:  '  + data.Materias[56].cuatrimestre;
    document.getElementById("cursada_9.56.1").innerHTML = 'Veces Cursada: ' + data.Materias[56].cursada;
    document.getElementById("materia_9.56.1").innerHTML = ' '               + data.Materias[56].materia;
    document.getElementById("codigo_9.56.1").innerHTML = 'Código: '         + data.Materias[56].codigo;
    document.getElementById("califi_9.56.1").innerHTML = 'Calificación:  '  + data.Materias[56].calificacion;

/*------------------------------------------------------------------------------------------------------------------*/

    document.getElementById("cuatri_1.1.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[1].cuatrimestre;
    document.getElementById("cursada_1.1.2").innerHTML = 'Veces Cursada: ' + data.Materias[1].cursada;
    document.getElementById("materia_1.1.2").innerHTML = ' '               + data.Materias[1].materia;
    document.getElementById("codigo_1.1.2").innerHTML = 'Código: '         + data.Materias[1].codigo;
    document.getElementById("califi_1.1.2").innerHTML = 'Calificación:  '  + data.Materias[1].calificacion;

    document.getElementById("cuatri_2.8.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[8].cuatrimestre;
    document.getElementById("cursada_2.8.2").innerHTML = 'Veces Cursada: ' + data.Materias[8].cursada;
    document.getElementById("materia_2.8.2").innerHTML = ' '               + data.Materias[8].materia;
    document.getElementById("codigo_2.8.2").innerHTML = 'Código: '         + data.Materias[8].codigo;
    document.getElementById("califi_2.8.2").innerHTML = 'Calificación:  '  + data.Materias[8].calificacion;

    document.getElementById("cuatri_3.15.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[15].cuatrimestre;
    document.getElementById("cursada_3.15.2").innerHTML = 'Veces Cursada: ' + data.Materias[15].cursada;
    document.getElementById("materia_3.15.2").innerHTML = ' '               + data.Materias[15].materia;
    document.getElementById("codigo_3.15.2").innerHTML = 'Código: '         + data.Materias[15].codigo;
    document.getElementById("califi_3.15.2").innerHTML = 'Calificación:  '  + data.Materias[15].calificacion;

    document.getElementById("cuatri_4.22.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[22].cuatrimestre;
    document.getElementById("cursada_4.22.2").innerHTML = 'Veces Cursada: ' + data.Materias[22].cursada;
    document.getElementById("materia_4.22.2").innerHTML = ' '               + data.Materias[22].materia;
    document.getElementById("codigo_4.22.2").innerHTML = 'Código: '         + data.Materias[22].codigo;
    document.getElementById("califi_4.22.2").innerHTML = 'Calificación:  '  + data.Materias[22].calificacion;

    document.getElementById("cuatri_5.29.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[29].cuatrimestre;
    document.getElementById("cursada_5.29.2").innerHTML = 'Veces Cursada: ' + data.Materias[29].cursada;
    document.getElementById("materia_5.29.2").innerHTML = ' '               + data.Materias[29].materia;
    document.getElementById("codigo_5.29.2").innerHTML = 'Código: '         + data.Materias[29].codigo;
    document.getElementById("califi_5.29.2").innerHTML = 'Calificación:  '  + data.Materias[29].calificacion;

    document.getElementById("cuatri_6.36.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[36].cuatrimestre;
    document.getElementById("cursada_6.36.2").innerHTML = 'Veces Cursada: ' + data.Materias[36].cursada;
    document.getElementById("materia_6.36.2").innerHTML = ' '               + data.Materias[36].materia;
    document.getElementById("codigo_6.36.2").innerHTML = 'Código: '         + data.Materias[36].codigo;
    document.getElementById("califi_6.36.2").innerHTML = 'Calificación:  '  + data.Materias[36].calificacion;

    document.getElementById("cuatri_7.43.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[43].cuatrimestre;
    document.getElementById("cursada_7.43.2").innerHTML = 'Veces Cursada: ' + data.Materias[43].cursada;
    document.getElementById("materia_7.43.2").innerHTML = ' '               + data.Materias[43].materia;
    document.getElementById("codigo_7.43.2").innerHTML = 'Código: '         + data.Materias[43].codigo;
    document.getElementById("califi_7.43.2").innerHTML = 'Calificación:  '  + data.Materias[43].calificacion;

    document.getElementById("cuatri_8.50.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[50].cuatrimestre;
    document.getElementById("cursada_8.50.2").innerHTML = 'Veces Cursada: ' + data.Materias[50].cursada;
    document.getElementById("materia_8.50.2").innerHTML = ' '               + data.Materias[50].materia;
    document.getElementById("codigo_8.50.2").innerHTML = 'Código: '         + data.Materias[50].codigo;
    document.getElementById("califi_8.50.2").innerHTML = 'Calificación:  '  + data.Materias[50].calificacion;

    document.getElementById("cuatri_9.57.2").innerHTML = 'Cuatrimestre:  '  + data.Materias[57].cuatrimestre;
    document.getElementById("cursada_9.57.2").innerHTML = 'Veces Cursada: ' + data.Materias[57].cursada;
    document.getElementById("materia_9.57.2").innerHTML = ' '               + data.Materias[57].materia;
    document.getElementById("codigo_9.57.2").innerHTML = 'Código: '         + data.Materias[57].codigo;
    document.getElementById("califi_9.57.2").innerHTML = 'Calificación:  '  + data.Materias[57].calificacion;

/*------------------------------------------------------------------------------------------------------------------*/

    document.getElementById("cuatri_1.2.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[2].cuatrimestre;
    document.getElementById("cursada_1.2.3").innerHTML = 'Veces Cursada: ' + data.Materias[2].cursada;
    document.getElementById("materia_1.2.3").innerHTML = ' '               + data.Materias[2].materia;
    document.getElementById("codigo_1.2.3").innerHTML = 'Código: '         + data.Materias[2].codigo;
    document.getElementById("califi_1.2.3").innerHTML = 'Calificación:  '  + data.Materias[2].calificacion;

    document.getElementById("cuatri_2.9.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[9].cuatrimestre;
    document.getElementById("cursada_2.9.3").innerHTML = 'Veces Cursada: ' + data.Materias[9].cursada;
    document.getElementById("materia_2.9.3").innerHTML = ' '               + data.Materias[9].materia;
    document.getElementById("codigo_2.9.3").innerHTML = 'Código: '         + data.Materias[9].codigo;
    document.getElementById("califi_2.9.3").innerHTML = 'Calificación:  '  + data.Materias[9].calificacion;

    document.getElementById("cuatri_3.16.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[16].cuatrimestre;
    document.getElementById("cursada_3.16.3").innerHTML = 'Veces Cursada: ' + data.Materias[16].cursada;
    document.getElementById("materia_3.16.3").innerHTML = ' '               + data.Materias[16].materia;
    document.getElementById("codigo_3.16.3").innerHTML = 'Código: '         + data.Materias[16].codigo;
    document.getElementById("califi_3.16.3").innerHTML = 'Calificación:  '  + data.Materias[16].calificacion;

    document.getElementById("cuatri_4.23.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[23].cuatrimestre;
    document.getElementById("cursada_4.23.3").innerHTML = 'Veces Cursada: ' + data.Materias[23].cursada;
    document.getElementById("materia_4.23.3").innerHTML = ' '               + data.Materias[23].materia;
    document.getElementById("codigo_4.23.3").innerHTML = 'Código: '         + data.Materias[23].codigo;
    document.getElementById("califi_4.23.3").innerHTML = 'Calificación:  '  + data.Materias[23].calificacion;

    document.getElementById("cuatri_5.30.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[30].cuatrimestre;
    document.getElementById("cursada_5.30.3").innerHTML = 'Veces Cursada: ' + data.Materias[30].cursada;
    document.getElementById("materia_5.30.3").innerHTML = ' '               + data.Materias[30].materia;
    document.getElementById("codigo_5.30.3").innerHTML = 'Código: '         + data.Materias[30].codigo;
    document.getElementById("califi_5.30.3").innerHTML = 'Calificación:  '  + data.Materias[30].calificacion;

    document.getElementById("cuatri_6.37.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[37].cuatrimestre;
    document.getElementById("cursada_6.37.3").innerHTML = 'Veces Cursada: ' + data.Materias[37].cursada;
    document.getElementById("materia_6.37.3").innerHTML = ' '               + data.Materias[37].materia;
    document.getElementById("codigo_6.37.3").innerHTML = 'Código: '         + data.Materias[37].codigo;
    document.getElementById("califi_6.37.3").innerHTML = 'Calificación:  '  + data.Materias[37].calificacion;

    document.getElementById("cuatri_7.44.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[44].cuatrimestre;
    document.getElementById("cursada_7.44.3").innerHTML = 'Veces Cursada: ' + data.Materias[44].cursada;
    document.getElementById("materia_7.44.3").innerHTML = ' '               + data.Materias[44].materia;
    document.getElementById("codigo_7.44.3").innerHTML = 'Código: '         + data.Materias[44].codigo;
    document.getElementById("califi_7.44.3").innerHTML = 'Calificación:  '  + data.Materias[44].calificacion;

    document.getElementById("cuatri_8.51.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[51].cuatrimestre;
    document.getElementById("cursada_8.51.3").innerHTML = 'Veces Cursada: ' + data.Materias[51].cursada;
    document.getElementById("materia_8.51.3").innerHTML = ' '               + data.Materias[51].materia;
    document.getElementById("codigo_8.51.3").innerHTML = 'Código: '         + data.Materias[51].codigo;
    document.getElementById("califi_8.51.3").innerHTML = 'Calificación:  '  + data.Materias[51].calificacion;

    document.getElementById("cuatri_9.58.3").innerHTML = 'Cuatrimestre:  '  + data.Materias[58].cuatrimestre;
    document.getElementById("cursada_9.58.3").innerHTML = 'Veces Cursada: ' + data.Materias[58].cursada;
    document.getElementById("materia_9.58.3").innerHTML = ' '               + data.Materias[58].materia;
    document.getElementById("codigo_9.58.3").innerHTML = 'Código: '         + data.Materias[58].codigo;
    document.getElementById("califi_9.58.3").innerHTML = 'Calificación:  '  + data.Materias[58].calificacion;

/*------------------------------------------------------------------------------------------------------------------*/

    document.getElementById("cuatri_1.3.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[3].cuatrimestre;
    document.getElementById("cursada_1.3.4").innerHTML = 'Veces Cursada: ' + data.Materias[3].cursada;
    document.getElementById("materia_1.3.4").innerHTML = ' '               + data.Materias[3].materia;
    document.getElementById("codigo_1.3.4").innerHTML = 'Código: '         + data.Materias[3].codigo;
    document.getElementById("califi_1.3.4").innerHTML = 'Calificación:  '  + data.Materias[3].calificacion;

    document.getElementById("cuatri_2.10.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[10].cuatrimestre;
    document.getElementById("cursada_2.10.4").innerHTML = 'Veces Cursada: ' + data.Materias[10].cursada;
    document.getElementById("materia_2.10.4").innerHTML = ' '               + data.Materias[10].materia;
    document.getElementById("codigo_2.10.4").innerHTML = 'Código: '         + data.Materias[10].codigo;
    document.getElementById("califi_2.10.4").innerHTML = 'Calificación:  '  + data.Materias[10].calificacion;

    document.getElementById("cuatri_3.17.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[17].cuatrimestre;
    document.getElementById("cursada_3.17.4").innerHTML = 'Veces Cursada: ' + data.Materias[17].cursada;
    document.getElementById("materia_3.17.4").innerHTML = ' '               + data.Materias[17].materia;
    document.getElementById("codigo_3.17.4").innerHTML = 'Código: '         + data.Materias[17].codigo;
    document.getElementById("califi_3.17.4").innerHTML = 'Calificación:  '  + data.Materias[17].calificacion;

    document.getElementById("cuatri_4.24.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[24].cuatrimestre;
    document.getElementById("cursada_4.24.4").innerHTML = 'Veces Cursada: ' + data.Materias[24].cursada;
    document.getElementById("materia_4.24.4").innerHTML = ' '               + data.Materias[24].materia;
    document.getElementById("codigo_4.24.4").innerHTML = 'Código: '         + data.Materias[24].codigo;
    document.getElementById("califi_4.24.4").innerHTML = 'Calificación:  '  + data.Materias[24].calificacion;

    document.getElementById("cuatri_5.31.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[31].cuatrimestre;
    document.getElementById("cursada_5.31.4").innerHTML = 'Veces Cursada: ' + data.Materias[31].cursada;
    document.getElementById("materia_5.31.4").innerHTML = ' '               + data.Materias[31].materia;
    document.getElementById("codigo_5.31.4").innerHTML = 'Código: '         + data.Materias[31].codigo;
    document.getElementById("califi_5.31.4").innerHTML = 'Calificación:  '  + data.Materias[31].calificacion;

    document.getElementById("cuatri_6.38.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[38].cuatrimestre;
    document.getElementById("cursada_6.38.4").innerHTML = 'Veces Cursada: ' + data.Materias[38].cursada;
    document.getElementById("materia_6.38.4").innerHTML = ' '               + data.Materias[38].materia;
    document.getElementById("codigo_6.38.4").innerHTML = 'Código: '         + data.Materias[38].codigo;
    document.getElementById("califi_6.38.4").innerHTML = 'Calificación:  '  + data.Materias[38].calificacion;

    document.getElementById("cuatri_7.45.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[45].cuatrimestre;
    document.getElementById("cursada_7.45.4").innerHTML = 'Veces Cursada: ' + data.Materias[45].cursada;
    document.getElementById("materia_7.45.4").innerHTML = ' '               + data.Materias[45].materia;
    document.getElementById("codigo_7.45.4").innerHTML = 'Código: '         + data.Materias[45].codigo;
    document.getElementById("califi_7.45.4").innerHTML = 'Calificación:  '  + data.Materias[45].calificacion;

    document.getElementById("cuatri_8.52.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[52].cuatrimestre;
    document.getElementById("cursada_8.52.4").innerHTML = 'Veces Cursada: ' + data.Materias[52].cursada;
    document.getElementById("materia_8.52.4").innerHTML = ' '               + data.Materias[52].materia;
    document.getElementById("codigo_8.52.4").innerHTML = 'Código: '         + data.Materias[52].codigo;
    document.getElementById("califi_8.52.4").innerHTML = 'Calificación:  '  + data.Materias[52].calificacion;

    document.getElementById("cuatri_9.59.4").innerHTML = 'Cuatrimestre:  '  + data.Materias[59].cuatrimestre;
    document.getElementById("cursada_9.59.4").innerHTML = 'Veces Cursada: ' + data.Materias[59].cursada;
    document.getElementById("materia_9.59.4").innerHTML = ' '               + data.Materias[59].materia;
    document.getElementById("codigo_9.59.4").innerHTML = 'Código: '         + data.Materias[59].codigo;
    document.getElementById("califi_9.59.4").innerHTML = 'Calificación:  '  + data.Materias[59].calificacion;

/*------------------------------------------------------------------------------------------------------------------*/

    document.getElementById("cuatri_1.4.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[4].cuatrimestre;
    document.getElementById("cursada_1.4.5").innerHTML = 'Veces Cursada: ' + data.Materias[4].cursada;
    document.getElementById("materia_1.4.5").innerHTML = ' '               + data.Materias[4].materia;
    document.getElementById("codigo_1.4.5").innerHTML = 'Código: '         + data.Materias[4].codigo;
    document.getElementById("califi_1.4.5").innerHTML = 'Calificación:  '  + data.Materias[4].calificacion;

    document.getElementById("cuatri_2.11.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[11].cuatrimestre;
    document.getElementById("cursada_2.11.5").innerHTML = 'Veces Cursada: ' + data.Materias[11].cursada;
    document.getElementById("materia_2.11.5").innerHTML = ' '               + data.Materias[11].materia;
    document.getElementById("codigo_2.11.5").innerHTML = 'Código: '         + data.Materias[11].codigo;
    document.getElementById("califi_2.11.5").innerHTML = 'Calificación:  '  + data.Materias[11].calificacion;

    document.getElementById("cuatri_3.18.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[18].cuatrimestre;
    document.getElementById("cursada_3.18.5").innerHTML = 'Veces Cursada: ' + data.Materias[18].cursada;
    document.getElementById("materia_3.18.5").innerHTML = ' '               + data.Materias[18].materia;
    document.getElementById("codigo_3.18.5").innerHTML = 'Código: '         + data.Materias[18].codigo;
    document.getElementById("califi_3.18.5").innerHTML = 'Calificación:  '  + data.Materias[18].calificacion;

    document.getElementById("cuatri_4.25.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[25].cuatrimestre;
    document.getElementById("cursada_4.25.5").innerHTML = 'Veces Cursada: ' + data.Materias[25].cursada;
    document.getElementById("materia_4.25.5").innerHTML = ' '               + data.Materias[25].materia;
    document.getElementById("codigo_4.25.5").innerHTML = 'Código: '         + data.Materias[25].codigo;
    document.getElementById("califi_4.25.5").innerHTML = 'Calificación:  '  + data.Materias[25].calificacion;

    document.getElementById("cuatri_5.32.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[32].cuatrimestre;
    document.getElementById("cursada_5.32.5").innerHTML = 'Veces Cursada: ' + data.Materias[32].cursada;
    document.getElementById("materia_5.32.5").innerHTML = ' '               + data.Materias[32].materia;
    document.getElementById("codigo_5.32.5").innerHTML = 'Código: '         + data.Materias[32].codigo;
    document.getElementById("califi_5.32.5").innerHTML = 'Calificación:  '  + data.Materias[32].calificacion;

    document.getElementById("cuatri_6.39.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[39].cuatrimestre;
    document.getElementById("cursada_6.39.5").innerHTML = 'Veces Cursada: ' + data.Materias[39].cursada;
    document.getElementById("materia_6.39.5").innerHTML = ' '               + data.Materias[39].materia;
    document.getElementById("codigo_6.39.5").innerHTML = 'Código: '         + data.Materias[39].codigo;
    document.getElementById("califi_6.39.5").innerHTML = 'Calificación:  '  + data.Materias[39].calificacion;

    document.getElementById("cuatri_7.46.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[46].cuatrimestre;
    document.getElementById("cursada_7.46.5").innerHTML = 'Veces Cursada: ' + data.Materias[46].cursada;
    document.getElementById("materia_7.46.5").innerHTML = ' '               + data.Materias[46].materia;
    document.getElementById("codigo_7.46.5").innerHTML = 'Código: '         + data.Materias[46].codigo;
    document.getElementById("califi_7.46.5").innerHTML = 'Calificación:  '  + data.Materias[46].calificacion;

    document.getElementById("cuatri_8.53.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[53].cuatrimestre;
    document.getElementById("cursada_8.53.5").innerHTML = 'Veces Cursada: ' + data.Materias[53].cursada;
    document.getElementById("materia_8.53.5").innerHTML = ' '               + data.Materias[53].materia;
    document.getElementById("codigo_8.53.5").innerHTML = 'Código: '         + data.Materias[53].codigo;
    document.getElementById("califi_8.53.5").innerHTML = 'Calificación:  '  + data.Materias[53].calificacion;

    document.getElementById("cuatri_9.60.5").innerHTML = 'Cuatrimestre:  '  + data.Materias[60].cuatrimestre;
    document.getElementById("cursada_9.60.5").innerHTML = 'Veces Cursada: ' + data.Materias[60].cursada;
    document.getElementById("materia_9.60.5").innerHTML = ' '               + data.Materias[60].materia;
    document.getElementById("codigo_9.60.5").innerHTML = 'Código: '         + data.Materias[60].codigo;
    document.getElementById("califi_9.60.5").innerHTML = 'Calificación:  '  + data.Materias[60].calificacion;

/*------------------------------------------------------------------------------------------------------------------*/

    document.getElementById("cuatri_1.5.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[5].cuatrimestre;
    document.getElementById("cursada_1.5.6").innerHTML = 'Veces Cursada: ' + data.Materias[5].cursada;
    document.getElementById("materia_1.5.6").innerHTML = ' '               + data.Materias[5].materia;
    document.getElementById("codigo_1.5.6").innerHTML = 'Código: '         + data.Materias[5].codigo;
    document.getElementById("califi_1.5.6").innerHTML = 'Calificación:  '  + data.Materias[5].calificacion;

    document.getElementById("cuatri_2.12.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[12].cuatrimestre;
    document.getElementById("cursada_2.12.6").innerHTML = 'Veces Cursada: ' + data.Materias[12].cursada;
    document.getElementById("materia_2.12.6").innerHTML = ' '               + data.Materias[12].materia;
    document.getElementById("codigo_2.12.6").innerHTML = 'Código: '         + data.Materias[12].codigo;
    document.getElementById("califi_2.12.6").innerHTML = 'Calificación:  '  + data.Materias[12].calificacion;

    document.getElementById("cuatri_3.19.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[19].cuatrimestre;
    document.getElementById("cursada_3.19.6").innerHTML = 'Veces Cursada: ' + data.Materias[19].cursada;
    document.getElementById("materia_3.19.6").innerHTML = ' '               + data.Materias[19].materia;
    document.getElementById("codigo_3.19.6").innerHTML = 'Código: '         + data.Materias[19].codigo;
    document.getElementById("califi_3.19.6").innerHTML = 'Calificación:  '  + data.Materias[19].calificacion;

    document.getElementById("cuatri_4.26.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[26].cuatrimestre;
    document.getElementById("cursada_4.26.6").innerHTML = 'Veces Cursada: ' + data.Materias[26].cursada;
    document.getElementById("materia_4.26.6").innerHTML = ' '               + data.Materias[26].materia;
    document.getElementById("codigo_4.26.6").innerHTML = 'Código: '         + data.Materias[26].codigo;
    document.getElementById("califi_4.26.6").innerHTML = 'Calificación:  '  + data.Materias[26].calificacion;

    document.getElementById("cuatri_5.33.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[33].cuatrimestre;
    document.getElementById("cursada_5.33.6").innerHTML = 'Veces Cursada: ' + data.Materias[33].cursada;
    document.getElementById("materia_5.33.6").innerHTML = ' '               + data.Materias[33].materia;
    document.getElementById("codigo_5.33.6").innerHTML = 'Código: '         + data.Materias[33].codigo;
    document.getElementById("califi_5.33.6").innerHTML = 'Calificación:  '  + data.Materias[33].calificacion;

    document.getElementById("cuatri_6.40.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[40].cuatrimestre;
    document.getElementById("cursada_6.40.6").innerHTML = 'Veces Cursada: ' + data.Materias[40].cursada;
    document.getElementById("materia_6.40.6").innerHTML = ' '               + data.Materias[40].materia;
    document.getElementById("codigo_6.40.6").innerHTML = 'Código: '         + data.Materias[40].codigo;
    document.getElementById("califi_6.40.6").innerHTML = 'Calificación:  '  + data.Materias[40].calificacion;

    document.getElementById("cuatri_7.47.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[47].cuatrimestre;
    document.getElementById("cursada_7.47.6").innerHTML = 'Veces Cursada: ' + data.Materias[47].cursada;
    document.getElementById("materia_7.47.6").innerHTML = ' '               + data.Materias[47].materia;
    document.getElementById("codigo_7.47.6").innerHTML = 'Código: '         + data.Materias[47].codigo;
    document.getElementById("califi_7.47.6").innerHTML = 'Calificación:  '  + data.Materias[47].calificacion;

    document.getElementById("cuatri_8.54.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[54].cuatrimestre;
    document.getElementById("cursada_8.54.6").innerHTML = 'Veces Cursada: ' + data.Materias[54].cursada;
    document.getElementById("materia_8.54.6").innerHTML = ' '               + data.Materias[54].materia;
    document.getElementById("codigo_8.54.6").innerHTML = 'Código: '         + data.Materias[54].codigo;
    document.getElementById("califi_8.54.6").innerHTML = 'Calificación:  '  + data.Materias[54].calificacion;

    document.getElementById("cuatri_9.61.6").innerHTML = 'Cuatrimestre:  '  + data.Materias[61].cuatrimestre;
    document.getElementById("cursada_9.61.6").innerHTML = 'Veces Cursada: ' + data.Materias[61].cursada;
    document.getElementById("materia_9.61.6").innerHTML = ' '               + data.Materias[61].materia;
    document.getElementById("codigo_9.61.6").innerHTML = 'Código: '         + data.Materias[61].codigo;
    document.getElementById("califi_9.61.6").innerHTML = 'Calificación:  '  + data.Materias[61].calificacion;

/*------------------------------------------------------------------------------------------------------------------*/

    document.getElementById("cuatri_1.6.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[6].cuatrimestre;
    document.getElementById("cursada_1.6.7").innerHTML = 'Veces Cursada: ' + data.Materias[6].cursada;
    document.getElementById("materia_1.6.7").innerHTML = ' '               + data.Materias[6].materia;
    document.getElementById("codigo_1.6.7").innerHTML = 'Código: '         + data.Materias[6].codigo;
    document.getElementById("califi_1.6.7").innerHTML = 'Calificación:  '  + data.Materias[6].calificacion;

    document.getElementById("cuatri_2.13.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[13].cuatrimestre;
    document.getElementById("cursada_2.13.7").innerHTML = 'Veces Cursada: ' + data.Materias[13].cursada;
    document.getElementById("materia_2.13.7").innerHTML = ' '               + data.Materias[13].materia;
    document.getElementById("codigo_2.13.7").innerHTML = 'Código: '         + data.Materias[13].codigo;
    document.getElementById("califi_2.13.7").innerHTML = 'Calificación:  '  + data.Materias[13].calificacion;

    document.getElementById("cuatri_3.20.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[20].cuatrimestre;
    document.getElementById("cursada_3.20.7").innerHTML = 'Veces Cursada: ' + data.Materias[20].cursada;
    document.getElementById("materia_3.20.7").innerHTML = ' '               + data.Materias[20].materia;
    document.getElementById("codigo_3.20.7").innerHTML = 'Código: '         + data.Materias[20].codigo;
    document.getElementById("califi_3.20.7").innerHTML = 'Calificación:  '  + data.Materias[20].calificacion;

    document.getElementById("cuatri_4.27.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[27].cuatrimestre;
    document.getElementById("cursada_4.27.7").innerHTML = 'Veces Cursada: ' + data.Materias[27].cursada;
    document.getElementById("materia_4.27.7").innerHTML = ' '               + data.Materias[27].materia;
    document.getElementById("codigo_4.27.7").innerHTML = 'Código: '         + data.Materias[27].codigo;
    document.getElementById("califi_4.27.7").innerHTML = 'Calificación:  '  + data.Materias[27].calificacion;

    document.getElementById("cuatri_5.34.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[34].cuatrimestre;
    document.getElementById("cursada_5.34.7").innerHTML = 'Veces Cursada: ' + data.Materias[34].cursada;
    document.getElementById("materia_5.34.7").innerHTML = ' '               + data.Materias[34].materia;
    document.getElementById("codigo_5.34.7").innerHTML = 'Código: '         + data.Materias[34].codigo;
    document.getElementById("califi_5.34.7").innerHTML = 'Calificación:  '  + data.Materias[34].calificacion;

    document.getElementById("cuatri_6.41.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[41].cuatrimestre;
    document.getElementById("cursada_6.41.7").innerHTML = 'Veces Cursada: ' + data.Materias[41].cursada;
    document.getElementById("materia_6.41.7").innerHTML = ' '               + data.Materias[41].materia;
    document.getElementById("codigo_6.41.7").innerHTML = 'Código: '         + data.Materias[41].codigo;
    document.getElementById("califi_6.41.7").innerHTML = 'Calificación:  '  + data.Materias[41].calificacion;

    document.getElementById("cuatri_7.48.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[48].cuatrimestre;
    document.getElementById("cursada_7.48.7").innerHTML = 'Veces Cursada: ' + data.Materias[48].cursada;
    document.getElementById("materia_7.48.7").innerHTML = ' '               + data.Materias[48].materia;
    document.getElementById("codigo_7.48.7").innerHTML = 'Código: '         + data.Materias[48].codigo;
    document.getElementById("califi_7.48.7").innerHTML = 'Calificación:  '  + data.Materias[48].calificacion;

    document.getElementById("cuatri_8.55.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[55].cuatrimestre;
    document.getElementById("cursada_8.55.7").innerHTML = 'Veces Cursada: ' + data.Materias[55].cursada;
    document.getElementById("materia_8.55.7").innerHTML = ' '               + data.Materias[55].materia;
    document.getElementById("codigo_8.55.7").innerHTML = 'Código: '         + data.Materias[55].codigo;
    document.getElementById("califi_8.55.7").innerHTML = 'Calificación:  '  + data.Materias[55].calificacion;

    document.getElementById("cuatri_9.62.7").innerHTML = 'Cuatrimestre:  '  + data.Materias[62].cuatrimestre;
    document.getElementById("cursada_9.62.7").innerHTML = 'Veces Cursada: ' + data.Materias[62].cursada;
    document.getElementById("materia_9.62.7").innerHTML = ' '               + data.Materias[62].materia;
    document.getElementById("codigo_9.62.7").innerHTML = 'Código: '         + data.Materias[62].codigo;
    document.getElementById("califi_9.62.7").innerHTML = 'Calificación:  '  + data.Materias[62].calificacion;

});
