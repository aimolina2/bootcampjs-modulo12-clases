# Módulo 12 - Lab Módulo 12 Clases

Para poder visualizar el contenido de este laboratorio.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

En este módulo se presentan dos casos (Caso 1 y Caso 2), que resolvemos en el fichero `main.ts`, y un desafío, que completamos en el archivo `desafio.ts`. Además de añadir un `ejercicio-adicional.ts`.

Todos los resultados se mostrarán por consola desde el index.html del proyecto.

## CASO 1. Caso de un cliente particular

Volcamos la info facilitada en el ejercicio (interface y reservas) en el archivo `main.ts``

Creamos la `class ReservaParticular` que incluye la info de reservas (pasamos el array de reservas) y el precio adicional por cada persona extra (que según el ejercicio será de 40 euros)

Calculamos el precio:

- primero del subtotal (el acumulado + precio por tipo de habitacion x noche + precio adicional por las personas, que lo calculamos siempre restando -1, de manera que si no hay personas extra se suma 0)
- y después del total

Para evitar que nos de infinitos decimales recurrimos al .toFixed(2).

Pasamos los resultados por consola.

<img src=images/caso-1.png alt="caso 1">

## CASO 2. Caso de un touroperador

Creamos la `class ReservaTourOperador` partiendo de la clase anterior de particular y le añadimos el descuento. En el constructor hacemos uso de `super(reservas)` para indicar que ese descuento = 0.85 (directamente hacemos la cuenta del 15% para multiplicar más fácilmente a la hora de aplicar el descuento).

Modificamos los precios por habitación y para calcular el subTotal machacamos la funcion que teniamos anteriormente y simplemente multiplicamos por el descuento.

Pasamos los resultados por consola.

<img src=images/caso-2.png alt="caso 2">

## DESAFÍO

Aqui prácticamente hacemos lo mismo que antes, solo que en este caso creamos una primera `class ReservaHotel`, para después:

- Crear la clase hija `class ReservaDeParticular`, donde con `super` llamamos a las propiedades de esa primera clase.
- Crear la clase hija `class ReservaDeTourOperador`, donde volvemos a llamar a las propiedades y añadir la del descuento. Además machacamos el precio de las habitaciones y en el subtotal hacemos que se multiplique por el descuento para conseguir el precio que necesitamos.

Comprobamos que nos da los resultados esperados:
<img src=images/desafio.png alt="desafio">

## EJERCICIO ADICIONAL

Lo visualizamos desde la consola del index.html. Como en el archivo entraban en conflicto algunas de las declaraciones hemos colocado un `export{}` al final del fichero `ejercicio-adicional.ts` para liberarlas, ya que no queremos compartir los datos en este ejercicio, sino volver a usarlos pero duplicando el contenido.

Para este ejercicio seguimos la misma estructura que en el ejercicio de DESAFÍO. Creamos la clase, donde fijamos el precio del desayuno.

Para sacar el subTotal de las reservas de Particular debemos tener en cuenta que si hay desayuno debemos de: precio de desayuno _ persona _ noche y si no el desayuno = 0. Con esto claro solo queda sumar precio (según tipo de habitación) \* nº noches + precio adicional siempre que se tengamos más de 1 persona + precio desayuno.

Para el total sumamos el IVA.

Para la reserva de TourOperador añadimos el descuento e igualamos el precio de los tipos de habitacion. En el subTotal aplicamos el descuento.

Comprobamos el resultado.

<img src=images/ej-extra.png alt="ejercicio adicional">
