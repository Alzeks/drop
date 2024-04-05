
function filterSelected(item, selected) {
    let res = true;
    Array.from(selected).forEach(function (selected) {
        if (selected == item) { res = false }
    })
    return res
}

let word = ''
function writeInput(e) { word = e.value }

function variantA() {
    const arr = Array.from(word)
    const block = document.getElementById('block')
    arr.map((item) => {
        let span = document.createElement('span');
        span.innerHTML = item;
        span.setAttribute('draggable', 'true')
        span.addEventListener('dragend', function (event) {
            span.style.position = 'absolute'
            span.style.top = event.pageY + 'px';
            span.style.left = event.pageX + 'px';
        })
        block.append(span)
        document.body.append(block)
    }
    )
}

function variantB() {
    let wordCopy = word
    const block2 = document.getElementById('block2')
    const block3 = document.getElementById('block3');
    block2.innerHTML = word
    document.body.append(block2)

    document.onselectionchange = function () {
        let selection = document.getSelection();
        let selected = document.getSelection().toString();
        let chosenChange = ""

        if (selected !== chosenChange) {
            wordCopy = Array.from(wordCopy).filter((item) =>
                filterSelected(item, selected)).join('')
        }
        block2.setAttribute('dragable', 'true')
        block2.addEventListener('dragend', function (event) {
            block3.style.position = 'absolute'
            block3.style.top = event.pageY + 'px';
            block3.style.left = event.pageX + 'px';
            block3.innerHTML = selected
            block2.innerHTML = wordCopy
        })
        document.body.append(block3)
    };
}

