import { URL_API } from '../constants/api';
import { MAX_VIEW_CARS, START_COUNT } from '../constants/global-constants';
import { Order } from '../enums/order';
import { Sort } from '../enums/sort';
import { mainPage } from '../pages/main/main-page';
import type { Car } from '../types/car';
import type { PageDataParameters } from '../types/page-data-parameters';
import type { TypesForAnimation } from '../types/types-for-animation';
import type { Winner } from '../types/winner';
import { filteredDataForPagination } from '../utils/filtered-data-for-pagination';
import { getCars } from '../utils/request/get-cars';

class State {
  public get _activeStopEngineButtons(): number {
    return this.activeStopEngineButtons;
  }

  public set _activeStopEngineButtons(number: number) {
    this.activeStopEngineButtons = number;
  }

  public get _countWinner(): number {
    return this.countWinner;
  }
  public set _countWinner(number: number) {
    this.countWinner = number;
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

  public addNewCar = (car: Car): void => {
    this.state.garage.push(car);
    this.filteredToView();
  };

  public buttonsForRace: {
    startRace: HTMLElement | null;
    resetRace: HTMLElement | null;
    readyToRace: boolean;
  };

  constructor() {
    this.activeStopEngineButtons = 0;
    this.buttonsForRace = {
      startRace: null,
      resetRace: null,
      readyToRace: true,
    };
    this.countWinner = 0;
    const pageString = localStorage.getItem('currentPage');
    const page = pageString ? Number.parseInt(pageString) : START_COUNT;
    this.page = page;
    this.pageWinnersData = {
      page: 1,
      limit: 10,
      sort: Sort.time,
      order: Order.ASC,
    };
    this.state = { garage: [], winners: [] };
    this.viewCars = [];
    this.viewStateModels = new Map();
  }

  public countWinner: number;

  public deleteCar = (id: number): void => {
    this.state.garage = this.state.garage.filter((car) => car.id !== id);
    this.state.winners = this.state.winners.filter((car) => car.id !== id);
    this.filteredToView();
    mainPage();
  };

  private filteredToView = (): void => {
    this.viewCars = filteredDataForPagination(
      this.maxViewCar,
      this._page,
      this.state.garage
    );
  };

  public getCars(cars: Car[]): void {
    this.state.garage = cars;
    this.filteredToView();
  }

  public maxViewCar = MAX_VIEW_CARS;
  public page: number;
  public pageWinnersData: PageDataParameters;
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
      const cars = await getCars();
      if (cars) {
        this.getCars(cars);
        mainPage();
      }
    }
  };
  public viewCars: Car[];

  public viewStateModels: Map<number, TypesForAnimation>;
}

export const stateRace = new State();
