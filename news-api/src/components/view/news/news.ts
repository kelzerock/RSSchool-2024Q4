import { NewsApi } from '../../../types/index';
import { createHTMLElement, handleError } from '../../../utils/utils';
import './news.css';

enum Names {
    news = 'news',
    item = 'news__item',
    meta = 'news__meta',
    metaPhoto = 'news__meta-photo',
    details = 'news__meta-details',
    author = 'news__meta-author',
    date = 'news__meta-date',
    description = 'news__description',
    title = 'news__description-title',
    source = 'news__description-source',
    content = 'news__description-content',
    readMore = 'news__read-more',
}

class News {
    public draw(data: NewsApi[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsContainer = document.querySelector(`.${Names.news}`) as HTMLDivElement | null;

        if (newsContainer) {
            news.forEach((item, idx) => {
                const newsItem = document.createElement('div');
                newsItem.classList.add(Names.item);
                const newsMeta = createHTMLElement({ tag: 'div', parentElement: newsItem, className: Names.meta });
                const newsMetaPhoto = createHTMLElement({
                    tag: 'div',
                    parentElement: newsMeta,
                    className: Names.metaPhoto,
                });
                const newsMetaDetails = createHTMLElement({
                    tag: 'ul',
                    parentElement: newsMeta,
                    className: Names.details,
                });
                createHTMLElement({
                    tag: 'li',
                    parentElement: newsMetaDetails,
                    className: Names.author,
                    text: item.author || item.source.name,
                });
                createHTMLElement({
                    tag: 'li',
                    parentElement: newsMetaDetails,
                    className: Names.date,
                    text: item.publishedAt.slice(0, 10).split('-').reverse().join('-'),
                });
                const newsDescription = createHTMLElement({
                    tag: 'div',
                    parentElement: newsItem,
                    className: Names.description,
                });
                createHTMLElement({
                    tag: 'h2',
                    parentElement: newsDescription,
                    className: Names.title,
                    text: item.title,
                });
                createHTMLElement({
                    tag: 'h3',
                    parentElement: newsDescription,
                    className: Names.source,
                    text: item.source.name,
                });
                createHTMLElement({
                    tag: 'p',
                    parentElement: newsDescription,
                    className: Names.content,
                    text: item.description,
                });
                const newsReadMore = createHTMLElement({
                    tag: 'p',
                    parentElement: newsDescription,
                    className: Names.readMore,
                });
                createHTMLElement({
                    tag: 'a',
                    parentElement: newsReadMore,
                    attribute: [{ name: 'href', value: item.url }],
                });

                if (idx % 2) newsItem.classList.add('alt');
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news.jpg'})`;

                fragment.append(newsItem);
            });

            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        } else {
            handleError([Names.news]);
        }
    }
}

export default News;
