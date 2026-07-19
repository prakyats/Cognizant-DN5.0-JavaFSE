function CourseDetails(props) {

  return (
    <ul>
      {props.courses.map(course => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <h5>{course.date}</h5>
        </div>
      ))}
    </ul>
  );
}

export default CourseDetails;