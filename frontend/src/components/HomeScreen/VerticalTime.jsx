import PropTypes from 'prop-types'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import LineIcon from '../Icons/LineIcon'

const VerticalTime = ({ date, title1, title2, subtitle, description, id }) => {
  return (
    <VerticalTimelineElement
      key={id}
      className={`vertical-timeline-element--work -mb-[10rem]`}
      contentStyle={{
        background: '#2C2B2B',
        color: '#fff',
        boxShadow: 'none',
        marginLeft: id % 2 ? '-3.5rem' : '0',
        marginRight: id % 2 === 0 ? '-3.5rem' : 0,
        width: '51%',
      }}
      contentArrowStyle={{ display: 'none' }}
      iconStyle={{
        border: '0px',
        boxShadow: 'none',
        width: '34px',
        transform: `${id % 2 === 0 ? 'rotate(180deg) translateX(-1.44rem)' : ''}`,
      }}
      // fix the paddinGs for responsive design margin and svg --remove padding
      icon={<LineIcon />}
      position={id % 2 ? 'left' : 'right'}
    >
      <div className="items-left relative mb-1 space-x-2"></div>
      <h3 className="vertical-timeline-element-subtitle ml-1 font-mulish text-button font-medium text-secondary">
        {date}
      </h3>
      <h4 className="vertical-timeline-element-title mt-3 min-w-80 bg-gradient bg-clip-text text-content-heading text-transparent">
        <p
          style={{
            marginTop: 0,
            fontWeight: 800,
            fontSize: '1.625rem',
            lineHeight: '2rem',
          }}
        >
          {title1}
        </p>
        <p
          style={{
            marginTop: 0,
            fontWeight: 800,
            fontSize: '1.625rem',
            lineHeight: '2rem',
          }}
        >
          {title2}
        </p>
      </h4>
      <h5 className="te mt-3 text-[20px] text-primary"> {subtitle}</h5>
      <p
        className="mt-3 text-body leading-7 text-secondary"
        style={{
          fontWeight: 300,
          marginTop: '1rem',
          fontSize: '1rem',
          lineHeight: '1.75rem',
        }}
      >
        {description}
      </p>
    </VerticalTimelineElement>
  )
}

export default VerticalTime

VerticalTime.propTypes = {
  date: PropTypes.string.isRequired, // Add this line to validate the 'date' prop
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
