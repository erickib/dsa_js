/*
    Returns the index position of the target if found, else returns Null
*/

function onClickLinearSearch() {
    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var inputTarget = document.getElementById("target")
    var divOutput = document.getElementById("output")
    target = inputTarget.value
    console.log(target);
    result = linear_search(list, target)
    divOutput.innerHTML = verify(result)
    var brElement = document.createElement('br')
    divOutput.appendChild(brElement)
    divOutput.appendChild(generateGrid(list, []))
}

function linear_search(list, target) {
    for (i in list) {
        if (list[i] == target)
            return i
    }
    return null
}

function verify(index) {
    if (index != null)
        return `Target found at index: ${index}`
    else
        return "Target not found in list"
}

function generateGrid(list) {
    let container =  document.createElement('div')
    container.style.display = 'inline-flex'
    container.style.gap = '5px'
    
    list.forEach(element => {
        let divElement = document.createElement('div')
        // divElement.style.display = 'inline-grid'
        divElement.style.border = '1px solid black'
        divElement.style.width = '20px'
        divElement.style.textAlign = 'center'
        console.log(divElement, element);
        divElement.innerHTML = element
        container.appendChild(divElement)
    });

    console.log(container);
    
    return container
}