// export const PersonForm = ({
//   addNewName,
//   newName,
//   addPerson,
//   newNumber,
//   addNumber,
// }) => {
//   return (
//     <>
//       <form onSubmit={addNewName}>
//         <div>
//           name: <input value={newName} onChange={addPerson} />
//         </div>
//         number: <input value={newNumber} onChange={addNumber} />
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//     </>
//   );
// };

export const PersonForm = ({
  handleChange,
  newName,
  addPerson,
  newNumber,
  addNumber,
}) => {
  return (
    <form onSubmit={handleChange}>
      <div>
        name: <input value={newName} onChange={addPerson} />
      </div>
      <div>
        number: <input value={newNumber} onChange={addNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
