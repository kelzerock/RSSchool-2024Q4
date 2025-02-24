import { ApiResponse, NewsApiResponse, SourceApiResponse } from '../../types/index';
import { handleError } from '../../utils/utils';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

enum Names {
    sources = 'sources',
}

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const sourceDiv = document.querySelector(`.${Names.sources}`);
        if (sourceDiv && sourceDiv instanceof HTMLElement) {
            sourceDiv.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: Extract<ApiResponse, NewsApiResponse>) => this.view.drawNews(data))
            );
        } else {
            handleError([Names.sources]);
        }
        this.controller.getSources((data: Extract<ApiResponse, SourceApiResponse>) => this.view.drawSources(data));
        this.view.drawFooter();
    }
}

export default App;
