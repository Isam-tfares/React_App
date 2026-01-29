import './layouts.css';

export const ContentLayout = ({ title, children }) => {
  return (
    <div className="content-layout">
      <header className="content-header">
        <h1 className="content-title">{title}</h1>
      </header>
      <div className="content-body">{children}</div>
    </div>
  );
};