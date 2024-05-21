function MainBody() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-16">
      <div>
        <h1 className="text-3xl font-bold pb-5">
          TextUtils - Word Counter, Character Counter, Remove Extra Space{" "}
        </h1>
        <textarea
          name="text"
          cols={120}
          rows={5}
          className="border-2 rounded-lg p-2"
          placeholder="Enter Text"
        ></textarea>

        <div className="flex gap-5 justify-center py-5">
          <button className="border-2 p-3 rounded-xl">UPPERCASE</button>
          <button className="border-2 p-3 rounded-xl">LOWERCASE</button>
          <button className="border-2 p-3 rounded-xl">CLEAR TEXT</button>
          <button className="border-2 p-3 rounded-xl">COPY TO CLIPBOARD</button>
          <button className="border-2 p-3 rounded-xl">
            REMOVE EXTRA SPACES
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold">Summary of your text</h1>
          <div className="flex flex-col justify-start gap-5 py-5">
            <p>Number of words :</p>
            <p>Number of Characters :</p>
            <p>Reading Time :</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-center py-5">
            Preview Summary
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
