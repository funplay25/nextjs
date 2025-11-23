import Image from "next/image";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonStyle =
    "background-dark400_light900 text-dark200_light900 body-medium min-h-12 px-4 py-3.5 flex-1 rounded-2 cursor-pointer";

  return (
    <div className="mt-10 gap-2.5 flex flex-wrap ">
      <Button className={buttonStyle}>
        <Image
          src={"/icons/github.svg"}
          width={23}
          height={23}
          alt="Github icon"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>

      <Button className={buttonStyle}>
        <Image
          src={"/icons/google.svg"}
          width={23}
          height={23}
          alt="Google icon"
          className=" mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
