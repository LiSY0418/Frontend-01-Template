function match(selector, element) {
    let selectorL = selector.split(" ");
    let targetSelector = selectorL.pop();
    let tagReg = new RegExp('^[a-z]+'); //处理标签选择器
    let idReg = new RegExp('\#[a-z]+'); //处理id选择器
    let clsReg = new RegExp('\.[a-z]+'); //处理类选择器
    let selectorType = ['tag', 'id', 'class'];

    selectorType.forEach((item) => {
        if (item === 'tag') {
            if (!targetSelector.match(tagReg) || targetSelector.match(tagReg) && targetSelector.match(tagReg)[0] === element.tagName.toLowerCase()) {
                return true;
            } else if (targetSelector.match(tagReg)[0] !== element.tagName.toLowerCase()) {
                return false;
            }
        }
        if (item === 'id') {
            if ((!targetSelector.match(idReg) || targetSelector.match(idReg) && targetSelector.match(idReg)[0].slice(1) === element.getAttribute('id'))) {
                return true;
            } else if (targetSelector.match(idReg) && targetSelector.match(idReg)[0].slice(1) !== element.getAttribute('id')) {
                return false;

            }
        }
        if (item === 'class') {
            if ((!targetSelector.match(clsReg) || targetSelector.match(clsReg) && targetSelector.match(clsReg)[0].slice(1) === element.getAttribute('class'))) {
                return true;
            } else if (targetSelector.match(clsReg) && targetSelector.match(clsReg)[0].slice(1) !== element.getAttribute('class')) {
                return false;
            }
        }
    });
}