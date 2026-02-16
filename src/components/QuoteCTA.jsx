import { Link } from 'react-router-dom';

const QuoteCTA = () => {
  return (
    <div className="page-cta">
      <Link to="/quote" className="btn btn-primary">
        Get a Quote
      </Link>
    </div>
  );
};

export default QuoteCTA;
