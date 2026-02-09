import React from 'react'
import Card from  './components/Card'
const App = () => {

 const users = [
  {
    name: "Mohd Kaif",
    designation: "Founder & CEO",
    img: "https://tse2.mm.bing.net/th/id/OIP.yZWfAPymIhG_kbRVNfBrDAHaDt?pid=Api&P=0&h=180",
    email: "mohdkaif8672@gmail.com",
    phone: "8587885359",
    location: "Delhi",
  },
  {
    name: "Aisha Khan",
    designation: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "aisha.khan@gmail.com",
    phone: "9876543211",
    location: "Mumbai",
  },
  {
    name: "Rohit Sharma",
    designation: "Senior Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "rohit.sharma@gmail.com",
    phone: "9876543212",
    location: "Bangalore",
  },
  {
    name: "Neha Verma",
    designation: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "neha.verma@gmail.com",
    phone: "9876543213",
    location: "Pune",
  },
  {
    name: "Arjun Mehta",
    designation: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    email: "arjun.mehta@gmail.com",
    phone: "9876543214",
    location: "Gurgaon",
  },
  {
    name: "Sneha Patel",
    designation: "HR Manager",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "sneha.patel@gmail.com",
    phone: "9876543215",
    location: "Ahmedabad",
  },
  {
    name: "Kunal Singh",
    designation: "DevOps Engineer",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "kunal.singh@gmail.com",
    phone: "9876543216",
    location: "Noida",
  },
  {
    name: "Priya Nair",
    designation: "Marketing Lead",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    email: "priya.nair@gmail.com",
    phone: "9876543217",
    location: "Kochi",
  },
  {
    name: "Aditya Raj",
    designation: "Data Analyst",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    email: "aditya.raj@gmail.com",
    phone: "9876543218",
    location: "Hyderabad",
  },
  {
    name: "Simran Kaur",
    designation: "QA Engineer",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    email: "simran.kaur@gmail.com",
    phone: "9876543219",
    location: "Chandigarh",
  },
];

  return (
    
    <div className='parent'>
      

     { users.map( function (elem, idx){
        return <div key={idx}>
         <Card name = {elem.name} designation = {elem.designation} img = {elem.img} email = {elem.email} phone = {elem.phone} location = {elem.location} />

        </div>
      })}

    </div>
  )
}

export default App