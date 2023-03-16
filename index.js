const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="card-container">
      <h1 className="h1">Social Buttons</h1>
      <div className="button-container">
        <Button className="l-button" buttonText="Like" />
        <Button className="c-button" buttonText="Comment" />>
        <Button className="s-button" buttonText="Share" />>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
