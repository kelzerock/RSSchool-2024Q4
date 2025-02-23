import { SourceApi } from '../../../types/index';
import { createHTMLElement, handleError } from '../../../utils/utils';
import './sources.css';

enum Names {
    sources = 'sources',
    sourceItemName = 'source__item-name',
    sourceItem = 'source__item',
    dataAttr = 'data-source-id',
}

class Sources {
    public draw(data: SourceApi[]) {
        const fragment = document.createDocumentFragment();
        const sourceDiv = document.querySelector(`.${Names.sources}`);

        if (sourceDiv) {
            data.forEach((item) => {
                const sourceItem = document.createElement('div');
                sourceItem.classList.add(Names.sourceItem);
                createHTMLElement({
                    tag: 'span',
                    parentElement: sourceItem,
                    className: Names.sourceItemName,
                    attribute: {
                        name: Names.dataAttr,
                        value: item.id,
                    },
                    text: item.name,
                });
                fragment.append(sourceItem);
            });
            sourceDiv.append(fragment);
        } else {
            handleError([Names.sources]);
        }
    }
}

export default Sources;
