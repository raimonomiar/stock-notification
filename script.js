var API_URL = '';

$("#addbtn").click(function(){
    var email = $("#emaila").val();
    var symbol = $("#symbola").val();
    var threshold = $("#threshold").val();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"email": email,"symbol": symbol,"threshold": threshold});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(API_URL + '/notifications', requestOptions)
    .then(response => {
        if (response.status == 201) {
            $("#infoa").addClass('text-success');
            $("#infoa").html('Stock Info udpated');
            return null;
        } else {
            return response.json()
        }
    })
    .then(response =>{
        if (response != null) {
            $("#infoa").addClass('text-warning');
            $("#infoa").html(response.message);
        }
    })
    .catch(error => {
        $("#infoa").addClass('text-danger');
        $("#infoa").html(error.message);
    });
})
$("#removebtn").click(function(){
    var email = $("#emailb").val();
    var symbol = $("#symbolb").val();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"email": email,"symbol": symbol});
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(API_URL + '/notifications', requestOptions)
    .then(response => {
        if (response.status == 204) {
            $("#infor").addClass('text-success');
            $("#infor").html('Stock Info removed');
            return null;
        } else {
            return response.json()
        }
    })
    .then(response =>{
        if (response != null) {
            $("#infor").addClass('text-warning');
            $("#infor").html(response.message);
        }
    })
    .catch(error => {
        $("#infor").addClass('text-danger');
        $("#infor").html(error.message);
    });
})

