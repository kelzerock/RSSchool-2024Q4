import { NewsApi } from '../../../types/index';
import { createHTMLElement, handleError } from '../../../utils/utils';
import './news.css';

class News {
    public draw(data: NewsApi[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsContainer = document.querySelector('.news') as HTMLDivElement | null;

        if (newsContainer) {
            news.forEach((item, idx) => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news__item');
                const newsMeta = createHTMLElement({ tag: 'div', parentElement: newsItem, className: 'news__meta' });
                const newsMetaPhoto = createHTMLElement({
                    tag: 'div',
                    parentElement: newsMeta,
                    className: 'news__meta-photo',
                });
                const newsMetaDetails = createHTMLElement({
                    tag: 'ul',
                    parentElement: newsMeta,
                    className: 'news__meta-details',
                });
                createHTMLElement({
                    tag: 'li',
                    parentElement: newsMetaDetails,
                    className: 'news__meta-author',
                    text: item.author || item.source.name,
                });
                createHTMLElement({
                    tag: 'li',
                    parentElement: newsMetaDetails,
                    className: 'news__meta-date',
                    text: item.publishedAt.slice(0, 10).split('-').reverse().join('-'),
                });
                const newsDescription = createHTMLElement({
                    tag: 'div',
                    parentElement: newsItem,
                    className: 'news__description',
                });
                createHTMLElement({
                    tag: 'h2',
                    parentElement: newsDescription,
                    className: 'news__description-title',
                    text: item.title,
                });
                createHTMLElement({
                    tag: 'h3',
                    parentElement: newsDescription,
                    className: 'news__description-source',
                    text: item.source.name,
                });
                createHTMLElement({
                    tag: 'p',
                    parentElement: newsDescription,
                    className: 'news__description-content',
                    text: item.description,
                });
                const newsReadMore = createHTMLElement({
                    tag: 'p',
                    parentElement: newsDescription,
                    className: 'news__read-more',
                });
                createHTMLElement({
                    tag: 'a',
                    parentElement: newsReadMore,
                    attribute: { name: 'href', value: item.url },
                });

                if (idx % 2) newsItem.classList.add('alt');
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news.jpg'})`;

                fragment.append(newsItem);
            });

            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        } else {
            handleError(['.news']);
        }
    }
}

export default News;
