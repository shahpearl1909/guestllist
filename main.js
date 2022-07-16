student_array=[];

function submit(){
    var display_array=[];

    for (var j=1; j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log(name);
        student_array.push(name);
    }

    console.log(student_array);
    var length_array=student_array.length;
    console.log(length_array);

    for (var k=0; k<length_array;k++){
        display_array.push("<h4>Name-"+student_array[k]+"</h4>");
        console.log(display_array);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_array
    var remove=display_array.join("");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    console.log(student_array);

    var display_sort=[];

    var length_array=student_array.length;
    console.log(length_array);
    for (var k=0; k<length_array;k++){
        display_sort.push("<h4>Name-"+student_array[k]+"</h4>");
        console.log(display_sort);
    }

    var remove=display_sort.join("");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
}

function update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>" +student_array+"</h1>";
}