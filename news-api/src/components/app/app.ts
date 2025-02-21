import { NewsApiResponse, SourceApiResponse } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourceDiv = document.querySelector('.sources') as HTMLDivElement | null;
        if (sourceDiv) {
            sourceDiv.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: NewsApiResponse) => this.view.drawNews(data))
            );
        } else {
            console.error("HtmlDivElement doesn't exist in HtmlDOM");
        }
        this.controller.getSources((data: SourceApiResponse) => this.view.drawSources(data));
    }
}

export default App;
