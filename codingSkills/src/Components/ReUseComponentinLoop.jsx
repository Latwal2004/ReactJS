import React from 'react'
import ReUseUser from './ReUseUser'

//We use a component ReUseUser.jsx
const ReUseComponentinLoop = () => {
        const UserData = [
        {
            id: 1,
            name: "Harish Latwal",
            email: "harish@example.com",
            age: 22,
            contact: "9876543210"
        },
        {
            id: 2,
            name: "Ansh Sharma",
            email: "ansh@example.com",
            age: 23,
            contact: "9876543211"
        },
        {
            id: 3,
            name: "Anshul Sharma",
            email: "anshul@example.com",
            age: 21,
            contact: "9876543212"
        },
        {
            id: 4,
            name: "Rahul Verma",
            email: "rahul@example.com",
            age: 24,
            contact: "9876543213"
        },
        {
            id: 5,
            name: "Priya Singh",
            email: "priya@example.com",
            age: 22,
            contact: "9876543214"
        },
        {
            id: 6,
            name: "Neha Gupta",
            email: "neha@example.com",
            age: 25,
            contact: "9876543215"
        },
        {
            id: 7,
            name: "Aman Kumar",
            email: "aman@example.com",
            age: 20,
            contact: "9876543216"
        },
        {
            id: 8,
            name: "Rohit Mehta",
            email: "rohit@example.com",
            age: 26,
            contact: "9876543217"
        },
        {
            id: 9,
            name: "Karan Joshi",
            email: "karan@example.com",
            age: 23,
            contact: "9876543218"
        },
        {
            id: 10,
            name: "Simran Kaur",
            email: "simran@example.com",
            age: 22,
            contact: "9876543219"
        },
        {
            id: 11,
            name: "Deepak Yadav",
            email: "deepak@example.com",
            age: 27,
            contact: "9876543220"
        },
        {
            id: 12,
            name: "Pooja Sharma",
            email: "pooja@example.com",
            age: 21,
            contact: "9876543221"
        },
        {
            id: 13,
            name: "Vikas Thakur",
            email: "vikas@example.com",
            age: 24,
            contact: "9876543222"
        },
        {
            id: 14,
            name: "Sneha Arora",
            email: "sneha@example.com",
            age: 23,
            contact: "9876543223"
        },
        {
            id: 15,
            name: "Nikhil Sharma",
            email: "nikhil@example.com",
            age: 22,
            contact: "9876543224"
        },
        {
            id: 16,
            name: "Riya Kapoor",
            email: "riya@example.com",
            age: 20,
            contact: "9876543225"
        },
        {
            id: 17,
            name: "Mohit Rana",
            email: "mohit@example.com",
            age: 25,
            contact: "9876543226"
        },
        {
            id: 18,
            name: "Kavya Jain",
            email: "kavya@example.com",
            age: 21,
            contact: "9876543227"
        },
        {
            id: 19,
            name: "Arjun Patel",
            email: "arjun@example.com",
            age: 24,
            contact: "9876543228"
        },
        {
            id: 20,
            name: "Meera Saini",
            email: "meera@example.com",
            age: 23,
            contact: "9876543229"
        }
    ];
  return (
    <div>
        <h1>ReUse Component in Loop</h1>
        {
            UserData.map((user) =>(
                <div key={user.id}>
                    <ReUseUser data={user}/>
                </div>
            ))
        }
    </div>
  )
}

export default ReUseComponentinLoop