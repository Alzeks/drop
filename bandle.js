
let word = ''
function writeInput(e) {
    word = e.value
}

function output() {
    let arr = Array.from(word)
    let block = document.getElementById('block')
    let block2 = document.getElementById('block2')
    arr.map((item) => {
        let op = document.createElement('span');
        op.innerHTML = item;
        op.setAttribute('draggable', 'true')
        op.addEventListener('dragend', function (event) {
            op.style.position = 'absolute'
            op.style.top = event.pageY + 'px';
            op.style.left = event.pageX + 'px';
        })
        block.append(op)
        document.body.append(block)
    }
    )
}

function output2() {
    let cutedWord = word
    let block3 = document.getElementById('block3');
    block2.innerHTML = word
    document.body.append(block2)
    document.onselectionchange = function () {
        let selection = document.getSelection();

        let chosenChange = ""
        chosen = document.getSelection().toString();

        if (chosen !== chosenChange) {
            let stable = Array.from(cutedWord).filter((item) =>
                item !== chosen[0] | chosen[1] | chosen[2] | chosen[3] | chosen[4]
            ).join('')
            cutedWord = stable
            
            block2.setAttribute('dragable', 'true')
            block2.addEventListener('dragend', function (event) {
                block3.style.position = 'absolute'
                block3.style.top = event.pageY + 'px';
                block3.style.left = event.pageX + 'px';
                block3.innerHTML = chosen
                block2.innerHTML = cutedWord
            })
            document.body.append(block3)
        }
        chosenChange = chosen
    };
}

