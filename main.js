
window.onload = async function(){
    try {
        const response = await axios.get('https://empl-dev.site/api/interview/fetchWork');
        // console.log(response);
        const users = response.data.data;
        let rows = "";
        $.each(users, function(){
            rows += "<tr><td>" + this.firstname + "</td><td>" + this.lastname + "</td><td>" + this.arrival_time + "</td><td>" + this.exit_time + "</td><td>" + this.date_of_interview + "</td></tr>";
        });
        
        $( rows ).appendTo( "#usersList tbody" );
        console.log(response);
      } catch (error) {
        console.error(error);
      }

}

document.getElementById('submit').addEventListener('click', onFormSubmit)

async function onFormSubmit () {
    const body = {
        firstname: document.getElementsByName("firstName")[0].value,
        lastname: document.getElementsByName("lastName")[0].value,
        arrival_time: document.getElementsByName("arrivalTime")[0].value,
        exit_time: document.getElementsByName("exitTime")[0].value,
        date_of_interview: document.getElementsByName("dateOfInterview")[0].value
    }
    try {
        console.log(body);
      const response = await axios.post("https://cors-anywhere.herokuapp.com/https://empl-dev.site/api/interview/addWork",body);
      console.log(response);
    } catch (error) {
        console.log(error)
    }
}


document.getElementById('deletebutton').addEventListener('click', onDeleteFormSubmit)

async function onDeleteFormSubmit () {
    const body = {
        id: document.getElementsByName("deleteInput")[0].value
    }
    try {
        console.log(body);
      const response = await axios.post("https://cors-anywhere.herokuapp.com/https://empl-dev.site/api/interview/deleteWork",body);
      console.log(response);
    } catch (error) {
        console.log(error)
    }
}
