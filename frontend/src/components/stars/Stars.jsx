import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarBorder } from 'react-icons/md';
import { MdOutlineStarHalf } from 'react-icons/md';
const Stars = ({ star }) => {
  return (
    <section>
      <span>
        {star >= 1 ? (
          <MdOutlineStar style={{ color: 'yellow' }} />
        ) : star >= 0.5 ? (
          <MdOutlineStarHalf style={{ color: 'yellow' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'yellow' }} />
        )}
      </span>
      <span>
        {star >= 2 ? (
          <MdOutlineStar style={{ color: 'yellow' }} />
        ) : star >= 1.5 ? (
          <MdOutlineStarHalf style={{ color: 'yellow' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'yellow' }} />
        )}
      </span>
      <span>
        {star >= 3 ? (
          <MdOutlineStar style={{ color: 'yellow' }} />
        ) : star >= 2.5 ? (
          <MdOutlineStarHalf style={{ color: 'yellow' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'yellow' }} />
        )}
      </span>
      <span>
        {star >= 4 ? (
          <MdOutlineStar style={{ color: 'yellow' }} />
        ) : star >= 3.5 ? (
          <MdOutlineStarHalf style={{ color: 'yellow' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'yellow' }} />
        )}
      </span>
      <span>
        {star >= 5 ? (
          <MdOutlineStar style={{ color: 'yellow' }} />
        ) : star >= 4.5 ? (
          <MdOutlineStarHalf style={{ color: 'yellow' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'yellow' }} />
        )}
      </span>
    </section>
  );
};

export default Stars;
