document.addEventListener('DOMContentLoaded', () => {
    let items = document.querySelectorAll('.item');
    let cont1 = document.querySelector('#container-1');
    let cont2 = document.querySelector('#container-2');
    let button = document.querySelector('.btn');
    let draggedItem = null;

    items.forEach((item) => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
        });

        item.addEventListener('dragend', (e) => {
            draggedItem = null;
        });
    });

    cont1.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    cont1.addEventListener('drop', (e) => {
        if (draggedItem) {
            button.disabled = false;
            cont1.appendChild(draggedItem);
        }
    });

    cont2.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    cont2.addEventListener('drop', (e) => {
        if (draggedItem) {
            button.disabled = false;
            cont2.appendChild(draggedItem);
        }
    });

    button.addEventListener('click', () => {
        flag = true;

        document.querySelectorAll('#container-2>.item').forEach((item) => {
            let text = item.textContent;
            if (!(text.includes('Apple') || text.includes('Banana') || text.includes('Tomato'))) {
                alert("Sorry!!Incorrect.")
                flag = false;
            }
        })

        document.querySelectorAll('#container-1>.item').forEach((item) => {
            let text = item.textContent;
            if (!(text.includes('Green Chilly') || text.includes('Potato'))) {
                alert("Sorry!! Incorrect.")
                flag = false;
            }
        })


        if (flag === true) {
            alert('You are Correct ')
        }
    })
});
