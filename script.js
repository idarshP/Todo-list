  
      window.onload = () => {
        const todoForm = document.getElementById("addForm");
        const items = document.getElementById("items");
        const submit = document.getElementById("submit");
        const completed = document.getElementById("comp-task");

        let editItem = null;

        todoForm.addEventListener("submit", function(e) {
          e.preventDefault();
          // console.log(todoForm.value);
          if (submit.value !== "+") {
            editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
            // console.log(submit.value);
            submit.value = "+";
            document.getElementById("item").value = "";
            return false;
            // console.log(submit.value);
          }
          const newItem = document.getElementById("item").value;
            
          // if(newItem === '') {
          //   alert("Feild empty");
          // }        
          if (newItem.trim() === "" || newItem.trim() === null) {
            return false;
          } else {
            document.getElementById("item").value = "";

            const li = document.createElement("li");
            li.className = "tasks"
            // console.log(items);

            li.appendChild(document.createTextNode(newItem));

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-task";
            deleteButton.appendChild(document.createTextNode("Delete"));

            const editButton = document.createElement("button");
            editButton.className = "edit";
            editButton.appendChild(document.createTextNode("Edit"));
              
            items.appendChild(li);
            li.appendChild(deleteButton);
            li.appendChild(editButton);
          }
        });
        items.addEventListener("click", function(e) {
          e.preventDefault();
          if (e.target.classList.contains("delete-task")) {
            const li = e.target.parentNode;
            items.removeChild(li);
          }
          if (e.target.classList.contains("edit")) {
            document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
            submit.value = "edit";
            editItem = e;
          }
        });

        items.addEventListener("click", function(ev) {
          if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
            const children = ev.target.childNodes;
            const node = ev.target;
            ev.target.removeChild(children[1]);
            ev.target.removeChild(children[1]);
            const completedList = document.getElementById('comp-task');
            items.removeChild(node);
            completedList.appendChild(node);
            document.getElementById('item').value = '';
            document.getElementById('submit').value = '+';
          }
          console.log(item.value);
        });
      }
