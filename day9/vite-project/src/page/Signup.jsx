import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";
const Signup = () => {
  return (
    <div className="container">
      <article className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form>
          <Label htmlFor={"name"}>name</Label>
          <Input id="name" required />

          <Label htmlFor={"password"}>password</Label>
          <Input id="password" type="password" required />

          <hr className="m-4" />
          <Button>submit</Button>
        </form>
      </article>
    </div>
  );
};

export default Signup;
