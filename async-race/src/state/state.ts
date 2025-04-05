const URL_API = 'http://127.0.0.1:3000';

type Car = {
  name: string;
  color: string;
  id: number;
};

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
}

export const stateRace = new State();
