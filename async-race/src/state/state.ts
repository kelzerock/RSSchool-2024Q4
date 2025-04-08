import { URL_API } from '../constants/api';
import { mainPage } from '../pages/main/main-page';
import { filteredDataForPagination } from '../utils/filtered-data-for-pagination';
import { isCar } from '../utils/is-car';

export type Car = {
  name: string;
  color: string;
  id: number;
};

export type Winner = {
  id: number;
  wins: number;
  time: number;
};

export type TypesForAnimation = {
  element: HTMLElement;
  box: HTMLElement;
  cancelFlag: { flag: boolean };
  info: Car;
  startButton: HTMLElement;
  stopButton: HTMLElement;
};

type CarForCreate = Omit<Car, 'id'>;
const maxViewCar = 7;
const startNumber = 0;

class State {
  public get _activeStopEngineButtons(): number {
    return this.activeStopEngineButtons;
  }

  public set _activeStopEngineButtons(number: number) {
    this.activeStopEngineButtons = number;
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
  public activeStopEngineButtons: number;
  public buttonsForRace: {
    startRace: HTMLElement | null;
    resetRace: HTMLElement | null;
  };

  constructor() {
    this.activeStopEngineButtons = 0;
    this.buttonsForRace = { startRace: null, resetRace: null };
    const pageString = localStorage.getItem('currentPage');
    const page = pageString ? Number.parseInt(pageString) : startNumber;
    this.page = page;
    this.state = { garage: [], winners: [] };
    this.viewCars = [];
    this.viewStateModels = new Map();
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

  private filteredToView = (): void => {
    this.viewCars = filteredDataForPagination(
      this.maxViewCar,
      this._page,
      this.state.garage
    );
  };

  public async getCars(query?: { limit: number; page: number }): Promise<void> {
    const data = await fetch(
      `${URL_API}/garage${query ? '?_limit=' + query.limit + '&_page=' + query.page : ''}`,
      {
        method: 'GET',
      }
    );

    if (data.ok) {
      const garageCars = await data.json();
      this.state.garage = garageCars;
      this.filteredToView();
    }
  }

  public maxViewCar = maxViewCar;
  public page: number;
  public state: { garage: Car[]; winners: Winner[] };

  public updateCar = async (car: Car): Promise<void> => {
    const data = await fetch(`${URL_API}/garage/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: car.name, color: car.color }),
    });

    if (data.ok) {
      await this.getCars();
      mainPage();
    }
  };
  public viewCars: Car[];

  public viewStateModels: Map<number, TypesForAnimation>;
}

export const stateRace = new State();
