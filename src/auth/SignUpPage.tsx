import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import heroBackground from "../assets/Cybersecurity.jpeg";

const SignUpPage = () => {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <img src={heroBackground} alt="background" className="size-full" />
      </div>

      <div className="flex justify-center  items-center glassmorphism-auth h-screen w-full">
        <SignUp
          afterSignInUrl="/manage-rentals"
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default SignUpPage;
