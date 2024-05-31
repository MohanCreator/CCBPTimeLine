import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-container">
      <h1 className="my">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono className="chrono" mode="VERTICAL" items={timelineItemsList}>
          {timelineItemsList.map(courseOrProject => {
            if (courseOrProject.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={courseOrProject.id}
                  course={courseOrProject}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={courseOrProject.id}
                project={courseOrProject}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
