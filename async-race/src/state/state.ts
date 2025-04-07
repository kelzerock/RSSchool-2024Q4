import { URL_API } from '../constants/api';
import { mainPage } from '../pages/main/main-page';
import { filteredDataForPagination } from '../utils/filtered-data-for-pagination';
import { isCar } from '../utils/is-car';

export type Car = {
  name: string;
  color: string;
  id: number;
};

type CarForCreate = Omit<Car, 'id'>;
const maxViewCar = 7;
const startNumber = 0;

class State {
  public state: { garage: Car[]; winners: Car[] };
  public viewCars: Car[];
  public page: number;
  public maxViewCar = maxViewCar;
  public viewStateModels: Map<
    number,
    {
      element: HTMLElement;
      box: HTMLElement;
      cancelFlag: { flag: boolean };
      info: Car;
      startButton: HTMLElement;
      stopButton: HTMLElement;
    }
  >;

  constructor() {
    this.state = { garage: [], winners: [] };
    this.viewCars = [];
    this.viewStateModels = new Map();
    const pageString = localStorage.getItem('currentPage');
    const page = pageString ? Number.parseInt(pageString) : startNumber;
    this.page = page;
  }

  public get _page(): number {
    return this.page;
  }

  public set _page(number: number) {
    this.page = number;
    localStorage.setItem('currentPage', number.toString());
    this.filteredToView();
    mainPage();
  }

  public async getCars(query?: { limit: number; page: number }): Promise<void> {
    const data = await fetch(
      `${URL_API}/garage${query ? '?_limit=' + query.limit + '&_page=' + query.page : ''}`,
      {
        method: 'GET',
      }
    );
    // const count = data.headers.get('X-Total-Count');

    if (data.ok) {
      const garageCars = await data.json();
      this.state.garage = garageCars;
      this.filteredToView();
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
        this.filteredToView();
      } else {
        console.warn("Attention, your data don't equal need format data!");
      }
    }
  };

  public deleteCar = async (id: number): Promise<void> => {
    const data = await fetch(`${URL_API}/garage/${id}`, {
      method: 'DELETE',
    });

    if (data.ok) {
      this.state.garage = this.state.garage.filter((car) => car.id !== id);
      this.state.winners = this.state.winners.filter((car) => car.id !== id);
      this.filteredToView();
      mainPage();
    }
  };

  public updateCar = async (car: Car): Promise<void> => {
    const data = await fetch(`${URL_API}/garage/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: car.name, color: car.color }),
    });

    if (data.ok) {
      this.state.garage = this.state.garage.map((item) =>
        item.id === car.id ? { ...item, ...car } : item
      );
      this.state.winners = this.state.winners.map((item) =>
        item.id === car.id ? { ...item, ...car } : item
      );
      mainPage();
    }
  };

  private filteredToView = (): void => {
    this.viewCars = filteredDataForPagination(
      this.maxViewCar,
      this._page,
      this.state.garage
    );
  };
}

export const stateRace = new State();
