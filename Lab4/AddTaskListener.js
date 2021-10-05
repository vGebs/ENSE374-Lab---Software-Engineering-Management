//Dom tutorial part 1 (dom intro & selectors): https://www.youtube.com/watch?v=0ik6X4DJKCc
//Dom tutorial part 2 (Traversing the dom [ancestry of nodes]): https://www.youtube.com/watch?v=mPd2aJXCZ2g
//Dom tutorial part 3: https://www.youtube.com/watch?v=wK2cBMcDTss
//Dom tutorial part 4: https://www.youtube.com/watch?v=i37KVt_IcXw

//console.dir(document); //View output in browser under console to see the document
//console.log(document.documentURI); //view local file location
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);

// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
//headerTitle.textContent = 'hello'; //text content ignores styles for nested elements
//headerTitle.innerText = 'hello1213'; //Does not ignore styles
/*For the most part, textContent and innerText can be used interchangably*/

//headerTitle.innerHTML = "<h3>My name is Vaughn</h3>"; //if you check the inspector for this item, you'll see that
//                                                      // the h3 tag is placed within the <h2> tag, hence innerHTML

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

//let toDoList = document.getElementById('items');

//Only last item (Item 4) will be rendered
// toDoList.innerHTML = '<li class="list-group-item">Item 1</li>';
// toDoList.innerHTML = '<li class="list-group-item">Item 2</li>';
// toDoList.innerHTML = '<li class="list-group-item">Item 3</li>';
// toDoList.innerHTML = '<li class="list-group-item">Item 4</li>';


let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let sortBtn = document.getElementById('sortBtn');

//Form submit event
form.addEventListener('submit', addItem);
sortBtn.addEventListener('click', sortList);

function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item');

    //Create a new li element
    var li = document.createElement('li');
    //Add class name
    li.className = 'list-group-item';
    //Add text node w/ input value
    li.appendChild(document.createTextNode(newItem.value));
    
    //append li to list
    itemList.appendChild(li);
}

function sortList(e) {
    if(e.target.classList.contains('btn-success')){
        var list, i, sortFlag, LiEle, sorted;
        list = document.querySelector(".list-group");
        sortFlag = true;
        while (sortFlag) {
            sortFlag = false;
            LiEle = list.getElementsByTagName("LI");
            for (i = 0; i < LiEle.length - 1; i++) {
                sorted = false;
                if ( LiEle[i].innerHTML.toLowerCase() > LiEle[i + 1].innerHTML.toLowerCase() ) {
                    sorted = true;
                    break;
                }
            }
            if (sorted) {
                LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
                sortFlag = true;
            }
        }
    }
}

function sort(e) {
    if(e.target.classList.contains('btn-success')){
        var items = itemList.getElementsByTagName('li');

        var arr = new Array();
        Array.from(items).forEach(function(item){
            arr.push(item.firstChild.textContent);
        });

        arr.sort();
        console.log(arr);
    }
}