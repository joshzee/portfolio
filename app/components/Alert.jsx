const Alert = ({ type, text }) => {
  return (
    <div className="relative flex ml-5 text-center">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-pu text-indigo-100" : "bg-cy text-gld"
        } items-center  leading-none lg:rounded-md flex`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-pu" : "bg-cy"
          } flex rounded-md uppercase px-2 py-2 text-sm font-semibold mr-1.5`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-1 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
