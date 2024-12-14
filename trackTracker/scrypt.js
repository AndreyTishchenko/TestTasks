let cargoList = [
    {
        id: "CARGO001",
        name: "Строительные материалы",
        status: "В пути",
        origin: "Москва",
        destination: "Казань",
        departureDate: "2024-11-24"
    },
    {
        id: "CARGO002",
        name: "Хрупкий груз",
        status: "Ожидает отправки",
        origin: "Санкт-Петербург",
        destination: "Екатеринбург",
        departureDate: "2024-11-26"
    }
];

// Функция для отображения грузов в таблице
function displayCargoList() {
    const tbody = document.getElementById('cargoTableBody');
    tbody.innerHTML = '';

    cargoList.forEach(cargo => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${cargo.id}</td>
            <td>${cargo.name}</td>
            <td class="${getStatusClass(cargo.status)}">
                ${cargo.status === 'Доставлен' ? cargo.status : ''}
                ${cargo.status === 'Доставлен' ? '' : `<select class="form-control select-custom status" onchange="updateStatus('${cargo.id}', this.value)">
                    <option value="">${cargo.status}</option>
                    <option value="Ожидает отправки">Ожидает отправки</option>
                    <option value="В пути">В пути</option>
                    <option value="Доставлен">Доставлен</option></select>`}
            </td> 
            <td>${cargo.origin}</td> 
            <td>${cargo.destination}</td> 
            <td>${cargo.departureDate}</td>`;
        
        tbody.appendChild(row);
    });
}

// Получение класса для статуса
function getStatusClass(status) {
    switch (status) {
        case 'Ожидает отправки':
            return 'status-awaiting';
        case 'В пути':
            return 'status-in-transit';
        case 'Доставлен':
            return 'status-delivered';
        default:
            return '';
    }
}

// Обновление статуса груза
function updateStatus(id, newStatus) {
    const cargo = cargoList.find(c => c.id === id);
    
    if (newStatus === 'Доставлен' && new Date(cargo.departureDate) > new Date()) {
        alert('Ошибка: Нельзя установить статус "Доставлен", если дата отправления в будущем.');
        return;
    }

    cargo.status = newStatus;
    displayCargoList();
}

// Добавление нового груза
document.getElementById('addCargoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('cargoName').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;

    if (!name || !origin || !destination || !departureDate) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const newCargo = {
        id: `CARGO00${cargoList.length + 1}`,
        name,
        status: 'Ожидает отправки',
        origin,
        destination,
        departureDate
    };

    cargoList.push(newCargo);
    
    // Очистка формы и обновление таблицы
    this.reset();
    displayCargoList();
});

// Фильтрация по статусу
document.getElementById('statusFilter').addEventListener('change', function() {
   const selectedStatus = this.value;
   const filteredCargoList = selectedStatus ? cargoList.filter(c => c.status === selectedStatus) : cargoList;
   
   // Обновление таблицы с отфильтрованными данными
   displayFilteredCargoList(filteredCargoList);
});

function displayFilteredCargoList(filteredList) {
   const tbody = document.getElementById('cargoTableBody');
   tbody.innerHTML = '';

   filteredList.forEach(cargo => {
       const row = document.createElement('tr');
       
       row.innerHTML = `
           <td>${cargo.id}</td>
           <td>${cargo.name}</td>
           <td class="${getStatusClass(cargo.status)}">${cargo.status}
               ${cargo.status === 'Доставлен' ? '' : `<select onchange="updateStatus('${cargo.id}', this.value)">
                   <option value="">Изменить статус...</option>
                   <option value="Ожидает отправки">Ожидает отправки</option>
                   <option value="В пути">В пути</option>
                   <option value="Доставлен">Доставлен</option></select>`}
           </td> 
           <td>${cargo.origin}</td> 
           <td>${cargo.destination}</td> 
           <td>${cargo.departureDate}</td>`;
       
       tbody.appendChild(row);
   });
}

// Инициализация отображения при загрузке страницы
displayCargoList();
document.querySelectorAll('#toggleCargoForm').forEach(element => {
    element.addEventListener('click', function() {
        const cargoFormContainer = document.getElementById('cargoFormContainer');
        cargoFormContainer.classList.toggle('active'); // Переключаем класс для анимации
    });
})
