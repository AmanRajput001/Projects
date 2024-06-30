addEvent = document.getElementById('submit');
input = document.getElementById('event_text');
eventcontainer = document.getElementById('events-container');

function eventCreate(text, checked) {
    let li = document.createElement('li');
    eventcontainer.appendChild(li);
    li.classList = 'row m-1 p-2';

    let label = document.createElement('label');
    let chekbox = document.createElement('input');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    chekbox.type = 'checkbox';
    chekbox.style.width = '18px';
    chekbox.style.height = '18px';
    chekbox.classList = 'col-1 m-3 me-1 ms-1'
    chekbox.checked = checked;

    label.innerText = text;
    label.classList = 'col-9 bg-white ms-2 me-2 p-2 text-dark border border-2 border-dark rounded-1';

    btn1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16"><path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/></svg>';
    btn1.classList = 'btn btn-outline-danger col-1 me-1 border border-2 border-danger';
    btn1.id = 'btn1';

    btn2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>'
    btn2.classList = 'btn btn-outline-success col-1 border border-2 border-success';
    btn2.id = 'btn2';

    li.appendChild(chekbox);
    li.appendChild(label);
    li.appendChild(btn1);
    li.appendChild(btn2);

    
    window.location.reload();
}

addEvent.addEventListener('click', function (e) {
    if (input.value === '') {
        alert('Please Enter text to add Event.');
    } else {
        eventCreate(input.value, false);
        saveData();
    }
}, false);

eventcontainer.addEventListener('click', function (e) {
    let li = e.target.closest('li');
    if (li) {
        let label = li.querySelector('label');
        let checkbox = li.querySelector('input[type="checkbox"]');

        if (checkbox && (e.target === checkbox)) {
            label.classList.toggle('text-decoration-line-through');
            saveData(); // Save the updated checkbox state
        }

        let btn1 = li.querySelector('button[id="btn1"]');

        if (btn1 && (e.target === btn1 || btn1.contains(e.target))) {
            li.remove();
        }

        let btn2 = li.querySelector('button[id="btn2"]');

        if (btn2 && (e.target === btn2 || btn2.contains(e.target))) {
            let text = prompt("Edit following message ", label.innerText);
            if (text != null) {
                label.innerText = text;
            }

        }
        saveData();
    }
}, false);

function saveData() {
    let events = [];

    eventcontainer.querySelectorAll('li').forEach(li => {
        console.log(li.querySelector('input[type="checkbox"]').checked);
        let event = {
            li: li.innerHTML,
            checked: li.querySelector('input[type="checkbox"]').checked
        };

        events.push(event);
    });

    localStorage.setItem('events', JSON.stringify(events));
}


function getData() {    
    let events = JSON.parse(localStorage.getItem('events')) || [];

    if (events.length === 0) {
        document.getElementById('card-event-container').style.display = 'none';
    }
    else {
        document.getElementById('card-event-container').style.display = 'block';
        events.forEach(event => {
            let li = document.createElement('li');
            li.innerHTML = event.li;
            eventcontainer.appendChild(li);

            let checkbox = li.querySelector('input[type="checkbox"]');
            console.log(event.checked);
            checkbox.checked = event.checked;
        });
    }
}

getData();