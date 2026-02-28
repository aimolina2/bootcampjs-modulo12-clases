interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class ReservaHotel {
  reservas: Reserva[];
  precioAdicional: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.precioAdicional = 40;
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
          return (
            acc +
            this.calcularPrecio(reserva.tipoHabitacion) * reserva.noches +
            this.precioAdicional * (reserva.pax - 1)
          );
        }, 0)
        .toFixed(2),
    );
  }

  get total() {
    return Number((this.subTotal * 1.21).toFixed(2)); // +IVA
  }
}

class ReservaDeParticular extends ReservaHotel {
  constructor(reservas: Reserva[]) {
    super(reservas);
  }
}

const reservaParticular = new ReservaDeParticular(reservas);
console.log("---------------- DESAFIO: Reserva Particular ----------------");
console.log(reservaParticular);
console.log("Subtotal: ", reservaParticular.subTotal);
console.log("Total: ", reservaParticular.total);

class ReservaDeTourOperador extends ReservaHotel {
  descuento: number;
  constructor(reservas: Reserva[]) {
    super(reservas);
    this.descuento = 0.85;
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

const reservaTourOperador = new ReservaDeTourOperador(reservas);
console.log("---------------- DESAFIO: Reserva Tour Operador ----------------");
console.log(reservaTourOperador);
console.log("Subtotal: ", reservaTourOperador.subTotal);
console.log("Total: ", reservaTourOperador.total);
