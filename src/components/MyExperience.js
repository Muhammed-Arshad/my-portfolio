import timelineElements from "../utils/TimelineElement.js"

import { ReactComponent as WorkIcon } from "../assets/work.svg"
import { ReactComponent as SchoolIcon } from "../assets/school.svg"
import HashgateLogo from "../assets/hashgate_logo.jpeg"
import NissiLogo from "../assets/nissisoftwaresystems_logo.jpeg"

import "../styles/MyExperience.styled.css"
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button
} from '../styles/Global.styled.js'

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

function MyExperience() {

    let workIconStyles = { background: "#d606d2" }
    let schoolIconStyles = { background: "#f9c74f" }

    const imageMap = {
      college: null, // You can add an image for the college if you have one
      nissi: NissiLogo,
      hashgate: HashgateLogo
  }

    return (
        <div>
            <Heading
                as='h2'
                size ='h2'
                align = 'center'
                top = '0.5rem'
                bottom = '1.5rem'>
                    My <BlueText>Experience</BlueText>
                </Heading>

            <VerticalTimeline>
        {timelineElements.map(element => {
          let isWorkIcon = element.icon === "work"
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                                <div>
                                    <img src={element.imag} alt="Hashgate Logo" className="hashgate-logo" height={120}
                                     width={140} />
                                    <a
                                        className={`button ${
                                            isWorkIcon ? "workButton" : "schoolButton"
                                        }`}
                                        href={element.link} target="_blank"
                                    >
                                        {element.buttonText}
                                    </a>
                                </div>
                            )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
        </div>
    );
}

export default MyExperience
