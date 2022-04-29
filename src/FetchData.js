// import React from 'react';

// const FetchData = () => {
//     let xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';

//     xhr.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             console.log(this.response)
//         }
//     }
//     xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=80186bc6ef5c092a7aa7bcdb10ea8c80&units=metric");
//     xhr.send()

//   return (
//       <div>
//           <p>
//               {this.state.weather[0].id}
//           </p>
//       </div>
//   );
//   }
// export default FetchData



import React, { Component } from "react";
// import { Text, View } from 'react-native';
class FetchData extends Component {
   state = {
      data: ''
   }
   fetchData = () => { fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=80186bc6ef5c092a7aa7bcdb10ea8c80&units=metric', {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      console.log(responseJson);
      this.setState({
         data: responseJson
      })
   })
   .catch((error) => {
      console.error(error);
   });
}
render() {
   return (
      <div>
         <p>{this.state.data.weather}</p>
      </div>
      // <View>
      //    <Text>
      //       {this.state.data.weather[0].id}
      //       </Text>
      //    </View>
      )
   }
}

export default FetchData