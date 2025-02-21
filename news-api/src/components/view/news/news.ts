import { NewsApi } from '../../../types/index';
import { handleError } from '../../../utils/utils';
import './news.css';

class News {
    draw(data: NewsApi[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsContainer = document.querySelector('.news') as HTMLDivElement;

        if (newsItemTemp && newsContainer) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

                const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement;
                const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
                const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
                const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
                const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLHeadingElement;
                const newsDescriptionSource = newsClone.querySelector(
                    '.news__description-source'
                ) as HTMLHeadingElement;
                const newsDescriptionContent = newsClone.querySelector(
                    '.news__description-content'
                ) as HTMLParagraphElement;
                const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;

                if (
                    newsItem &&
                    newsMetaPhoto &&
                    newsMetaAuthor &&
                    newsMetaDate &&
                    newsDescriptionTitle &&
                    newsDescriptionSource &&
                    newsDescriptionContent &&
                    newsReadMore
                ) {
                    if (idx % 2) newsItem.classList.add('alt');
                    newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news.jpg'})`;
                    newsMetaAuthor.textContent = item.author || item.source.name;
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    newsDescriptionTitle.textContent = item.title;
                    newsDescriptionSource.textContent = item.source.name;
                    newsDescriptionContent.textContent = item.description;
                    newsReadMore.setAttribute('href', item.url);

                    fragment.append(newsClone);
                } else {
                    handleError([
                        '.news__item',
                        '.news__meta-photo',
                        '.news__meta-author',
                        '.news__meta-date',
                        '.news__description-title',
                        '.news__description-source',
                        '.news__description-content',
                        '.news__read-more a',
                    ]);
                }
            });

            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        } else {
            handleError(['.news', '#newsItemTemp']);
        }
    }
}

export default News;
