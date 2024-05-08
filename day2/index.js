const fs = require('fs');
const path = require('path');
const readline = require('readline');
const filePath = path.join(__dirname, 'tasks.txt');

function loadTasks() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 4), 'utf8');
}

function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ task, completed: false });
    saveTasks(tasks);
    console.log('Task added successfully.');
}

function viewTasks() {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log('No tasks available.');
    } else {
        console.log('Tasks:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.task}`);
        });
    }
}

function markComplete(index) {
    const tasks = loadTasks();
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        saveTasks(tasks);
        console.log('Task marked as complete.');
    } else {
        console.log('Invalid task index');
    }
}

function removeTask(index) {
    const tasks = loadTasks();
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log('Task removed successfully.');
    } else {
        console.log('Invalid task index');
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    console.log('\nWhat would you like to do?');
    console.log('1. Add a new task');
    console.log('2. View tasks');
    console.log('3. Mark a task as complete');
    console.log('4. Remove a task');
    console.log('5. Exit');

    rl.question('Enter the number of your choice: ', (choice) => {
        switch (parseInt(choice)) {
            case 1:
                rl.question('Enter task: ', (task) => {
                    addTask(task);
                    promptUser();
                });
                break;
            case 2:
                viewTasks();
                promptUser();
                break;
            case 3:
                rl.question('Enter index of task to mark as complete: ', (index) => {
                    markComplete(parseInt(index) - 1);
                    promptUser();
                });
                break;
            case 4:
                rl.question('Enter index of task to remove: ', (index) => {
                    removeTask(parseInt(index) - 1);
                    promptUser();
                });
                break;
            case 5:
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                promptUser();
                break;
        }
    });
}

promptUser();
