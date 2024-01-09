const GetCurrentPage = () => {
  const currentWindow = window.location.href;
  const regex = /[^/]*$/;
  return(regex.exec(currentWindow)[0]);
};

export default GetCurrentPage;
