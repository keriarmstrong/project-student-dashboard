
import StudentCard from "./StudentCard"
export default function StudentList(props) {

    const renderStudent = props.students
   
    return (
       
        <div>
            <div>
                <h2>{props.title}</h2>
                <p>Total Students: {props.studentCount}</p>
            </div>
            <div>
                <StudentCard student={renderStudent}/>
                
            </div>
        </div>
    )
}
// {year.slice(0, -4)} {year.slice(-4)}