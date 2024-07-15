import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarBorder } from 'react-icons/md';
import { MdOutlineStarHalf } from 'react-icons/md';
const Stars = ({ star }) => {
  return (
    <section>
      <span>
        {star >= 1 ? (
          <MdOutlineStar style={{ color: 'green' }} />
        ) : star >= 0.5 ? (
          <MdOutlineStarHalf style={{ color: 'green' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'green' }} />
        )}
      </span>
      <span>
        {star >= 2 ? (
          <MdOutlineStar style={{ color: 'green' }} />
        ) : star >= 1.5 ? (
          <MdOutlineStarHalf style={{ color: 'green' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'green' }} />
        )}
      </span>
      <span>
        {star >= 3 ? (
          <MdOutlineStar style={{ color: 'green' }} />
        ) : star >= 2.5 ? (
          <MdOutlineStarHalf style={{ color: 'green' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'green' }} />
        )}
      </span>
      <span>
        {star >= 4 ? (
          <MdOutlineStar style={{ color: 'green' }} />
        ) : star >= 3.5 ? (
          <MdOutlineStarHalf style={{ color: 'green' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'green' }} />
        )}
      </span>
      <span>
        {star >= 5 ? (
          <MdOutlineStar style={{ color: 'green' }} />
        ) : star >= 4.5 ? (
          <MdOutlineStarHalf style={{ color: 'green' }} />
        ) : (
          <MdOutlineStarBorder style={{ color: 'green' }} />
        )}
      </span>
    </section>
  );
};

export default Stars;
