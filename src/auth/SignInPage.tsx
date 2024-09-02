import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import heroBackground from "../assets/Cybersecurity.jpeg";

const SignInPage: React.FC = () => {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center items-center glassmorphism-auth h-screen w-full">
        <SignIn
          afterSignInUrl="/manage-rentals"
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default SignInPage;
