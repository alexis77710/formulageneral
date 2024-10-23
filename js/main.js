// Pedimos al usuario que ingrese los valores de a, b y c
        // 'prompt()' abre un cuadro de diálogo para ingresar el valor, y el resultado se guarda como texto.
        var a = prompt("Ingrese el valor de a");
        var b = prompt("Ingrese el valor de b");
        var c = prompt("Ingrese el valor de c");

        // Utilizamos 'document.write()' para mostrar el valor de 'a' 'b' 'c' en el documento HTML y usamos el <br> para crear un salto de linea y que no
        //se vea todo junto en una sola linea.
        // 'a' es la variable que contiene el valor ingresado por el usuario para el coeficiente 'a' de la ecuación cuadrática hacemos esto con los 3 valores 'a' 'b' 'c'.
        document.write("a = ", a, "<br>");

        document.write("b = ", b, "<br>");

        document.write("c = ", c, "<br>");
        
        // Calculamos la raiz, que es parte de la fórmula cuadrática (b^2 - 4ac).
        // Esto determina si las soluciones son reales o complejas o a su vez una raiz doble.
        var raiz = b * b - 4 * a * c;

        // Verificamos si las soluciones son reales o complejas usando el valor de la raiz.
        if (raiz > 0) { // Caso 1: raiz es mayor a 0, tenemos dos soluciones reales y distintas.

            // Calculamos la primera solución real (x1) usando la fórmula general.
            // 'Math.sqrt(raiz)' obtiene la raíz cuadrada del discriminante.
            var res1 = (-b + Math.sqrt(raiz)) / (2 * a);

            // Calculamos la segunda solución real (x2) usando la fórmula general.
            var res2 = (-b - Math.sqrt(raiz)) / (2 * a);
            // Mostramos el valor de la raíz (discriminante) en la consola para referencia.
            console.log("El resultado de la raíz es: ", raiz);

            // Informamos que las soluciones son reales y diferentes.
            console.log("Las soluciones son reales y diferentes.");

            // Mostramos los valores de res1 y res2 en la consola.
            console.log("res1 = " + res1);
            console.log("res2 = " + res2);
            alert("El valor de res1 es igual a ="+res1);

        } else if (raiz === 0) { // Caso 2: raiz igual a 0, hay una única solución real.

            // Calculamos la única solución (x) que es la raíz doble.
            var raiz = b * b - 4 * a * c;
            console.log("El resultado de la raiz en x1 es : ", raiz); //mostrara el resultado de la raiz para servir como referencia de que esta pasando.
            console.log("El resultado de la raiz en x2 es : ", raiz);//mostrara el resultado de la raiz para servir como referencia de que esta pasando.
            //el siguiente var usado en la parte posterior es la formula que da como resultante despues de tener una raiz en 0 en los dos.
            var x = -b / (2 * a);//la formula general simplificada a solo dejarlo en -b sobre 2a.
            // Informamos que las soluciones son reales e iguales (raíz doble).
            console.log("Las soluciones son reales e iguales lo cual da a una raiz doble.");

            // Mostramos el valor de la única solución en la consola.
            console.log("x1 = x2 lo que da como resultado = ", x);

        } else { // Caso 3: raiz menor a 0, las soluciones son complejas.

            // Calculamos la parte real de la solución compleja.
            var NumeroReal = -b / (2 * a);

            // Calculamos la parte imaginaria de la solución compleja.
            // Usamos '-raiz' porque el discriminante es negativo, y 'Math.sqrt' solo trabaja con números positivos.
            var NuemroImaginario = Math.sqrt(-raiz) / (2 * a);

            // Informamos que el resultado es una solución compleja debido al discriminante negativo.
            console.log("El valor es una solución compleja debido a un número negativo en la raíz como resultado", raiz);

            // Mostramos el valor del discriminante convertido a positivo para calcular la parte imaginaria.
            console.log("El valor una vez transformado es el mismo pero cambia a positivo", -raiz);

            // Informamos que las soluciones son complejas (números complejos).
            console.log("Las soluciones son negativas.");

            // Mostramos las dos soluciones complejas en la consola en el formato: numero real ± numero imaginario * i.
            console.log("x1 = " + NumeroReal + " + " + NuemroImaginario + "i");
            console.log("x2 = " + NumeroReal + " - " + NuemroImaginario + "i");
        }
