import { isCar } from '../utils/is-car';

const URL_API = 'http://127.0.0.1:3000';

export type Car = {
  name: string;
  color: string;
  id: number;
};

type CarForCreate = Omit<Car, 'id'>;

class State {
  public state: { garage: Car[]; winners: Car[] };

  constructor() {
    this.state = { garage: [], winners: [] };
  }

  public async getCars(query?: { limit: number; page: number }): Promise<void> {
    const data = await fetch(
      `${URL_API}/garage${query ? '?_limit=' + query.limit + '&_page=' + query.page : ''}`,
      {
        method: 'GET',
      }
    );
    const count = data.headers.get('X-Total-Count');
    console.log({ count });

    if (data.ok) {
      const garageCars = await data.json();
      this.state.garage = garageCars;
      console.log({ garageCars });
    }
  }

  public createCar = async (car: CarForCreate): Promise<void> => {
    const data = await fetch(
      `${URL_API}/garage`,

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      }
    );
    if (data.ok) {
      const carInfo = await data.json();
      if (isCar(carInfo)) {
        this.state.garage.push(carInfo);
        console.log({ carInfo });
      } else {
        console.warn("Attention, your data don't equal need format data!");
      }
    }
  };
}

export const stateRace = new State();
