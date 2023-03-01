import { logDOM } from "@testing-library/react"
import StudentCard from "./StudentCard"
export default function StudentList(props) {

    const renderStudent = props.students
   
    return (
       
        <div>
            <div>
                <h3>{props.title}</h3>
                <p>Total Students: {props.studentCount}</p>
            </div>
            <div>
                <StudentCard student={renderStudent}/>
                
            </div>
        </div>
    )
}
// {year.slice(0, -4)} {year.slice(-4)}