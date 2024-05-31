import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course

  return (
    <div className="course-container">
      <div className="heading-container">
        <h1 className="courseTitle">{courseTitle}</h1>
        <div className="clock-duration-container">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="des">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <p className="tag">{eachTag.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
