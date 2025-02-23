import { ApiResponse, Endpoint, NewsApiResponse, SourceApiResponse } from '../../types/index';
import AppLoader from './appLoader';

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
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target && (target as HTMLElement).classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') || '';
                if (newsContainer && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
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
            if (target.parentNode) {
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
