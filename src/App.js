import React from 'react';
import EmployeeCard from './EmployeeCard';
import employeeImage from './images/rakesh.png';
import graphicImage from './images/abcd.png'; 
import Avatar from '@mui/material/Avatar'; 
import './App.css';
import logo from './images/123.png';


const data = [
  { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '7(42)', changes: '1.5 hrs', changeType: 'up', imageUrl: require('./images/rakesh.png') },
  { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '7(41)', changes: '1.5 hrs', changeType: 'down', imageUrl: require('./images/download (4).jpeg') },
  { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '7(40)', changes: '1.5 hrs', changeType: 'up', imageUrl: require('./images/download (3).jpeg') },
  { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '7(37)', changes: '1.5 hrs', changeType: 'up', imageUrl: require('./images/download (2).jpeg') },
  { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hoursWorked: '7(37)', changes: '1.5 hrs', changeType: 'down', imageUrl: require('./images/download (1).jpeg') },
  { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '7(32)', changes: '1.5 hrs', changeType: 'down', imageUrl: require('./images/cc.jpeg') },
  { rank: 8, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '7(24)', changes: '1.5 hrs', changeType: 'up', imageUrl: require('./images/bb.jpeg') },
  { rank: 9, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '7(21)', changes: '1.5 hrs', changeType: 'down', imageUrl: require('./images/aa.jpeg') },
  { rank: 10, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '7(20)', changes: '1.5 hrs', changeType: 'down', imageUrl: require('./images/aj.jpeg') },
  { rank: 11, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '7(18)', changes: '1.5 hrs', changeType: 'down', imageUrl: require('./images/1.png') },
];


const getMedal = (rank) => {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉'; 
  return ''; 
};

const Dashboard = () => {
  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div className="header-content">
          <Avatar alt="Remy Sharp" src={logo} 
          sx={{ width: 56, height: 56 }} /> 
          <h1>Employees Activity Dashboard</h1> 
        </div>
        <div className="date-time">
          <p>March 30, 2024</p> 
          <p>09:36 AM</p>
        </div>
      </header>
      <div className="dashboard-content">
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr className="table-header">
                <th scope="col"></th>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">No. of hours worked</th>
                <th scope="col">Changes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee.rank}>
                  <td>{getMedal(employee.rank)}</td> 
                  {/* Display medal based on rank */}
                  <th scope="row">{employee.rank}</th> 
                  {/* Display rank */}
                  <td className="name-avatar">
                    <Avatar alt={employee.name} src={employee.imageUrl}
                     sx={{ width: 24, height: 24 }} /> 
                     {/* Display employee avatar */}
                    <span>{employee.name}</span>
                     {/* Display employee name */}
                  </td>
                  <td>{employee.designation}</td>
                   {/* Display employee designation */}
                  <td>{employee.hoursWorked}</td> 
                  {/* Display hours worked */}
                  <td className={employee.changeType}>
                    {employee.changeType === 'up' ? '▲' : '▼'} 
                    {employee.changes}
                     {/* Display change in hours with up/down arrow */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <EmployeeCard
          name="Rakesh Sharma"
          position="UI/UX Designer"
          imageUrl={employeeImage}
          graphicUrl={graphicImage}
        /> {/* Display EmployeeCard component */}
        <div className="empty-space"></div> {/* Empty space for layout adjustment */}
      </div>
    </div>
  );
};

export default Dashboard;
