const handleClick = (num) => {
  num += 1;
  console.log(num);
};

const CreateButton = ({ num }) => {
  return <button onClick={() => handleClick(num)}>Haz click aqui</button>;
};

export const ComponentePractica = ({ num }) => {
  return (
    <>
      <h1>ComponentePractica</h1>
      <CreateButton num={num} />
    </>
  );
};
