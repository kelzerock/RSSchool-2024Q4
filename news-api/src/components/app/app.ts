import { ApiResponse, NewsApiResponse, SourceApiResponse } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const sourceDiv = document.querySelector('.sources') as HTMLDivElement | null;
        if (sourceDiv) {
            sourceDiv.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: Extract<ApiResponse, NewsApiResponse>) => this.view.drawNews(data))
            );
        } else {
            console.error("HtmlDivElement doesn't exist in HtmlDOM");
        }
        this.controller.getSources((data: Extract<ApiResponse, SourceApiResponse>) => this.view.drawSources(data));
    }
}

export default App;
