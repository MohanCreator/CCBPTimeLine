import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = project

  return (
    <div className="project-container">
      <img className="image" src={imageUrl} alt="project" />
      <div className="title-container">
        <h1>{projectTitle}</h1>
        <div className="clander-duration-container">
          <AiFillCalendar className="clander" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} type="button" className="visit-button">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
