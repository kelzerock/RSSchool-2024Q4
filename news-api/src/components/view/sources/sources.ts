import { SourceApi } from '../../../types/index';
import { handleError } from '../../../utils/utils';
import './sources.css';

enum Names {
    sources = 'sources',
    sourceItemName = 'source__item-name',
    sourceItem = 'source__item',
    dataAttr = 'data-source-id',
}

class Sources {
    draw(data: SourceApi[]) {
        const fragment = document.createDocumentFragment();
        const sourceDiv = document.querySelector(`.${Names.sources}`);

        if (sourceDiv) {
            data.forEach((item) => {
                const sourceItemName = document.createElement('div');
                sourceItemName.classList.add(Names.sourceItemName);
                const sourceItem = document.createElement('span');
                sourceItem.classList.add(Names.sourceItem);
                sourceItemName.textContent = item.name;
                sourceItem.setAttribute(Names.dataAttr, item.id);
                sourceItem.append(sourceItemName);
                fragment.append(sourceItem);
            });
            sourceDiv.append(fragment);
        } else {
            handleError([Names.sources]);
        }
    }
}

export default Sources;
