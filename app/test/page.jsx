const page = () => {
  const handleForm = async (formData) => {
    "use server";
    const title = formData.get("title");
    console.log(title);
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="title" />
        <button>Send</button>
      </form>
    </div>
  );
};
export default page;
