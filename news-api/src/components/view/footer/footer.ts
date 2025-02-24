import { createHTMLElement } from '../../../utils/utils';
import './footer.css';

enum Names {
    container = 'container',
    link = 'container-link',
    linkCourse = 'container-link-course',
    img = 'footer-img',
    title = 'footer-title',
}

interface InfoFooter {
    name: string;
    linkToGithub: string;
    year: number;
}

class Footer {
    private info;
    constructor(info: InfoFooter) {
        this.info = info;
    }
    public draw() {
        const footer = document.querySelector('footer');
        if (footer && footer instanceof HTMLElement) {
            const container = document.createElement('div');
            container.classList.add(Names.container);
            const link = createHTMLElement({
                tag: 'a',
                parentElement: container,
                className: Names.link,
                attribute: [
                    { name: 'href', value: this.info.linkToGithub },
                    { name: 'target', value: '_blank' },
                ],
            });
            const linkToCourse = createHTMLElement({
                tag: 'a',
                parentElement: container,
                className: Names.linkCourse,
                attribute: [
                    { name: 'href', value: 'https://rs.school/courses/javascript' },
                    { name: 'target', value: '_blank' },
                ],
            });
            createHTMLElement({
                tag: 'img',
                parentElement: linkToCourse,
                className: Names.img,
                attribute: [{ name: 'src', value: 'img/rss-logo.svg' }],
            });
            createHTMLElement({
                tag: 'span',
                parentElement: link,
                className: Names.title,
                text: this.info.name + ', ' + this.info.year,
            });
            footer.append(container);
        }
    }
}

export default Footer;
