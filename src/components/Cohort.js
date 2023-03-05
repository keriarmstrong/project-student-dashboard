export default function Cohort(props) {

    // set student array using props
    const arr = props.students

    // new array with unique years // a == yearsArray(arr)
    const sortedYears = function yearsArray(arr) {
        var years = [];
        for (var i = 0; i < arr.length; i++)
            if (years.indexOf(arr[i].cohort.cohortCode) === -1 && arr[i].cohort.cohortCode !== '')
                years.push(arr[i].cohort.cohortCode);

        (years.slice(-4)).sort(function (b, a) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });

        return (
            <>
                {/* map through years array to create li for each year  */}
                {years.map((year) => {
                    return (

                        // set onClick to run sorted function
                        <div className="CohortList">
                            <li onClick={() => { props.sorted(year) }}>
                                {year.slice(0, -4)} {year.slice(-4)}
                            </li>
                        </div>
                    )})
                }
            </>
        )
    }


    return (
        <>
            <div>
                <h2>Choose a Class by Start Date</h2>
                <div className="CohortList">
                    <li onClick={() => { props.allStudents() }}><h3>All Student</h3></li>
                </div>
            </div>
            <div>
                <h3>{sortedYears(arr)}</h3>
            </div>
        </>

    )
}