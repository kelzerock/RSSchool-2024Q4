export const handleError = (args: string[]): void => {
    console.error(`Attentions! This element${args.length > 1 ? 's' : ''} ${args.join(', ')} doesn't exist in HtmlDOM.`);
};
