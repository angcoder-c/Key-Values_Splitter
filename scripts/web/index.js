document.addEventListener('DOMContentLoaded', () => {
    const source = document.getElementById('source');
    const showButton = document.getElementById('show');
    const keyField = document.getElementById('key');
    const valueField = document.getElementById('value');
    const addButton = document.getElementById('add');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('reset');

    var objOrigin = {};

    function paintFields (color) {
        
    }

    function addItem () {
        var key = keyField.value; 
        var value = valueField.value; 

        if (key && value){
            objOrigin[key] = value;
            source.innerText = JSON.stringify(objOrigin);
            paintFields();

            keyField.value = ''; 
            valueField.value = ''; 
        } else {
            keyField.style.backgroundColor = '#f00';
            valueField.style.backgroundColor = '#f00';
        }
    }

    function show () {
        if (Object.keys(objOrigin).length > 0){
            result.innerText = JSON.stringify(keysAndValue(objOrigin));
        } else {
            source.style.backgroundColor = '#f00';
        }
    }

    function reset () {
        keyField.value = ''; 
        valueField.value = '';
        source.innerText = ''; 
        result.innerText = '---';
    }

    resetButton.onclick = reset;
    addButton.onclick = addItem;
    showButton.onclick = show;
});
