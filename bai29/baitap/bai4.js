let tasks = [];
let currentId = 1;

function main() {
    let choice;
    do {
        choice = +prompt(
            "1. Thêm công việc mới.\n2. Hiển thị tất cả các công việc.\n3. Cập nhật trạng thái công việc theo ID.\n4. Lọc công việc theo trạng thái.\n5. Sắp xếp công việc theo trạng thái.\n6. Thoát.\nMời bạn nhập lựa chọn:"
        );
        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                showTasks();
                break;
            case 3:
                updateTaskStatus();
                break;
            case 4:
                filterTasks();
                break;
            case 5:
                sortTasks();
                break;
            case 6:
                console.log("Thoát chương trình!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 6);
}

function addTask() {
    let name = prompt("Nhập tên công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let startTime = prompt("Nhập thời gian bắt đầu:");
    let status = prompt("Nhập trạng thái (Hoàn thành/Chưa hoàn thành):");
    
    tasks.push({ id: currentId++, name, description, startTime, status });
    console.log("Công việc đã được thêm!");
}

function showTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach(task => console.log(task));
}

function updateTaskStatus() {
    let id = +prompt("Nhập ID công việc cần cập nhật:");
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.status = prompt("Nhập trạng thái mới (Hoàn thành/Chưa hoàn thành):");
        console.log("Cập nhật thành công!");
    } else {
        console.log("Không tìm thấy công việc với ID này!");
    }
}

function filterTasks() {
    let status = prompt("Nhập trạng thái cần lọc (Hoàn thành/Chưa hoàn thành):");
    let filtered = tasks.filter(task => task.status === status);
    console.log("Công việc theo trạng thái:", filtered);
}

function sortTasks() {
    tasks.sort((a, b) => (a.status > b.status ? 1 : -1));
    console.log("Danh sách công việc sau khi sắp xếp:");
    showTasks();
}

main();
