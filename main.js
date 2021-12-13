students=[];

function submit(){
    var display_students=[];
    for(var j=1; j<=4; j++){
        var name_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_student);
        students.push(name_student);
    }
    console.log(students);

    var length_of_students=students.length;
    console.log(length_of_students);

    for(var k=0; k<length_of_students; k++){
        display_students.push("<h4>Name :"+students[k]+"</h4>");
        console.log(display_students);
    }
    console.log(display_students);
    document.getElementById("display_name_with_commas").innerHTML=display_students;

    var remove_commas=display_students.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    students.sort();
    console.log(students);

    var students_sort=[];
    var length_students_sort=students.length;
    console.log(length_students_sort);

    for(var k=0; k<length_students_sort; k++){
        students_sort.push("<h4>Name-"+students[k]+"</h4>");
        console.log(students_sort);
    }

    var remove_commas=students_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update(){
 document.getElementById("display_name_without_commas").innerHTML="<h1>"+students+"</h1>";
}
