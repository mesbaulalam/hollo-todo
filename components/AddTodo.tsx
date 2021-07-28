const AddTodo: React.FC = () => {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mx-auto block w-1/2 left-0 right-0 h-14 -mt-8 absolute rounded-md"
        placeholder="Add Todo"
      />
      <div className="flex pt-10 justify-center">
        <div className="py-2 px-4 bg-green-400 text-white rounded-md mr-5">
          Add Todo!
        </div>
        <div className="py-2 px-4 bg-green-400 text-white rounded-md">
          Clear Text
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
