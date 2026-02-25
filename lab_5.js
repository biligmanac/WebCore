const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const onlineUsers = users.filter(user => user.status === 'online');

const usersOnlineNames = onlineUsers.map(user => user.username).join(', ');

alert(Сейчас в онлайн следующие пользователи: ${usersOnlineNames});


const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" }
];

function giveTalonsInOrder(patients, orders) {
    return orders.map(orderId => 
        patients.find(patient => patient.id === orderId)
    );
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);



const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
};

function handleObject(obj, key, action) {
    switch (action) {
        case 'get':
            return obj[key];
        case 'add':
            obj[key] = "";
            return obj;
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
    }
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }

console.log(handleObject(student, 'name', 'get')); // 'Maxim'
console.log(handleObject(student, 'age', 'add')); // { name: 'Maxim', age: '' }
console.log(handleObject(student, 'age', 'wrong')); // { name: 'Maxim', age: '' }



const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

function giveJobToStudent(student, jobName) {
    const updatedStudent = {
        ...student,
        job: jobName
    };
    
    alert(Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName});
    
    return updatedStudent;
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log('updatedStudent', updatedStudent);
