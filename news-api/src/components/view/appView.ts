import { ApiResponse, NewsApiResponse, SourceApiResponse } from '../../types/index';
import Footer from './footer/footer';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;
    private footer: Footer;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.footer = new Footer({
            name: 'Aleksei Zhuchkov',
            linkToGithub: 'https://github.com/kelzerock',
            year: 2025,
        });
    }

    public drawNews(data: Extract<ApiResponse, NewsApiResponse>) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Extract<ApiResponse, SourceApiResponse>) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public drawFooter() {
        this.footer.draw();
    }
}

export default AppView;
