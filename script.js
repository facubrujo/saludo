
const texto = "public class Main {\n\n  public static void main(String[] args) {\n\n    System.out.println('¡Feliz Día del Programador!\n     En este día especial, le mando un saludo a todos los \n     programadores y programadoras que trabajan incansablemente \n     para crear soluciones innovadoras, resolver problemas \n     complejos y hacer posible la magia de la tecnología.\n     Sus líneas de código son las que impulsan \n     el mundo digital y hacen que todo funcione. \n     Recuerden siempre que el código que escribís \n     tiene un impacto profundo en la vida de las personas\n     y en el futuro de la tecnología.\n     Su dedicación y creatividad son invaluables.\n     ¡Gracias por hacer tantas cosas bonitas\n     y hacer mas facil nuestra vida! ¡Feliz Día del Programador!');\n    }\n} ";

const velocidad = 20; 

const maquinaDiv = document.getElementById("maquina");

let i = 0;

function escribir() {
  if (i < texto.length) {
    maquinaDiv.innerHTML += texto.charAt(i++);
    //i++;
    setTimeout(escribir, velocidad);
  }
}

escribir();