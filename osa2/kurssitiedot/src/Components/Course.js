
export const Header = ({ course }) => {
    return (
        <div>
            <h1>{course}</h1>
        </div>
    )
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (<Part key={part.id} part={part} />))}
        </div>
    );
};

const Part = ({ part }) => {
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    );
};

const Total = ({ parts }) => {
    return (
        <p>
            <strong>total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises</strong>
        </p>
    );
};

export const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};