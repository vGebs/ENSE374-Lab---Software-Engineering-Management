$(document).ready(function(){
    //Add new task
    $("#addNewTask").click( () => {
    
        let inputText = $("#newItemText").val();

        if (inputText.length > 0){
            var div = document.createElement("div");
            div.id = "task";
            div.className = "input-group mb-3";
            $("#unclaimedTasks").after(div);

            var input = document.createElement('input');
            input.id = "taskText";
            input.type = 'text';
            input.className = 'form-control';
            input.value = inputText;
            input.disabled = true;
            $("#task").append(input);
    
            var button = document.createElement('button');
            button.className = "btn btn-outline-secondary";
            button.type= 'button';
            button.id = "claim";
            button.textContent = "Claim";
            $("#task").append(button);
        }
    });

    //Claim existing task
    $(document).on("click", "#claim" , function() {
        let claimedTaskText = $("#taskText").val();
        
        var outerDiv = document.createElement('div');
        outerDiv.id = "claimedTask";
        outerDiv.className = "input-group mb-3";
        $(".container").prepend(outerDiv);

        var innerDiv = document.createElement('div');
        innerDiv.className = "input-group-text";
        innerDiv.id = "checkBoxDiv";
        $("#claimedTask").prepend(innerDiv);
        
        var checkBox = document.createElement('input');
        checkBox.className = "form-check-input mt-0";
        checkBox.id = "checkBox";
        checkBox.type = 'checkbox';
        $("#checkBoxDiv").prepend(checkBox);

        var input = document.createElement('input');
        input.id = "claimedTaskText";
        input.type = 'text';
        input.className = 'form-control';
        input.value = claimedTaskText;
        input.disabled = true;
        $("#claimedTask").append(input);
    
        var button = document.createElement('button');
        button.className = "btn btn-outline-secondary";
        button.type= 'button';
        button.id = "abandon";
        button.textContent = "Abandon";
        $("#claimedTask").append(button);

        $('#task').remove();
    });

    //Adandon task
    $(document).on("click", "#abandon" , function() {

        var div = document.createElement("div");
        div.id = "task";
        div.className = "input-group mb-3";
        $("#unclaimedTasks").after(div);

        var inputText = $('#claimedTaskText').val();
        var input = document.createElement('input');
        input.id = "taskText";
        input.type = 'text';
        input.className = 'form-control';
        input.value = inputText;
        input.disabled = true;
        $("#task").append(input);
    
        var button = document.createElement('button');
        button.className = "btn btn-outline-secondary";
        button.type= 'button';
        button.id = "claim";
        button.textContent = "Claim";
        $("#task").append(button);

        $('#claimedTask').remove();
    });

    //Complete task
    $(document).on("click", "#checkBox" , function() {

        var outerDiv = document.createElement('div');
        outerDiv.className = "input-group mb-3";
        outerDiv.id = "completedTask";
        $('.container').prepend(outerDiv);

        var innerDiv = document.createElement('div');
        innerDiv.className = "input-group-text";
        innerDiv.id = "completedCheckboxDiv";
        $('#completedTask').prepend(innerDiv);

        var checkBox = document.createElement('input');
        checkBox.className = "form-check-input mt-0";
        checkBox.id = "checkBox";
        checkBox.type = 'checkbox';
        checkBox.checked = true;
        $('#completedCheckboxDiv').append(checkBox);

        var text = $("#claimedTaskText").val();
        var textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = "form-control";
        textInput.disabled = true;
        textInput.value = text;
        $("#completedTask").append(textInput);

        $("#claimedTask").remove();
    });

    //remove tasks
    $(document).on("click", "#removeCompleted" , function() {
        $("#completedTask").remove();
    });
});
