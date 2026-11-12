//HTMLにある要素を取得
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const input = document.getElementById("task-input");


function addTask() {
    const taskName = input.value.trim();
    if (taskName !== "") {
        //新しいリスト、削除、名前、チェック
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
        const taskText = document.createElement("span");
        const check = document.createElement("input");
        //タイプ
        check.type = "checkbox";
        //リストに追加
        taskList.appendChild(newTask);
        //名前の子要素
        newTask.appendChild(check);
        newTask.appendChild(taskText);
        taskText.textContent = taskName;
        //削除の子要素
        deleteButton.textContent = "削除";
        newTask.appendChild(deleteButton);
        //削除の機能()
        deleteButton.addEventListener("click", function () {
            newTask.remove();
        });
        //チェックの子要素
        //チェックの機能
        check.addEventListener("change", function () {
            if (check.checked) {
                taskText.style.textDecoration = "line-through";
            }
            else {
                taskText.style.textDecoration = "none";
            }
        });

        input.value = "";
    }
}

addButton.addEventListener("click", function () {
    addTask();
});

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
{
    addTask();
}
});