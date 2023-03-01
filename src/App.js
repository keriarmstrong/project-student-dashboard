import Header from "./Header";
import StudentList from "./components/StudentList";
import Cohort from "./components/Cohort";
import data from "./data/data.json";
import { useState } from "react";
// import { logDOM } from "@testing-library/react";

function App() {

  //useState to store student array data
  const [student, setStudent] = useState(data)
  const studentData = data
  const [studentCount, setStudentCount] = useState(250)
  const [title, setTitle] = useState("All students")
  const [cardDetails, setCardDetails] = useState("show More...")


  //function to filter the data by cohort season and year
  function sortByYear(year) {
    
    const newArr = data.filter((student) =>

      student.cohort.cohortCode == year
    )
  //update student array to display filtered year
    setStudentCount(student.length)
    setStudent(newArr)
    let selectedYear = `${(year.slice(0, -4))} ${(year.slice(-4))}`
    setTitle(selectedYear)
    
    console.log("sorted by", year.slice(0,-4),  selectedYear, student.length);
  }

 

  function showAllStudents(){
    
  //update student array to display all
  setStudentCount(student.length)  
  setStudent(data)
  setTitle("All Students")
    
    console.log(title, student.length)  
  }

  
  // function expandStudentCard(student) {
  //   setCardDetails(
  //   <div className="MoreDetails">
  //     <p>{student.names.preferredName} {student.names.middleName.charAt(0)} {student.names.surname}</p>
  //     <p>Birthday:{student.dob}</p>
  //     <p>{student.username}</p>
  //     <a href="#">Show Less...</a>
  //     <h4>Codewars:</h4>
  //     <p>{student.codewars.current.total}</p>
  // </div>
  //   )
      
  // }

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      {/* pass sorted function down to cohort as props  */}
      <div className="Cohort">
        <Cohort students={studentData} sorted={sortByYear} allStudents={showAllStudents} title={title}/>
      </div>
      {/* pass student array down as props  */}
      <div className="StudentList">
        <StudentList studentCount={studentCount} students={student} sorted={sortByYear} title={title}/>
      </div>
    </div>
  )
}

export default App;
