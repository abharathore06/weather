import React from 'react';

export default function FetchData(){



const fetchData = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response)
        }
    }
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=80186bc6ef5c092a7aa7bcdb10ea8c80&units=metric");
    xhr.send()
}

  return (
    <div>
        <button onClick={fetchData}>search</button>
    </div>
  )
  }
