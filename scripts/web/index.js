document.addEventListener('DOMContentLoaded', () => {
    const source = document.getElementById('source');
    const showButton = document.getElementById('show');
    const keyField = document.getElementById('key');
    const valueField = document.getElementById('value');
    const addButton = document.getElementById('add');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('reset');

    var objOrigin = {};

    function addItem () {
        /*
         * if the text fields have any values, 
         * insert them into the object, clear the fields 
         * and display the object. 
        */
        var key = keyField.value; 
        var value = valueField.value; 

        if (key && value){
            objOrigin[key] = value;
            source.innerText = JSON.stringify(objOrigin);

            keyField.value = ''; 
            valueField.value = ''; 

            keyField.classList.remove('error');
            valueField.classList.remove('error');
        } else {
            keyField.classList.add('error');
            valueField.classList.add('error');
        }
    }

    function show () {
        // display result
        if (Object.keys(objOrigin).length > 0){
            result.innerText = JSON.stringify(keysAndValue(objOrigin));
        } else {}
    }

    function reset () {
        // reset the values ​​of all text fields
        keyField.value = ''; 
        valueField.value = '';
        source.innerText = ''; 
        result.innerText = '---';

        objOrigin = {};

        keyField.classList.remove('error');
        valueField.classList.remove('error');
    }

    resetButton.onclick = reset;
    addButton.onclick = addItem;
    showButton.onclick = show;
});
