import { ApiResponse, NewsApiResponse, SourceApi, SourceApiResponse } from '../../types/index';
import { createHTMLElement } from '../../utils/utils';
import Footer from './footer/footer';
import News from './news/news';
import Sources from './sources/sources';

enum Names {
    filter = 'filter-sources',
    input = 'filter-input',
    button = 'filter-button',
}

export class AppView {
    private news: News;
    private sources: Sources;
    private footer: Footer;
    private value: SourceApi[] | [];

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.footer = new Footer({
            name: 'Aleksei Zhuchkov',
            linkToGithub: 'https://github.com/kelzerock',
            year: 2025,
        });
        this.value = [];
    }

    public drawNews(data: Extract<ApiResponse, NewsApiResponse>) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Extract<ApiResponse, SourceApiResponse>) {
        const values = data?.sources ? data?.sources : [];
        this.value = values;
        this.filtered();
        this.sources.draw(values);
    }

    public filtered(): void {
        const form = document.querySelector(`#${Names.filter}`);

        if (form && form instanceof HTMLFormElement) {
            createHTMLElement({
                tag: 'label',
                parentElement: form,
                text: 'Search:',
                attribute: [{ name: 'for', value: Names.input }],
            });
            const input = createHTMLElement({
                tag: 'input',
                parentElement: form,
                attribute: [{ name: 'id', value: Names.input }],
            });
            const button = createHTMLElement({
                tag: 'button',
                parentElement: form,
                className: Names.button,
                text: 'Clear',
                attribute: [{ name: 'type', value: 'button' }],
            });

            button.addEventListener('click', () => {
                if (input instanceof HTMLInputElement) {
                    input.value = '';
                    this.sources.draw(this.value);
                }
            });

            input.addEventListener('input', ({ target }) => {
                if (target instanceof HTMLInputElement) {
                    const { value } = target;

                    const newData = this.value.filter((item) => {
                        return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
                    });
                    this.sources.draw(newData);
                }
            });
        }
    }

    public drawFooter() {
        this.footer.draw();
    }
}

export default AppView;
