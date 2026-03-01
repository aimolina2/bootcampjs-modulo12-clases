interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class ReservaHotel {
  reservas: Reserva[];
  precioAdicional: number;
  precioDesayuno: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.precioAdicional = 40;
    this.precioDesayuno = 15;
  }

  calcularPrecio(tipoHabitacion: string): number {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
      default:
        return 0;
    }
  }
  get subTotal() {
    return Number(
      this.reservas
        .reduce((acc, reserva) => {
          const precioBase =
            this.calcularPrecio(reserva.tipoHabitacion) * reserva.noches;
          const precioPersonaAdicional =
            this.precioAdicional * (reserva.pax - 1);
          const precioDesayuno = reserva.desayuno
            ? this.precioDesayuno * reserva.pax * reserva.noches
            : 0;
          return acc + precioBase + precioPersonaAdicional + precioDesayuno;
        }, 0)
        .toFixed(2),
    );
  }
  get total() {
    return Number((this.subTotal * 1.21).toFixed(2)); // +IVA
  }
}

class ReservaHotelParticular extends ReservaHotel {
  constructor(reservas: Reserva[]) {
    super(reservas);
  }
}

const reservaParticular = new ReservaHotelParticular(reservas);
console.log(
  "---------------- EJERCICIO ADICIONAL: Reserva Particular con desayunos ----------------",
);
console.log(reservaParticular);
console.log("Subtotal: ", reservaParticular.subTotal);
console.log("Total: ", reservaParticular.total);

class ReservaHotelTourOperador extends ReservaHotel {
  descuento: number;
  constructor(reservas: Reserva[]) {
    super(reservas);
    this.descuento = 0.85; // 15% de descuento para tour operador
  }

  calcularPrecio(tipoHabitacion: string): number {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 100;
      default:
        return 0;
    }
  }

  get subTotal() {
    return Number((super.subTotal * this.descuento).toFixed(2));
  }
}

const reservaTourOperador = new ReservaHotelTourOperador(reservas);
console.log(
  "---------------- EJERCICIO ADICIONAL: Reserva Tour Operador con desayunos ----------------",
);
console.log(reservaTourOperador);
console.log("Subtotal: ", reservaTourOperador.subTotal);
console.log("Total: ", reservaTourOperador.total);

export {};
