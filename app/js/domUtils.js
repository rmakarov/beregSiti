
export const addBlock = (parent, props) => {
    const block = document.createElement('div');

    if(props){
        Object.entries(props).forEach(([key, value]) => {
            block.setAttribute(key, value);
        });
    }
    parent.appendChild(block);
    return block;
}

export const addTextBlock = (text, parent, props) => {
    const textBlock = document.createElement('p');
    textBlock.innerText = text;
    if(props){
        Object.entries(props).forEach(([key, value]) => {
            textBlock.setAttribute(key, value);
        });
    }
    parent.appendChild(textBlock);
    return textBlock;
}

export const addInlineText = (text, parent, props) => {
    const inlineText = document.createElement('span');
    inlineText.innerText = text;
    if(props){
        Object.entries(props).forEach(([key, value]) => {
            inlineText.setAttribute(key, value);
        });
    }
    parent.appendChild(inlineText);
    return inlineText;
}

export const addImage = (src, parent, props) => {
    const image = document.createElement('img');
    image.src = src;

    if(props){
        Object.entries(props).forEach(([key, value]) => {
            image.setAttribute(key, value);
        });
    }
    parent.appendChild(image);
    return image;
}

export const addButton = (text, parent, props) => {
    const button = document.createElement('button');
    button.innerText = text;
    if(props){
        Object.entries(props).forEach(([key, value]) => {
            button.setAttribute(key, value);
        });
    }
    parent.appendChild(button);
    return button;
}