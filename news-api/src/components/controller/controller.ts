import { ApiResponse, Endpoint, NewsApiResponse, SourceApiResponse } from '../../types/index';
import AppLoader from './appLoader';

enum Names {
    sourceItem = 'source__item',
    dataSourceId = 'data-source-id',
    dataSource = 'data-source',
}

class AppController extends AppLoader {
    public getSources(callback: (data: SourceApiResponse) => void) {
        super.getResp(
            {
                endpoint: Endpoint.source,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: (data: Extract<ApiResponse, NewsApiResponse>) => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains(Names.sourceItem)) {
                const sourceId = target.getAttribute(Names.dataSourceId) || '';
                if (newsContainer instanceof HTMLElement && newsContainer.getAttribute(Names.dataSource) !== sourceId) {
                    newsContainer.setAttribute(Names.dataSource, sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target instanceof HTMLElement && target.parentNode) {
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
