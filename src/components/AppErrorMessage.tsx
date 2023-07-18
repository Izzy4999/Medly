/* eslint-disable @typescript-eslint/no-explicit-any */
interface IError {
  error?: any;
  visible?: any;
}

const AppErrorMessage = ({ error, visible }: IError) => {
  return (
    <>
      {visible && (
        <p className="text-danger mb-0" style={{ fontSize: 11 }}>
          {error}
        </p>
      )}
    </>
  );
};

export default AppErrorMessage;
