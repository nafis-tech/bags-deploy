// input
var input = [
    {firstname: 'armin' , lastname: 'artlert', age: 17 },
    {firstname: 'eren' , lastname: 'yeager', age: 18 },
    {firstname: 'mikasa' , lastname: 'ackerman', age: 16 },
  ]

  var hasil = input.map((item) => {
    return (
        {fullname : item.firstname + item.lastname, age : item.age}
    )
   
  })

  console.log(hasil.sort((a,b) => a.age - b.age))

    

//   let output = (firstname, lastname, age) => {
//       input.map 
//           return (
//               fullname =    input.firstname + input.lastname,
//               age = age
//           )
//       }
   let output2 = [
       {fullnama : input[0].firstname + input[0].lastname, age : input[0].age},
       {fullnama : input[0].firstname + input[0].lastname, age : input[0].age},
       {fullnama : input[0].firstname + input[0].lastname, age : input[0].age}
   ]

//    let output3 = () => input.map 
//    return 
//         let  nama : input[0].firstname + input[0].lastname, age : input[0].age
   

//     console.log(output3)
  

//   console.log(output)
//   console.log(output2)
  
  // output
//   [
//     {fullname: 'mikasa ackerman' , age: 16 },
//     {fullname: 'armin artlert' , age: 17 },
//     {fullname: 'eren yeager' , age: 18 },
//   ]