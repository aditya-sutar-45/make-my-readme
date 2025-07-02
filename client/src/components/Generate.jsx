function Generate() {
  return (
    <div className="h-[50vh] w-full">
      <div className="h-3/12">
        <h1 className="text-2xl text-primary text-center mt-5">
          Generate a README.md
        </h1>
        <p className="m-2">
          Describe the project you want the README.md file to be generated for
          and you will get a response!
        </p>
      </div>
      <div className="h-[40%] w-full flex justify-center items-center flex-wrap">
        <textarea
          placeholder="Primary"
          className="textarea text-secondary resize-none h-full w-[95%]"
        ></textarea>
        <button className="btn btn-success btn-soft w-[95%] m-2">
          Generate
        </button>
      </div>
    </div>
  );
}

export default Generate;
