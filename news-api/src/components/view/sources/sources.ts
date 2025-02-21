import { SourceApi } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: SourceApi[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sourceDiv = document.querySelector('.sources') as HTMLDivElement; // ).append(fragment);

        if (sourceItemTemp && sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });
            sourceDiv.append(fragment);
        } else {
            console.error("Attention! Div .source or #sourceItemTemp doesn't exist in HtmlDOM");
        }
    }
}

export default Sources;
