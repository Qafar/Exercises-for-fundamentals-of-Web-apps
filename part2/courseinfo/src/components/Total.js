const Total = ({ totalExercises }) => {
    const totalOfExercises = totalExercises.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)
    return (
        <p>Number of exercises {totalOfExercises}</p>
    )
}

export default Total