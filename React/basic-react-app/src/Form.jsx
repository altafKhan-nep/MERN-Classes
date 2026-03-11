function handleFormSubmit(event) {
  console.log("Form was submitted Successfully!");
  //   console.log(event);
  event.preventDefault();
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="PLEASE ENTER ANYTHING" />
      <button>Submit</button>
    </form>
  );
}
