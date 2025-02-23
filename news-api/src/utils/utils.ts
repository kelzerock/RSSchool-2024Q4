export const handleError = (args: string[]): void => {
    console.error(
        `Attentions! This element${args.length > 1 ? 's' : ''} ${args.map((el) => `"${el}"`).join(', ')} doesn't exist in HtmlDOM.`
    );
};

interface CreateHtmlElement {
    tag: string;
    parentElement: HTMLElement;
    className: string;
    text?: string;
    attribute?: AttributeHtml;
}

type AttributeHtml = {
    name: string;
    value: string;
};

export const createHTMLElement = ({ tag, parentElement, className, attribute, text }: CreateHtmlElement) => {
    const node = document.createElement(tag);
    node.classList.add(className);
    if (attribute) {
        node.setAttribute(attribute.name, attribute.value);
    }
    if (text) {
        node.textContent = text;
    }

    parentElement.append(node);
};
