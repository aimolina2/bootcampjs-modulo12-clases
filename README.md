# Módulo 12 - Lab Módulo 12 Clases

Para poder visualizar el contenido de este laboratorio.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

En este módulo se presentan dos casos (Caso 1 y Caso 2), que resolvemos en el fichero `main.ts`, y un desafío, que completamos en el archivo `desafio.ts`.

Todos los resultados se mostrarán por consola desde el index.html del proyecto.

# CASO 1. Caso de un cliente particular

Volcamos la info facilitada en el ejercicio (interface y reservas) en el archivo `main.ts``

Creamos la `class ReservaParticular` que incluye la info de reservas (pasamos el array de reservas) y el precio adicional por cada persona extra (que según el ejercicio será de 40 euros)

Calculamos el precio:

- primero del subtotal (el acumulado + precio por tipo de habitacion x noche + precio adicional por las personas, que lo calculamos siempre restando -1, de manera que si no hay personas extra se suma 0)
- y después del total

Para evitar que nos de infinitos decimales recurrimos al .toFixed(2).

Pasamos los resultados por consola.

<img src=images/caso-1.png alt="caso 1">

# CASO 2. Caso de un touroperador

Creamos la `class ReservaTourOperador` partiendo de la clase anterior de particular y le añadimos el descuento. En el constructor hacemos uso de `super(reservas)` para indicar que ese descuento = 0.85 (directamente hacemos la cuenta del 15% para multiplicar más fácilmente a la hora de aplicar el descuento).

Modificamos los precios por habitación y para calcular el subTotal machacamos la funcion que teniamos anteriormente y simplemente multiplicamos por el descuento.

Pasamos los resultados por consola.

<img src=images/caso-2.png alt="caso 2">

# DESAFÍO

Aqui prácticamente hacemos lo mismo que antes, solo que en este caso creamos una primera `class ReservaHotel`, para después:

- Crear la clase hija `class ReservaDeParticular`, donde con `super` llamamos a las propiedades de esa primera clase.
- Crear la clase hija `class ReservaDeTourOperador`, donde volvemos a llamar a las propiedades y añadir la del descuento. Además machacamos el precio de las habitaciones y en el subtotal hacemos que se multiplique por el descuento para conseguir el precio que necesitamos.

Comprobamos que nos da los resultados esperados:
<img src=images/desafio.png alt="desafio">
