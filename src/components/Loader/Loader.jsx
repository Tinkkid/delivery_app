import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        margin: '100px auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Oval
        height={80}
        width={80}
        color="#f7e11ede"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#e9e622de"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      ;
    </div>
  );
};
