
import { useState } from "react"
export default function StudentCard(props) {

    const [selected, setSelected] = useState(null)
    const toggle = (index) => {
        if (selected == index) {
            return setSelected(null)
        }
        setSelected(index)
    }

    const studentInfo = props.student.map((student, index) => {
        return (
            <div className="student-Info">

                <div className="pfp">
                    <img src={student.profilePhoto} alt="profile-picture"></img>
                </div>
                <div className="details">
                    <p>{student.names.preferredName} {student.names.middleName.charAt(0)} {student.names.surname}</p>
                    <p>{student.username}</p>
                    <p>Birthday:{student.dob}</p>
                    <div className="cardToggle" onClick={() => toggle(index)}>
                        <span><a href="#">{selected == index ? 'Show Less..' : 'Show More...'}</a></span>
                    </div>
                </div>

                <div className={selected == index ? 'expandedDetails.show' : 'expandedDetails'}>
                    <div className="expandedDetailsContainer">
                        <section className="codewars">
                            <h3>Codewars:</h3>
                            <p>Current Totals:{student.codewars.current.total}</p>
                            <p>Last Week: {student.codewars.current.lastWeek}</p>
                            <p>Goal: {student.codewars.goal.total}</p>
                            <p>Percentage of Goal Achieved: {Math.round((student.codewars.current.total / student.codewars.goal.total) * 100)}%</p>
                        </section>
                        <section className="scores">
                            <h3>Scores</h3>
                            <p>Assignments: <>{(student.cohort.scores.assignments) * 100}%</></p>
                            <p>Projects: {(student.cohort.scores.projects) * 100}%</p>
                            <p>Assessments: {(student.cohort.scores.assessments) * 100}%</p>
                        </section>
                        <section className="certs">
                            <h3>Certifications</h3>
                            <p>Resume: {student.certifications.resume ? '✓' : '✘'}</p>
                            <p>LinkedIn: {student.certifications.linkedin ? '✓' : '✘'}</p>
                            <p>Mock Interview: {student.certifications.mockInterview ? '✓' : '✘'}</p>
                            <p>GitHub: {student.certifications.github ? '✓' : '✘'}</p>
                        </section>
                    </div>
                </div>
            </div>
        )
    })



    return (
        <div>
            {studentInfo}
        </div>
    )
}