import './spinner.css';

export const Spinner = ({ size = 'md', className = '' }) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className={`spinner spinner-${size}`}></div>
    </div>
  );
};